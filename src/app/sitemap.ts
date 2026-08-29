import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { categories } from '@/lib/categories';

const BASE_URL = 'https://triadglobaltrading.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/inquiry',
    '/harvest',
    '/quality-policy',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes];
}
