'use client';

import { source } from '@/lib/source';
import { Card, Cards } from 'fumadocs-ui/components/card';
import Link from 'next/link';
import { useMemo } from 'react';

export function CategoryOverview() {
  const categories = useMemo(() => {
    const allPages = source.getPages();
    const categoryMap = new Map<string, { title: string; description: string; icon?: string; articleCount: number }>();

    // Get all pages and organize by category
    allPages.forEach((page) => {
      const pathSegments = page.url.split('/').filter(Boolean);
      
      // Skip the root index page
      if (pathSegments.length === 0) return;
      
      const categorySlug = pathSegments[0];
      
      // Skip if this is a category index page
      if (pathSegments.length === 1) {
        // This is a category index page, get its metadata
        if (!categoryMap.has(categorySlug)) {
          categoryMap.set(categorySlug, {
            title: page.data.title || categorySlug,
            description: page.data.description || '',
            icon: page.data.icon,
            articleCount: 0
          });
        }
        return;
      }
      
      // This is an article within a category
      if (!categoryMap.has(categorySlug)) {
        categoryMap.set(categorySlug, {
          title: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1).replace('-', ' '),
          description: '',
          articleCount: 0
        });
      }
      
      const category = categoryMap.get(categorySlug)!;
      category.articleCount++;
    });

    return Array.from(categoryMap.entries()).map(([slug, data]) => ({
      slug,
      ...data
    }));
  }, []);

  return (
    <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card
          key={category.slug}
          title={category.title}
          description={category.description}
          href={`/${category.slug}`}
        />
      ))}
    </Cards>
  );
} 