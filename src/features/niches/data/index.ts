import type { NicheEntry } from '../types';
import { dental } from './dental';
import { aesthetic } from './aesthetic';
import { beauty } from './beauty';
import { medical } from './medical';
import { fitness } from './fitness';
import { spa } from './spa';
import { barbershop } from './barbershop';
import { tattoo } from './tattoo';
import { autoservice } from './autoservice';
import { autoimport } from './autoimport';
import { realestate } from './realestate';
import { hotel } from './hotel';
import { tour } from './tour';
import { vet } from './vet';
import { language } from './language';
import { driving } from './driving';
import { legal } from './legal';
import { physio } from './physio';
import { plasticsurgery } from './plasticsurgery';
import { derma } from './derma';
import { nutrition } from './nutrition';
import { renovation } from './renovation';
import { interior } from './interior';
import { homeservices } from './homeservices';
import { cleaning } from './cleaning';
import { event } from './event';
import { photographer } from './photographer';
import { school } from './school';
import { shop } from './shop';
import { restaurant } from './restaurant';

/**
 * Server-side registry of every niche landing. Imported by the landing stubs
 * (each pulls only its own entry for code-splitting) and by /api/chat-demo (via
 * persona.ts) to resolve the demo persona. NOT imported by any client component:
 * the widget uses the lightweight ../paths.ts slug list instead.
 *
 * Grows as niches are authored. Keep ../paths.ts in sync (one slug per entry).
 */
export const NICHE_ENTRIES: NicheEntry[] = [
  dental, aesthetic, beauty, medical, fitness, spa,
  barbershop, tattoo, autoservice, autoimport, realestate, hotel, tour, vet,
  language, driving, legal, physio, plasticsurgery, derma, nutrition, renovation,
  interior, homeservices, cleaning, event, photographer, school, shop, restaurant,
];

export const NICHES: Record<string, NicheEntry> = Object.fromEntries(
  NICHE_ENTRIES.map((e) => [e.key, e]),
);

export function getNicheByKey(key: string): NicheEntry | undefined {
  return NICHES[key];
}
