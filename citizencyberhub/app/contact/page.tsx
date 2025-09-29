export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indian-navy mb-8">Contact Us</h1>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-saffron mb-4">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong className="text-gray-800">Email:</strong>
                  <br />
                  <a
                    href="mailto:citizencyberhub@gmail.com"
                    className="text-indian-navy hover:underline"
                  >
                    citizencyberhub@gmail.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Social Media:</strong>
                  <br />
                  <a
                    href="https://www.instagram.com/citizencyberhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indian-navy hover:underline"
                  >
                    Instagram: @citizencyberhub
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-saffron mb-4">
                Quick Links
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <a href="/report" className="text-indian-navy hover:underline">
                    Report a Case
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="/donate" className="text-indian-navy hover:underline">
                    Support Our Work
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="/about" className="text-indian-navy hover:underline">
                    About Us
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indian-navy mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}