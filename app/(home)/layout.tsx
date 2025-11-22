import { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { ServerCTA } from '@/components/ui/server-cta';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
      <ServerCTA />
    </DocsLayout>
  );
}