export default function About() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--primary-purple)] mb-8">
            About Us
          </h1>
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              The Humane Sleep Project is a nonprofit organization dedicated to improving sleep health and awareness through education, research, and community support.
            </p>
            <h2 className="text-2xl font-bold text-[var(--primary-purple)] mt-8 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We envision a world where everyone has access to the knowledge and resources they need to achieve healthy, restorative sleep.
            </p>
            <h2 className="text-2xl font-bold text-[var(--primary-purple)] mt-8 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Our team consists of sleep experts, researchers, and passionate advocates working together to make a difference in sleep health.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 