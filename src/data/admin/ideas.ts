// Drive and event ideas. THIS FILE IS PUBLIC: no names of people we serve, no locations where anyone sleeps.
import type { Owner } from './team';

export type IdeaStatus = 'Idea' | 'Planning' | 'Scheduled' | 'Done';

export interface Idea {
  title: string;
  status: IdeaStatus;
  owner: Owner;
  why: string;
  needs: string;
  when?: string; // free text, e.g. "Dec 2026"
}

export const IDEAS: Idea[] = [
  { title: 'Winter outreach (Blizzard of Blessings)', status: 'Idea', owner: 'COO', when: 'Dec 2026', why: 'Ran in 2023 and 2024. Cold nights are when bags matter most.', needs: 'Sleeping bags (about $17 each), warm layers, hygiene kits, 6+ volunteers, partner sponsors.' },
  { title: 'Winter Warmth Kit drive', status: 'Idea', owner: 'COO', when: 'Nov to Dec 2026', why: 'Budgeted in an earlier grant plan at about $7.55 per kit.', needs: 'Beanies, socks, gloves, a kit bag. Collection bins at partners.' },
  { title: 'Second paint night in Pleasanton', status: 'Idea', owner: 'COO', when: '2027', why: 'Brushes and Bonds worked. The Pleasanton Civic Arts grant fits it.', needs: 'A Pleasanton venue and partner, art supplies, a Pleasanton resident on the board.' },
  { title: 'Dreamcatchers school clubs', status: 'Idea', owner: 'Members', why: 'Students run drives and packing days at their own schools.', needs: 'A one-page playbook, an HSP contact for each school.' },
  { title: 'Partner supply requests', status: 'Planning', owner: 'Ops intern', why: 'Shelters and outreach teams can request supplies on the Get Help page.', needs: 'Someone to answer requests within a week and log counts.' },
];
