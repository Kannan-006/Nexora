import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const logo = new URL('../images/logo.jpg', import.meta.url);

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const handleServiceClick = (path) => {
    navigate(path);
    setNavOpen(false); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md relative" ref={navbarRef}>

      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <img src={logo} alt="Logo" className="h-16" />
        <div className="md:hidden">
     
          <button 
            onClick={toggleNavbar} 
            className="text-gray-600 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {navOpen ? (
              <span className="text-2xl">✕</span> 
            ) : (
              <span className="text-2xl">☰</span> 
            )}
          </button>
        </div>
        <nav 
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:items-center md:space-x-6 transition-all duration-300 z-50 shadow-md md:shadow-none ${navOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <a 
                href="/" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setNavOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/Aboutus" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/Aboutus');
                  setNavOpen(false);
                }}
              >
                About Us
              </a>
            </li>
            <li className="relative group">
              <a 
                href="#ourservices" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => e.preventDefault()}
              >
                Our Services
              </a>
              <div className="hidden group-hover:block absolute bg-white p-4 shadow-md z-10 mt-1 w-48">
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#" 
                      className="block hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick('/Website_development');
                      }}
                    >
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick('/Mobileapp_development');
                      }}
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick('/Software_development');
                      }}
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick('/Marketing');
                      }}
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick('/Ecommerce');
                      }}
                    >
                      E-Commerce
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a 
                href="#career" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => e.preventDefault()}
              >
                Career
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => e.preventDefault()}
              >
                Support
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="block hover:text-blue-600 py-2 md:py-0"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                  setNavOpen(false);
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;