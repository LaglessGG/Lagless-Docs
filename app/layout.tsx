import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { TrackedLink } from '@/components/ui/tracked-link';

const inter = Inter({
  subsets: ['latin'],
});

const footerLinks = [
      { href: '/troubleshooting', label: 'Support' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' }
] as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.className} dark`} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        {/* Dark theme script - prevents flash of white content */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              })();
            `
          }}
        />
        {/* Plausible Analytics */}
        <script 
          defer 
          data-domain="docs.lagless.gg" 
          src="https://datapsal.lagless.gg/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
        />
        <script 
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
          }} 
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            attribute: 'class',
            defaultTheme: 'dark',
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
        <footer className="py-6 border-t border-border">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Lagless.gg. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              {footerLinks.map(({ href, label }) => (
                <TrackedLink 
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  eventName="FOOTER_LINK_CLICK"
                  eventProps={{ section: 'footer', link_text: label }}
                >
                  {label}
                </TrackedLink>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}