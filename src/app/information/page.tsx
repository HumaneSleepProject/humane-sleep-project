export default function Information() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--primary-purple)] mb-8">
            Sleep Information & Resources
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Information cards will go here */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--primary-purple)] mb-4">
                Sleep Health Basics
              </h3>
              <p className="text-gray-600 mb-4">
                Essential information about sleep health and hygiene.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Sleep duration recommendations</li>
                <li>Sleep hygiene tips</li>
                <li>Common sleep disorders</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--primary-purple)] mb-4">
                Research & Studies
              </h3>
              <p className="text-gray-600 mb-4">
                Latest research findings and studies about sleep.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Recent sleep research</li>
                <li>Scientific publications</li>
                <li>Case studies</li>
              </ul>
            </div>
            {/* Add more information cards as needed */}
          </div>
        </div>
      </section>
    </main>
  )
} 