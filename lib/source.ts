import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import Image from 'next/image';

// Custom game icons mapping
const customIcons: Record<string, React.ComponentType<any>> = {
  'vintage-story': (props: any) => createElement(Image, {
    src: "/images/game-icons/vintage-story.png",
    alt: "Vintage Story",
    width: 16,
    height: 16,
    className: "inline-block",
    ...props
  }),
  'minecraft': (props: any) => createElement(Image, {
    src: "/images/game-icons/minecraft.png",
    alt: "Minecraft",
    width: 16,
    height: 16,
    className: "inline-block",
    ...props
  }),
  'satisfactory': (props: any) => createElement(Image, {
    src: "/images/game-icons/satisfactory.svg",
    alt: "Satisfactory",
    width: 16,
    height: 16,
    className: "inline-block",
    ...props
  }),
};

export const source = loader({
  baseUrl: '/',
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return;

    // Check for custom icons first
    if (icon in customIcons) {
      return createElement(customIcons[icon]);
    }

    // Fall back to Lucide icons
    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  }
});
