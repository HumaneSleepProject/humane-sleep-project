export default function Partners() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--primary-purple)] mb-8">
            Our Partners
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner cards will go here */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--primary-purple)] mb-4">
                Partner Organization
              </h3>
              <p className="text-gray-600">
                Description of partnership and collaboration.
              </p>
            </div>
            {/* Add more partner cards as needed */}
          </div>
        </div>
      </section>
    </main>
  )
} 