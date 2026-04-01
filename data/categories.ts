export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  count: number
  badge?: string
}

export const categories: Category[] = [
  {
    id: 'spices',
    name: 'Spices & Masalas',
    slug: 'spices-masalas',
    description: 'Over 265 authentic spices — from Rosmarin & Oregano to Garam Masala & Turmeric',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80&auto=format&fit=crop',
    count: 265,
    badge: 'Popular',
  },
  {
    id: 'rice-grains',
    name: 'Rice & Grains',
    slug: 'rice-grains',
    description: 'Iranstar, Ariana, Al Meraj Basmati, Sediq, ZADRAN — premium long-grain rice & flour',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80&auto=format&fit=crop',
    count: 138,
  },
  {
    id: 'canned-goods',
    name: 'Canned Goods',
    slug: 'canned-goods',
    description: 'DAMAK canned legumes, tomato paste, paprika paste, olives & preserved vegetables',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80&auto=format&fit=crop',
    count: 168,
    badge: 'Bestseller',
  },
  {
    id: 'tea-coffee',
    name: 'Tea & Coffee',
    slug: 'tea-coffee',
    description: 'Colombo Orient, Mevlana Yaprak Çay, Ceylon, Cardamom & Green Tea, Nescafe Gold',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80&auto=format&fit=crop',
    count: 62,
  },
  {
    id: 'snacks-sweets',
    name: 'Snacks & Sweets',
    slug: 'snacks-sweets',
    description: 'Date chocolates, traditional pastries, sunflower seeds, crackers & candy',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80&auto=format&fit=crop',
    count: 359,
    badge: 'New In',
  },
  {
    id: 'fresh-produce',
    name: 'Fresh Produce',
    slug: 'fresh-produce',
    description: 'Fresh ginger, okra, Indian chilli, karella, methi, curry leaf & seasonal vegetables',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&auto=format&fit=crop',
    count: 161,
  },
  {
    id: 'dairy-refrigerated',
    name: 'Dairy & Refrigerated',
    slug: 'dairy-refrigerated',
    description: 'Halloumi, Labneh, Ayran, Gouda, Teigblätter, Käse & fresh dairy products',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80&auto=format&fit=crop',
    count: 155,
  },
  {
    id: 'beverages',
    name: 'Beverages & Juices',
    slug: 'beverages',
    description: 'Red Bull, Carabao, mango & guava nectar, pomegranate juice & soft drinks',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&q=80&auto=format&fit=crop',
    count: 122,
  },
]
