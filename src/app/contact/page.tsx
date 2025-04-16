export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--primary-purple)] mb-8">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-purple)] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;d love to hear from you! Whether you have questions about our work, want to get involved, or need more information, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[var(--primary-purple)]">Email</h3>
                  <p className="text-gray-600">HumaneSleepProject@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--primary-purple)]">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--primary-purple)]">Address</h3>
                  <p className="text-gray-600">
                    123 Sleep Street<br />
                    Dream City, DC 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--primary-purple)] mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 