export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indian-navy mb-8">About CitizenCyberHub</h1>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              CitizenCyberHub is dedicated to helping victims of online harassment and
              cybercrime, providing support and resources to those affected by digital
              threats.
            </p>

            <h2 className="text-2xl font-semibold text-saffron mt-12 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to create a safer digital environment by supporting victims
              of cyberbullying and online harassment. We believe in empowering
              individuals with the knowledge and resources they need to protect
              themselves online.
            </p>

            <h2 className="text-2xl font-semibold text-saffron mt-12 mb-4">
              What We Do
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Provide support to victims of cyberbullying and online harassment</li>
              <li>Offer guidance on digital safety and privacy protection</li>
              <li>Connect victims with appropriate resources and support services</li>
              <li>Raise awareness about cyber safety and online threats</li>
              <li>Work towards creating a safer digital environment for all</li>
            </ul>

            <h2 className="text-2xl font-semibold text-saffron mt-12 mb-4">
              Connect With Us
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                Follow us on{" "}
                <a
                  href="https://www.instagram.com/citizencyberhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indian-navy hover:underline"
                >
                  Instagram
                </a>{" "}
                for updates and cyber safety tips.
              </p>
              <p>
                Email us at:{" "}
                <a
                  href="mailto:citizencyberhub@gmail.com"
                  className="text-indian-navy hover:underline"
                >
                  citizencyberhub@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16 bg-indian-navy text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Our Help?</h2>
          <p className="mb-6">
            If you're experiencing cyberbullying or online harassment, we're here to
            help.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/report" className="btn-primary">
              Report a Case
            </a>
            <a href="/contact" className="bg-white text-indian-navy font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}