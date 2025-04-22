export default function Information() {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Information & Resources
          </h1>
          
          {/* Map Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Resource Map
            </h2>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=13vmK1r7q7i_r85lGnPHhLw5DK7YPDzc&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Information cards will go here */}
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Sleep Health Basics
              </h3>
              <p className="text-white/80 mb-4">
                Essential information about sleep health and hygiene.
              </p>
              <ul className="list-disc list-inside text-white/80">
                <li>Sleep duration recommendations</li>
                <li>Sleep hygiene tips</li>
                <li>Common sleep disorders</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Research & Studies
              </h3>
              <p className="text-white/80 mb-4">
                Latest research findings and studies about sleep.
              </p>
              <ul className="list-disc list-inside text-white/80">
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