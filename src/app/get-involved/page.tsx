import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Get Involved | Humane Sleep Project',
  description: 'Donate, start a Dreamcatchers club at your school, intern with HSP, host a drive, or partner with us.',
};

const OPTIONS = [
  {
    title: 'Donate',
    body: 'A cold-weather sleeping bag costs about $17 in bulk. Every dollar goes to bags, blankets, warm layers and hygiene kits.',
    cta: 'Donate now',
    href: SITE_CONFIG.donateUrl,
    external: true,
  },
  {
    title: 'Start a Dreamcatchers club',
    body: 'Students can run drives and packing days at their school. We share the playbook and help you get started.',
    cta: 'Tell us about your school',
    href: '/contact',
  },
  {
    title: 'Intern with us',
    body: 'Help with outreach, fundraising, events or the website, and get hands-on experience in how a nonprofit runs.',
    cta: 'Ask about internships',
    href: '/contact',
  },
  {
    title: 'Host a drive',
    body: 'Collect socks, blankets, hygiene items or warm clothing at your workplace, congregation or neighborhood.',
    cta: 'Plan a drive with us',
    href: '/contact',
  },
  {
    title: 'Partner with us',
    body: 'Shelters, churches and outreach teams can request supplies for the people they serve. Counts only, never names or locations.',
    cta: 'Request supplies',
    href: '/information#partner-request',
  },
  {
    title: 'Come to an event',
    body: 'Join a drive, a packing day or a community night. All are welcome.',
    cta: 'See events',
    href: '/events',
  },
];

export default function GetInvolved() {
  return (
    <main className="section-padding">
      <div className="container-responsive">
        <h1 className="heading-responsive font-bold text-white mb-4">Get involved</h1>
        <p className="text-responsive text-gray-200 mb-10 max-w-2xl">
          Everyone deserves a comfortable rest. Pick what fits your time and we&apos;ll take it from there.
        </p>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {OPTIONS.map((o) => (
            <li key={o.title} className="rounded-xl p-6 border border-white/20 bg-black/30 backdrop-blur flex flex-col">
              <h2 className="text-xl font-bold text-white mb-2">{o.title}</h2>
              <p className="text-gray-200 mb-6 flex-grow">{o.body}</p>
              {o.external ? (
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                >
                  {o.cta}
                </a>
              ) : (
                <Link
                  href={o.href}
                  className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg border border-white text-white font-semibold hover:bg-white/10"
                >
                  {o.cta}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
