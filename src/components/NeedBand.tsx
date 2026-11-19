import Link from 'next/link';
import CountUp from '@/components/common/CountUp';
import Reveal from '@/components/common/Reveal';
import { NEED, SITE_CONFIG } from '@/utils/constants';

// Why giving matters, in official numbers, with the source and year always on screen.
export default function NeedBand() {
  const { county, state } = NEED;
  const pct = Math.round((county.unsheltered / county.total) * 100);

  return (
    <section className="section-padding" aria-labelledby="need-heading">
      <Reveal className="container-responsive">
        <div className="rounded-2xl border border-white/20 bg-black/30 backdrop-blur p-8 md:p-12 text-center">
          <h2 id="need-heading" className="text-3xl md:text-4xl font-bold text-white mb-3">
            Most people without a home here are sleeping outside
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            On the night of the {county.year} count, {county.unsheltered.toLocaleString('en-US')} of the{' '}
            {county.total.toLocaleString('en-US')} people counted in {county.name} had no shelter at all.
          </p>
          <dl className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="stat-card rounded-xl p-6 border border-white/20">
              <dd className="text-4xl md:text-5xl font-bold text-white">
                <CountUp value={county.unsheltered} />
              </dd>
              <dt className="text-gray-200 mt-1">sleeping outside in {county.name}, {county.year}</dt>
            </div>
            <div className="stat-card rounded-xl p-6 border border-white/20">
              <dd className="text-4xl md:text-5xl font-bold text-white">
                <CountUp value={pct} />%
              </dd>
              <dt className="text-gray-200 mt-1">of those counted had no shelter</dt>
            </div>
            <div className="stat-card rounded-xl p-6 border border-white/20">
              <dd className="text-4xl md:text-5xl font-bold text-white">
                <CountUp value={state.unshelteredPct} />%
              </dd>
              <dt className="text-gray-200 mt-1">of homeless Californians were unsheltered, {state.year}</dt>
            </div>
          </dl>
          <p className="text-gray-100 text-lg mb-2 max-w-2xl mx-auto">
            A sleeping bag will not end homelessness. It will keep one person warmer and safer tonight while they wait
            for housing.
          </p>
          <p className="text-white font-semibold mb-6">
            $17 puts a cold-weather sleeping bag in someone&apos;s hands. $85 covers five.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={SITE_CONFIG.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-lg text-white font-semibold text-lg transition duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
            >
              Give $17
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-lg border border-white text-white font-semibold text-lg hover:bg-white/10"
            >
              Other ways to help
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Sources:{' '}
            <a href={county.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              {county.source}
            </a>
            ;{' '}
            <a href={state.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              {state.source}
            </a>
            . HSP is a 501(c)(3), EIN {SITE_CONFIG.ein}. Gifts are tax-deductible to the extent the law allows.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
