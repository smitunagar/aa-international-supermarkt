# A&A International Supermarkt

Premium Indian & International Grocery Store — **Next.js headless ecommerce frontend**, ready to connect with **Shopify Storefront API**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO&env=NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,NEXT_PUBLIC_SITE_URL)

---

## ✨ Features

- **30 static pages** — homepage, shop, categories, PDPs, offers, gifts, blog, contact, FAQ, delivery, about, 404
- **Shopify Storefront API** — products, collections, cart, checkout all wired to Shopify
- **Next.js 14** App Router + TypeScript
- **Tailwind CSS** with custom brand design tokens (forest, saffron, spice, warm)
- **Framer Motion** scroll animations
- **DHL delivery** integration text + returns flow
- **German localisation** — de_DE metadata, GDPR footer links (Impressum, Datenschutz, AGB)
- **SEO** — OpenGraph, Twitter Card, sitemap-ready
- **One-click Vercel deploy** with GitHub Actions CI

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/aa-supermarkt.git
cd aa-supermarkt
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-public-storefront-access-token
NEXT_PUBLIC_SITE_URL=https://your-domain.de
```

### 3. Run locally

```bash
npm run dev
# Open http://localhost:3000
```

---

## 🛒 Connecting to Shopify

### Create a Storefront API access token

1. Go to your **Shopify Admin** → **Settings** → **Apps and sales channels**
2. Click **Develop apps** → **Create an app**
3. Name it e.g. `Next.js Headless`
4. Under **Configuration** → **Storefront API access scopes**, enable:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_customers`
5. Click **Install app** → copy the **Storefront API access token**
6. Paste it into `.env.local` as `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN`

### Sync product handles

The product pages use slugs that match Shopify product **handles**. Make sure your Shopify products have the same handles as referenced in `data/products.ts`:

| Page URL | Shopify Handle |
|---|---|
| `/products/daawat-basmati-rice-5kg` | `daawat-basmati-rice-5kg` |
| `/products/mdh-deggi-mirch-500g` | `mdh-deggi-mirch-500g` |
| `/products/amul-pure-ghee-1kg` | `amul-pure-ghee-1kg` |
| *…and so on* | |

### Sync collection handles

Category pages map to Shopify collections:

| Page URL | Shopify Collection Handle |
|---|---|
| `/categories/spices-masalas` | `spices-masalas` |
| `/categories/rice-atta` | `rice-atta` |
| `/categories/lentils-pulses` | `lentils-pulses` |
| *…and so on* | |

---

## 🌐 Deploying to Vercel

### Option A — One-click (recommended)

Click the **Deploy with Vercel** button at the top of this README. Add your environment variables in the Vercel wizard.

### Option B — GitHub Actions (CI/CD)

1. Push this repo to GitHub
2. In Vercel, create a new project linked to the repo
3. In GitHub → Settings → Secrets → Actions, add:
   - `VERCEL_TOKEN` — from vercel.com/account/tokens
   - `VERCEL_ORG_ID` — from `.vercel/project.json` after `vercel link`
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json`
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
   - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`

Every push to `main` deploys to production. Pull requests get preview deployments.

---

## 📁 Project Structure

```
aa-supermarkt/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── shop/               # All products
│   ├── products/[slug]/    # Product detail pages (8 static)
│   ├── categories/         # Category overview + detail pages (8 static)
│   ├── offers/             # Promotions
│   ├── bestsellers/        # Best sellers
│   ├── new/                # New arrivals
│   ├── gifts/              # Gift hampers
│   ├── about/              # Brand story
│   ├── contact/            # Contact form
│   ├── faq/                # FAQ accordion
│   ├── delivery/           # Delivery & returns info
│   └── not-found.tsx       # 404 page
│
├── components/
│   ├── layout/             # Header, Footer, PageLayout
│   ├── sections/           # Homepage section components
│   ├── product/            # ProductGallery, ProductInfo
│   └── ui/                 # Button, ProductCard, CategoryCard
│
├── data/
│   ├── products.ts         # Mock product data (replaced by Shopify API)
│   └── categories.ts       # Mock category data (replaced by Shopify API)
│
├── lib/
│   ├── shopify.ts          # Shopify Storefront API client + helpers
│   └── utils.ts            # cn() class merging utility
│
├── .env.example            # Environment variable template
├── vercel.json             # Vercel deployment config
└── .github/workflows/      # GitHub Actions CI/CD
```

---

## 🎨 Design System

| Token | Color | Usage |
|---|---|---|
| `forest` | Deep green (`#0F3F25`) | Primary CTA, nav, badges |
| `saffron` | Warm orange (`#E07C39`) | Accents, Buy Now, highlights |
| `spice` | Terracotta (`#B5422C`) | Sale badges, error states |
| `warm` | Beige (`#FAF8F4`) | Page backgrounds, borders |

Fonts: **Playfair Display** (headings) + **Inter** (body)

---

## 📜 Licence

Private / Proprietary — A&A International Supermarkt GmbH, Frankfurt am Main.
