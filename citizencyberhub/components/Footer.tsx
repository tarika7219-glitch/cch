import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indian-navy mb-4">CitizenCyberHub</h3>
            <p className="text-gray-600">To – For – and By People</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:citizencyberhub@gmail.com"
                  className="text-gray-600 hover:text-indian-navy"
                >
                  citizencyberhub@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/citizencyberhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indian-navy"
                >
                  Instagram: @citizencyberhub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-indian-navy">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-gray-600 hover:text-indian-navy">
                  Report a Case
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-indian-navy">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} CitizenCyberHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}