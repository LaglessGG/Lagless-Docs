'use client';

import { source } from '@/lib/source';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { useMemo } from 'react';

interface CategoryArticlesProps {
  categorySlug: string;
}

export function CategoryArticles({ categorySlug }: CategoryArticlesProps) {
  const articles = useMemo(() => {
    const allPages = source.getPages();
    
    return allPages
      .filter((page) => {
        const pathSegments = page.url.split('/').filter(Boolean);
        const categorySegments = categorySlug.split('/').filter(Boolean);
        
        // Check if the page URL starts with the category slug
        // and is not the category index page itself
        const isInCategory = categorySegments.every((segment, index) => 
          pathSegments[index] === segment
        );
        
        // Include pages that are in this category but not the category index page
        return isInCategory && pathSegments.length > categorySegments.length;
      })
      .map((page) => ({
        title: page.data.title || 'Untitled',
        description: page.data.description || '',
        url: page.url
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [categorySlug]);

  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No articles found in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Articles in this Category</h2>
      <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card
            key={article.url}
            title={article.title}
            description={article.description}
            href={article.url}
          />
        ))}
      </Cards>
    </div>
  );
} 