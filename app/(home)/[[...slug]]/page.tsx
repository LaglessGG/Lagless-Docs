import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { CTACard } from '@/components/ui/cta-card';
import { FolderIcon, FileIcon, MessageCircleIcon, UsersIcon, LifeBuoyIcon, ShieldIcon, BookOpenText, Server, Copyright, Scroll, Globe, GaugeIcon } from 'lucide-react';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from '@/components/tyep-table-auto';
import { createMetadata } from '@/lib/metadata';

export const dynamic = 'auto';
export const dynamicParams = true;

async function getLastModifiedTime(path: string) {
  return null;
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  
  // Debug the root page issue
  console.log('🔍 DEBUG: params =', JSON.stringify(params));
  console.log('🔍 DEBUG: params.slug =', params.slug);
  console.log('🔍 DEBUG: slug type =', typeof params.slug);
  console.log('🔍 DEBUG: slug length =', Array.isArray(params.slug) ? params.slug.length : 'not array');
  
  // Handle root page routing - try multiple approaches
  let page = source.getPage(params.slug);
  console.log('🔍 DEBUG: First attempt result =', page ? 'FOUND' : 'NOT FOUND');
  
  // If not found and this might be the root page, try different approaches
  if (!page && (!params.slug || params.slug.length === 0)) {
    // Try with empty array
    page = source.getPage([]);
    
    // Try with undefined explicitly
    if (!page) {
      page = source.getPage(undefined);
    }
    
    // Try with 'index' slug
    if (!page) {
      page = source.getPage(['index']);
    }
  }
  
  if (!page) notFound();

  const MDX = page.data.body;
  
  const filePath = `content/docs/${page.file.path}`;
  const lastModifiedTime = null;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      lastUpdate={undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ 
          ...defaultMdxComponents,
          img: (props: any) => <ImageZoom {...props} />,
          Callout,
          Steps,
          Tabs,
          Card,
          Cards,
          Tab,
          Step,
          Accordion,
          ImageZoom,
          CTACard,
          TypeTable,
          Server,
          BookOpenText,
          Scroll,
          Copyright,
          Accordions,
          LifeBuoyIcon,
          ShieldIcon,
          FolderIcon,
          FileIcon,
          MessageCircleIcon,
          UsersIcon,
          Globe,
          GaugeIcon
        }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  
  // Handle root page routing - try multiple approaches
  let page = source.getPage(params.slug);
  
  // If not found and this might be the root page, try different approaches
  if (!page && (!params.slug || params.slug.length === 0)) {
    // Try with empty array
    page = source.getPage([]);
    
    // Try with undefined explicitly
    if (!page) {
      page = source.getPage(undefined);
    }
    
    // Try with 'index' slug
    if (!page) {
      page = source.getPage(['index']);
    }
  }
  
  if (!page) notFound();

  return createMetadata({
    title: `${page.data.title} - Lagless.gg Docs`,
    description: page.data.description,
  });
} 