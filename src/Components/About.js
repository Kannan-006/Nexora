import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-blue-600 px-4 py-28 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">About Nexora</h1>

        <p className="mx-auto max-w-3xl text-xl">
          Empowering businesses through innovative digital solutions
          since 2010.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              Founded in 2010, Nexora started as a small team of
              passionate developers with a vision to transform
              businesses through technology.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Our journey has been marked by continuous innovation,
              client satisfaction and a commitment to delivering
              exceptional results.
            </p>
          </div>

          {/* COMPANY VISUAL */}
          <div className="relative min-h-80 overflow-hidden rounded-3xl bg-[#14213d] p-7 shadow-xl">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/30 blur-2xl" />

            <div className="relative z-10 flex h-full min-h-64 flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Nexora / Studio
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-lime-300">
                  <span className="h-2 w-2 rounded-full bg-lime-300" />
                  Available for projects
                </span>
              </div>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">
                  Innovate · Transform · Grow
                </p>

                <h3 className="text-4xl font-bold leading-tight text-white">
                  We turn ideas into meaningful digital experiences.
                </h3>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Websites",
                  "Mobile Apps",
                  "Software",
                  "UI/UX",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NEXORA */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Why Choose Nexora
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "QUALITY",
                description:
                  "Dedicated to providing services that go above expectations.",
              },
              {
                title: "CUSTOMIZATION",
                description:
                  "Services tailored to your unique business needs.",
              },
              {
                title: "INNOVATION",
                description:
                  "Forward-thinking solutions that drive growth.",
              },
              {
                title: "AGILITY",
                description:
                  "Versatile methods to meet changing demands.",
              },
              {
                title: "COLLABORATION",
                description:
                  "Working closely with clients for the best outcomes.",
              },
              {
                title: "EXPERIENCE",
                description:
                  "More than 10 years of industry experience.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="mb-4 text-center text-xl font-semibold text-blue-600">
                  {feature.title}
                </h3>

                <p className="text-center leading-7 text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Share your idea with Nexora and let us build something
          meaningful together.
        </p>

        <button
          type="button"
          onClick={handleContactClick}
          className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Nexora</h3>

            <p className="leading-7 text-gray-400">
              Transforming businesses through modern digital
              solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>

            <div className="space-y-2 text-gray-400">
              <p>+91 7639564969</p>
              <p>nexorawebandapps@gmail.com</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>

            <div className="flex flex-col items-start space-y-2 text-gray-400">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="hover:text-white"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => navigate("/#services")}
                className="hover:text-white"
              >
                Services
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2026 Nexora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;