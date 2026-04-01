/**
 * Shopify Storefront API Integration
 * ──────────────────────────────────
 * This file connects the Next.js frontend to your Shopify store
 * via the Storefront API (headless commerce).
 *
 * Required environment variables (see .env.example):
 *   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN   – your-store.myshopify.com
 *   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN – public storefront access token
 */

import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const domain   = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN   ?? ''
const token    = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? ''
const apiVersion = '2026-04'

// ── Client (safe to import in both server/client components) ──────────────────
export const shopifyClient = domain && token
  ? createStorefrontApiClient({
      storeDomain: domain,
      apiVersion,
      publicAccessToken: token,
    })
  : null

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Gracefully run a Storefront GraphQL query.
 * Falls back to `null` when credentials are not configured (local dev with
 * mock data).
 */
export async function shopifyFetch<T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T | null> {
  if (!shopifyClient) return null
  try {
    const { data, errors } = await shopifyClient.request<T>(query, { variables })
    if (errors) throw errors
    return data ?? null
  } catch (err) {
    console.error('[Shopify] fetch error', err)
    return null
  }
}

// ── GraphQL fragments ─────────────────────────────────────────────────────────

const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFragment on Product {
    id
    title
    handle
    description
    priceRange { minVariantPrice { amount currencyCode } }
    compareAtPriceRange { minVariantPrice { amount currencyCode } }
    images(first: 4) { edges { node { url altText } } }
    variants(first: 10) {
      edges {
        node {
          id
          title
          price { amount currencyCode }
          compareAtPrice { amount currencyCode }
          availableForSale
        }
      }
    }
    metafield(namespace: "custom", key: "badge") { value }
    tags
  }
`

// ── Queries ───────────────────────────────────────────────────────────────────

export const GET_PRODUCTS = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int!, $cursor: String, $query: String) {
    products(first: $first, after: $cursor, query: $query) {
      pageInfo { hasNextPage endCursor }
      edges { node { ...ProductFragment } }
    }
  }
`

export const GET_PRODUCT_BY_HANDLE = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) { ...ProductFragment }
  }
`

export const GET_COLLECTIONS = /* GraphQL */ `
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image { url altText }
          products(first: 1) { edges { node { id } } }
        }
      }
    }
  }
`

export const GET_COLLECTION_BY_HANDLE = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetCollectionByHandle($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      title
      description
      image { url altText }
      products(first: $first) {
        pageInfo { hasNextPage endCursor }
        edges { node { ...ProductFragment } }
      }
    }
  }
`

export const CREATE_CART = /* GraphQL */ `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise { ... on ProductVariant { id title product { title } price { amount } } }
            }
          }
        }
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount     { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`

export const ADD_TO_CART = /* GraphQL */ `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 50) { edges { node { id quantity merchandise { ... on ProductVariant { id title price { amount } } } } } }
        cost { totalAmount { amount currencyCode } }
      }
      userErrors { field message }
    }
  }
`

export const UPDATE_CART = /* GraphQL */ `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 50) { edges { node { id quantity merchandise { ... on ProductVariant { id title price { amount } } } } } }
        cost { totalAmount { amount currencyCode } }
      }
      userErrors { field message }
    }
  }
`

export const REMOVE_FROM_CART = /* GraphQL */ `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        lines(first: 50) { edges { node { id quantity } } }
        cost { totalAmount { amount currencyCode } }
      }
      userErrors { field message }
    }
  }
`

// ── Type helpers ──────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  compareAtPriceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  images: { edges: { node: { url: string; altText: string | null } }[] }
  variants: { edges: { node: ShopifyVariant }[] }
  metafield: { value: string } | null
  tags: string[]
}

export interface ShopifyVariant {
  id: string
  title: string
  price: { amount: string; currencyCode: string }
  compareAtPrice: { amount: string; currencyCode: string } | null
  availableForSale: boolean
}

export interface ShopifyCollection {
  id: string
  title: string
  handle: string
  description: string
  image: { url: string; altText: string | null } | null
  products: { edges: { node: ShopifyProduct }[] }
}

/** Convert a Shopify product into the local Product shape used by UI components */
export function normalizeProduct(p: ShopifyProduct) {
  const price         = parseFloat(p.priceRange.minVariantPrice.amount)
  const compareAt     = parseFloat(p.compareAtPriceRange.minVariantPrice.amount)
  const hasDiscount   = compareAt > price
  return {
    id:            p.id,
    name:          p.title,
    slug:          p.handle,
    description:   p.description,
    price,
    originalPrice: hasDiscount ? compareAt : undefined,
    image:         p.images.edges[0]?.node.url ?? '',
    images:        p.images.edges.map(e => e.node.url),
    badge:         p.metafield?.value ?? undefined,
    tags:          p.tags,
    inStock:       p.variants.edges.some(v => v.node.availableForSale),
    variants:      p.variants.edges.map(v => ({
      id:            v.node.id,
      label:         v.node.title,
      price:         parseFloat(v.node.price.amount),
      originalPrice: v.node.compareAtPrice ? parseFloat(v.node.compareAtPrice.amount) : undefined,
      inStock:       v.node.availableForSale,
    })),
  }
}
