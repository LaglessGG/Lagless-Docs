'use client';

import React from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName?: string;
  eventProps?: Record<string, string | number>;
}

export function TrackedLink({ 
  href, 
  children, 
  className, 
  eventName = 'LINK_CLICK', 
  eventProps = {} 
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      url: href,
      ...eventProps
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
} 