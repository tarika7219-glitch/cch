import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-saffron via-white to-indian-green text-white py-20">
        <div className="container mx-auto text-center">
          <Image
            src="/logo.svg"
            alt="CitizenCyberHub Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indian-navy">
            Welcome to CitizenCyberHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-800">
            To – For – and By People
          </p>
          <div className="flex justify-center gap-4">
            <a href="/report" className="btn-primary">Submit a Case</a>
            <a href="/donate" className="btn-secondary">Donate Now</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-indian-navy">
              Fighting Cybercrime Together
            </h2>
            <p className="text-gray-600 mb-8">
              CitizenCyberHub is dedicated to helping victims of online harassment,
              cyberbullying, and digital crimes. We provide support, guidance, and
              resources to those affected by cyber threats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-indian-navy">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-saffron">Cyberbullying Support</h3>
              <p className="text-gray-600">Expert assistance in handling online harassment and bullying cases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-saffron">Digital Safety</h3>
              <p className="text-gray-600">Guidance on protecting yourself from online threats and maintaining privacy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-saffron">Case Management</h3>
              <p className="text-gray-600">Professional handling of reported cases with confidentiality and care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indian-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8">We're here to support you. Report your case or reach out to us today.</p>
          <div className="flex justify-center gap-4">
            <a href="/report" className="btn-primary">Report a Case</a>
            <a href="/contact" className="bg-white text-indian-navy font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}