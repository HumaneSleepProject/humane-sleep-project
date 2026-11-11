import Image from "next/image";
import Link from "next/link";
import ImageMasonry from "@/components/common/ImageMasonry";
import { IMPACT, SITE_CONFIG } from "@/utils/constants";
import { getGalleryImages } from "@/utils/gallery";

export default async function Home() {
  const galleryImages = await getGalleryImages();
  const totalItems = IMPACT.items.reduce((sum, i) => sum + i.value, 0);

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="flex-responsive items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="heading-responsive font-bold text-white mb-6">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-responsive text-gray-200 mb-8">
                {SITE_CONFIG.tagline}
              </p>
              <Link 
                href={SITE_CONFIG.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                }}
              >
                <span className="mr-2">Donate Now</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1 mt-8 sm:mt-0">
              <Image
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                width={500}
                height={500}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two paths: get help / give help */}
      <section className="section-padding" aria-labelledby="paths-heading">
        <div className="container-responsive">
          <h2 id="paths-heading" className="sr-only">How can we help you?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl p-8 border border-white/20 bg-black/30 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-3">I need help</h3>
              <p className="text-gray-200 mb-6">
                Find shelter, meals, showers, clinics and warm places in Livermore, Pleasanton and Dublin. Call 2-1-1
                any time for housing and services in your language.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/information#find-help"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200"
                >
                  Find help near you
                </Link>
                <a
                  href="tel:211"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-white text-white font-semibold hover:bg-white/10"
                >
                  Call 2-1-1
                </a>
              </div>
            </div>
            <div className="rounded-xl p-8 border border-white/20 bg-black/30 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-3">I want to help</h3>
              <p className="text-gray-200 mb-6">
                A cold-weather sleeping bag rated to 15°F costs about $17 when bought in bulk. Gifts go to sleeping
                bags, blankets, warm layers and hygiene kits for neighbors outside.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={SITE_CONFIG.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                >
                  Donate
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-white text-white font-semibold hover:bg-white/10"
                >
                  Volunteer or partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding" aria-labelledby="impact-heading">
        <div className="container-responsive text-center">
          <h2 id="impact-heading" className="text-3xl font-bold text-white mb-2">
            {totalItems.toLocaleString('en-US')} items given in {IMPACT.year}
          </h2>
          <p className="text-gray-200 mb-8">
            Across {IMPACT.cities} cities with {IMPACT.partners} community partners.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT.items.map((item) => (
              <div key={item.label} className="rounded-xl p-6 border border-white/20 bg-black/30">
                <dd className="text-4xl font-bold text-white">{item.value.toLocaleString('en-US')}</dd>
                <dt className="text-gray-200 mt-1">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-responsive text-center">
          <div className="mt-8">
            <ImageMasonry images={galleryImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
