export default function Events() {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event cards will go here */}
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Event Title
              </h3>
              <p className="text-white/70 mb-4">Date and Time</p>
              <p className="text-white/80 mb-4">
                Event description and details.
              </p>
              <button className="btn-primary">
                Register Now
              </button>
            </div>
            {/* Add more event cards as needed */}
          </div>
        </div>
      </section>
    </main>
  )
} 