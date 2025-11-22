'use client';

import React, { useEffect } from 'react';
import { trackCTAClick } from '@/lib/analytics';

interface CTACardProps {
  href: string;
  location: string;
  campaign?: string;
  className?: string;
  children: React.ReactNode;
}

export function CTACard({ href, location, campaign, className, children }: CTACardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      trackCTAClick(location, campaign);
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener('click', handleClick);
      return () => {
        cardElement.removeEventListener('click', handleClick);
      };
    }
  }, [location, campaign]);

  return (
    <div ref={cardRef} className={`group ${className}`}>
      <a 
        href={href}
        className="block transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300">
          {children}
        </div>
      </a>
    </div>
  );
} 