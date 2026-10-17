import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reviews' }),
  schema: z.object({
    game: z.string(),
    subtitle: z.string(),
    verdict: z.enum(['worth-your-time', 'worth-it-on-sale', 'for-fans-only', 'skip-it']),
    stars: z.number().min(0).max(5).multipleOf(0.5),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    spoilerFree: z.boolean().default(true),
    readingTime: z.string().optional(),
    curator: z.string().default('The Curator'),
    acquisition: z.string(),
    /** Kort antwoord bovenaan ("In het kort"). */
    intro: z.string().optional(),
    /** Kop boven de volledige review (de MDX-body). */
    reviewTitle: z.string().optional(),
    release: z.string().optional(),
    chips: z.object({
      speelduur: z.string(),
      genre: z.string(),
      spelers: z.string(),
      moeilijkheid: z.string(),
      platforms: z.array(z.string()),
      prijs: z.string(),
    }),
    scorecard: z.object({
      verhaal: z.number(),
      wereld: z.number(),
      gameplay: z.number(),
      exploratie: z.number(),
      personages: z.number(),
      progressie: z.number(),
      toegankelijkheid: z.number(),
      value: z.number(),
    }),
    /** Eerste zin wordt de cursieve tagline in de verdict-kaart, de rest de toelichting. */
    verdictText: z.string(),
    timeValue: z.object({ score: z.number(), quote: z.string(), tags: z.array(z.string()).default([]) }),
    pros: z.array(z.object({ title: z.string(), text: z.string() })),
    cons: z.array(z.object({ title: z.string(), text: z.string() })),
    priceTiers: z.array(
      z.object({ price: z.string(), label: z.string(), highlight: z.boolean().default(false) }),
    ),
    forWho: z.object({ yes: z.array(z.string()), no: z.array(z.string()) }),
    conclusion: z.string(),
    /** "Als je dit goed vond…" — vergelijkbare games. `href` alleen als er een review van is. */
    related: z.array(
      z.object({ title: z.string(), match: z.number(), verdict: z.string(), note: z.string(), href: z.string().optional() }),
    ),
    /** "Misschien vind je dit ook interessant" — artikelen/guides. */
    readMore: z.array(z.object({ tag: z.string(), title: z.string(), href: z.string().optional() })).default([]),
    /** Toon de Backlog Club-band ("Speel je deze mee?"). */
    backlogClub: z.boolean().default(false),
  }),
});

export const collections = { reviews };
