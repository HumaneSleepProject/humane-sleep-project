import Image from "next/image";
import Link from "next/link";
import ImageMasonry from "@/components/ImageMasonry";

const sampleImages = [
  {
    img: "/images/gallery/sleep6.jpg",
    title: "Healthy Sleep Habits",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep2.jpg",
    title: "Sleep Research",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep3.jpg",
    title: "Community Support",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep4.jpg",
    title: "Education Programs",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep5.jpg",
    title: "Wellness Workshops",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep1.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep7.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep8.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep9.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="flex-responsive items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="heading-responsive font-bold text-white mb-6">
                Humane Sleep Project
              </h1>
              <p className="text-responsive text-gray-200 mb-8">
                Providing Compassion, One Sleep at a Time.
              </p>
              <Link 
                href="https://www.paypal.com/donate/?hosted_button_id=24CGE6XCKU4H4"
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
                src="/logo.png"
                alt="Humane Sleep Project Logo"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-responsive text-center">
          <div className="mt-8">
            <ImageMasonry images={sampleImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
