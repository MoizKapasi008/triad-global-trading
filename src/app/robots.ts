import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/markdown', '/llms.txt', '/llms-full.txt', '/sitemap.xml'],
        disallow: ['/api/contact'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Cohere-ai',
          'anthropic-ai',
          'Omgilibot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://triadglobaltrading.com/sitemap.xml',
    host: 'https://triadglobaltrading.com',
  };
}

