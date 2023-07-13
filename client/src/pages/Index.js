import React from 'react';
import Link from 'next/link';
import logo from './images/logo.png';
import founderImage from './images/akin.png';
import welcomeLogo from './images/big.png';

const VideoPlayerSection = () => {
  return (
    <div className="h-screen relative">
      <iframe
        src="https://player.vimeo.com/video/844728981?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title="kryptovfx_web3fx_showreel"
      />
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

const FounderSection = () => {
  return (
    <section id="founder" className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Founder and Lead Artist</h2>
        <img src={founderImage} alt="Founder" className="mb-8 mx-auto rounded-full h-48 w-48 object-cover" />
        <p className="text-gray-300 mb-6">
          // Founder description
        </p>
        <div className="flex justify-center items-center">
          <iframe
            src="https://player.vimeo.com/video/844728981?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full md:w-2/3 lg:w-1/2 h-64"
            title="Founder Video"
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Portfolio</h2>
        // Add portfolio items here
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Us</h2>
        <p className="text-gray-300 mb-6">
          // About us description
        </p>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          // Contact information
        </p>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300 mb-6">
          &copy; {new Date().getFullYear()} Web3FX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-10 bg-black text-gray-300">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center text-3xl font-bold cursor-pointer">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-8 mr-2"
              />
              Web3FX
            </div>
          </Link>

          {/* Navigation */}
          <div className="lg:flex flex-grow items-center" id="example-navbar-info">
            <ul className={`flex flex-col lg:flex-row list-none lg:ml-auto ${navbarOpen ? 'flex' : 'hidden'}`}>
              <li className="nav-item">
                <Link href="#services">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500">
                    Services
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500">
                    Portfolio
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500">
                    About Us
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500">
                    Contact
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-500">
                    Login
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Title Header */}
      <section className="pt-24 pb-12 px-4 text-center">
        <img src={welcomeLogo} alt="Welcome Logo" className="mb-6" />
      </section>

      {/* Video Player */}
      <VideoPlayerSection />

      {/* Founder Section */}
      <FounderSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
