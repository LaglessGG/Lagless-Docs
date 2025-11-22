# Lagless.gg Wiki/Docs - docs.lagless.gg

This is a Next.js application that uses the [Fumadocs](https://github.com/fuma-nama/fumadocs) library.

## Quick Start

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## How to Contribute

Welcome to our contribution guide! This comprehensive document will walk you through everything you need to know about contributing to our documentation, from setup to submission.

> **Note:** Before starting your contribution journey, please familiarize yourself with our code of conduct and contribution guidelines available in the repository.

### Quick Start Guide

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/lagdocs.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes following our documentation guidelines
5. Test your changes locally
6. Submit a pull request with a clear description of your changes

### Development Environment Setup

Choose your preferred package manager to set up the development environment:

#### npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build documentation
npm run build
```

#### pnpm

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build documentation
pnpm build
```

#### yarn

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build documentation
yarn build
```

### Documentation Components

#### Interactive Components

**Accordion Component**

The Accordion component helps organize content into collapsible sections:

```tsx
import { Accordions, Accordion } from '@/components/ui/accordion'

<Accordions>
  <Accordion title="Section 1" id="section-1">
    Content for section 1
  </Accordion>
  <Accordion title="Section 2" id="section-2">
    Content for section 2
  </Accordion>
</Accordions>
```

**Auto-Type Table**

Automatically generate type documentation tables:

```tsx
import { AutoTypeTable } from '@/components/ui/auto-type-table'

<AutoTypeTable type="MyInterface" />
```

**Dynamic Code Blocks**

Create interactive code examples:

```tsx
import { DynamicCodeBlock } from '@/components/ui/dynamic-code-block'

<DynamicCodeBlock 
  code="console.log('Hello World')"
  language="javascript"
  live={true}
/>
```

#### Content Enhancement Components

**Image Zoom**

Enable zoomable images in your documentation:

```mdx
import { ImageZoom } from '@/components/ui/image-zoom'

<ImageZoom src="/path/to/image.png" alt="Description" />
```

**Inline Table of Contents**

Add a table of contents within your content:

```mdx
import { InlineTOC } from '@/components/ui/inline-toc'

<InlineTOC />
```

**Step-by-Step Guides**

Create guided tutorials:

```mdx
import { Steps, Step } from 'fumadocs-ui/components/steps'

<Steps>
  <Step>
    First step description
  </Step>
  <Step>
    Second step description
  </Step>
  <Step>
    Third step description
  </Step>
</Steps>
```

#### Documentation Elements

**Callouts**

Highlight important information:

```mdx
<Callout type="info" title="Note">
  Important information goes here.
</Callout>

<Callout type="warn">
  Warning message goes here.
</Callout>

<Callout type="error">
  Error message goes here.
</Callout>
```

**Cards**

Display content in card format:

```mdx
<Cards>
  <Card
    title="Getting Started"
    href="/using-the-panel"
    icon={<BookOpenIcon />}
  >
    Learn the basics of our platform!
  </Card>
</Cards>
```

**Code Blocks**

Add syntax-highlighted code examples:

````mdx
```typescript title="example.ts" {1,3-4}
interface User {
  id: string;
  name: string;
  email: string;
}
```
````

### File Structure and Organization

#### Directory Structure

```
content/
├── docs/
│   ├── meta.json
│   ├── index.mdx
│   ├── getting-started/
│   │   ├── meta.json
│   │   ├── installation.mdx
│   │   └── configuration.mdx
│   └── components/
│       ├── meta.json
│       ├── buttons.mdx
│       └── forms.mdx
```

#### Meta File Configuration

Each directory should contain a `meta.json` file to define the section structure:

```json
{
  "title": "Billing & Payments",
  "icon": "CreditCard", 
  "index": "index"
} 
```

### Writing Guidelines

#### Markdown Conventions

- Use ATX-style headers (`#` for h1, `##` for h2, etc.)
- Include a single space after header markers
- Use backticks for inline code and triple backticks for code blocks
- Use reference-style links for better maintainability
- Include alt text for all images

#### Component Usage Best Practices

1. **Headings**
   - Use sentence case for titles
   - Include descriptive slugs
   - Keep hierarchy logical (don't skip levels)

2. **Code Blocks**
   - Always specify the language
   - Use line highlighting when helpful
   - Include copy buttons for longer snippets

3. **Callouts**
   - Use appropriate types (info, warning, error)
   - Keep content concise
   - Include titles when beneficial

### Pull Request Process

1. **Preparation**
   - Update your fork to the latest upstream changes
   - Run tests locally
   - Ensure all links work
   - Check for spelling and grammar

2. **Submission**
   - Fill out the pull request template completely
   - Include screenshots for visual changes
   - Link to related issues
   - Add labels as appropriate

3. **Review Process**
   - Respond to reviewer feedback promptly
   - Make requested changes in new commits
   - Squash commits before final merge

> **Note:** All pull requests automatically generate a preview deployment. Check the PR comments for the preview URL.

### Style Guide

#### Writing Style

- Use active voice
- Keep sentences concise
- Break up long paragraphs
- Use consistent terminology
- Include examples for complex concepts

#### Code Examples

- Follow our coding standards
- Include comments for clarity
- Show both basic and advanced usage
- Provide working examples
- Include error handling

### Additional Resources

- [Fumadocs Documentation](https://fumadocs.vercel.app/)
- [MDX Documentation](https://mdxjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

> **Note:** For the latest updates and detailed documentation, always refer to the official [Fumadocs documentation](https://fumadocs.vercel.app/).
