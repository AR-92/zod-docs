// Extract headings from MDX content for table of contents
export interface Heading {
  id: string;
  text: string;
  depth: number;
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length - 1;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, text, depth });
  }

  return headings;
}

export function renderTocItem(heading: Heading): string {
  const padding = heading.depth === 3 ? 'pl-8 sm:pl-7.5' : 'pl-5 sm:pl-4';
  return `
    <li class="-ml-px flex flex-col items-start gap-2">
      <a 
        data-toc-link="#${heading.id}" 
        href="#${heading.id}" 
        class="inline-block border-l border-transparent text-base/8 text-gray-600 hover:border-gray-950/25 hover:text-gray-950 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white ${padding} transition-colors"
      >
        ${heading.text}
      </a>
    </li>
  `;
}
