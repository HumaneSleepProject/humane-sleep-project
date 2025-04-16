export default function Events() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--primary-purple)] mb-8">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event cards will go here */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--primary-purple)] mb-2">
                Event Title
              </h3>
              <p className="text-gray-500 mb-4">Date and Time</p>
              <p className="text-gray-600 mb-4">
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