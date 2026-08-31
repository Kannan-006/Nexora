import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const services = [
  { name: "Website Development", path: "/WD" },
  { name: "Mobile App Development", path: "/MD" },
  { name: "Software Development", path: "/SD" },
  { name: "E-Commerce Development", path: "/Ecommerce" },
  { name: "Digital Marketing", path: "/Marketing" },
  { name: "UI/UX Design", path: "/uiux" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navbarRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const location = useLocation();

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Close menus after navigation.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close menus when clicking outside the navbar.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenus();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key !== "Escape") return;

    if (servicesOpen) {
      setServicesOpen(false);
      servicesButtonRef.current?.focus();
    } else if (menuOpen) {
      setMenuOpen(false);
      mobileButtonRef.current?.focus();
    }
  };

  const isServicePage = services.some(
    (service) =>
      service.path.toLowerCase() ===
      location.pathname.toLowerCase()
  );

  const navLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-[#14213d] hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <header
      ref={navbarRef}
      onKeyDown={handleKeyDown}
      className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 sm:px-8">
        
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Nexora home"
          className="flex h-20 shrink-0 items-center whitespace-nowrap text-2xl font-black tracking-[0.12em] text-[#14213d]"
        >
          NEX<span className="text-blue-600">O</span>RA
        </Link>

       
        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="nexora-navigation"
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setServicesOpen(false);
          }}
          className="grid h-11 w-11 place-items-center rounded-xl bg-[#14213d] text-white lg:hidden"
        >
          <span aria-hidden="true" className="text-2xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        
        <nav
          id="nexora-navigation"
          aria-label="Main navigation"
          className={`w-full lg:block lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="m-0 flex max-h-[calc(100dvh-80px)] list-none flex-col gap-2 overflow-y-auto pb-5 lg:max-h-none lg:flex-row lg:items-center lg:overflow-visible lg:pb-0">
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenus}
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/About"
                onClick={closeMenus}
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>

          
            <li className="relative">
              <button
                ref={servicesButtonRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="nexora-service-links"
                onClick={() =>
                  setServicesOpen((previous) => !previous)
                }
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isServicePage || servicesOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#14213d] hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Services

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <ul
                  id="nexora-service-links"
                  className="relative m-0 mt-2 list-none rounded-2xl border border-slate-200 bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-80 lg:shadow-xl"
                >
                  {services.map((service, index) => (
                    <li key={service.path}>
                      <NavLink
                        to={service.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-[#14213d] hover:bg-blue-50 hover:text-blue-600"
                          }`
                        }
                      >
                        <span className="text-xs text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {service.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                onClick={closeMenus}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#14213d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 lg:ml-3"
              >
                Let's Talk
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;