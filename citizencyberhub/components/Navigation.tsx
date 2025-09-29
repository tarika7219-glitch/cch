import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.svg"
                  alt="CitizenCyberHub Logo"
                  fill
                  className="rounded-full"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-indian-navy">
                CitizenCyberHub
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/report" className="nav-link">
              Report Case
            </Link>
            <Link href="/donate" className="nav-link">
              Donate
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}