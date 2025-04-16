import Image from "next/image";
import Link from "next/link";
import ImageMasonry from "@/components/ImageMasonry";

const sampleImages = [
  {
    img: "/images/gallery/sleep1.jpg",
    title: "Healthy Sleep Habits"
  },
  {
    img: "/images/gallery/sleep2.webp",
    title: "Sleep Research"
  },
  {
    img: "/images/gallery/sleep3.webp",
    title: "Community Support"
  },
  {
    img: "/images/gallery/sleep4.webp",
    title: "Education Programs"
  },
  {
    img: "/images/gallery/sleep5.jpg",
    title: "Wellness Workshops"
  },
  {
    img: "/images/gallery/sleep6.jpg",
    title: "Sleep Awareness"
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-100">
        <div className="container-responsive">
          <div className="flex-responsive items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="heading-responsive font-bold text-[var(--primary-purple)] mb-6">
                Humane Sleep Project
              </h1>
              <p className="text-responsive text-gray-600 mb-8">
              Providing Compassion, One Sleep at a Time.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More
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
      <section className="section-padding bg-white">
        <div className="container-responsive text-center">
          <h2 className="heading-responsive font-bold text-[var(--primary-purple)] mb-8">
            Our Mission
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto mb-12">
            We are committed to promoting healthy sleep habits and raising awareness about the importance of quality sleep for overall well-being.
          </p>
          <div className="mt-8">
            <ImageMasonry images={sampleImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
