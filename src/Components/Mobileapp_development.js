import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const app = new URL(
  "../images/mobileapp.png",
  import.meta.url
).href;

const discovery = new URL(
  "../images/dicovery.png",
  import.meta.url
).href;

const design = new URL(
  "../images/web design.png",
  import.meta.url
).href;

const development = new URL(
  "../images/development.png",
  import.meta.url
).href;

const deployment = new URL(
  "../images/deployment.png",
  import.meta.url
).href;

const maintenance = new URL(
  "../images/maintanance.jpg",
  import.meta.url
).href;

const services = [
  {
    number: "01",
    title: "Custom Mobile Applications",
    description:
      "Mobile applications shaped around your business goals, customer needs and everyday workflows.",
    tags: ["Business apps", "Customer apps", "Custom features"],
  },
  {
    number: "02",
    title: "Cross-Platform Development",
    description:
      "Flutter-based applications for Android and iOS, with shared code and platform-specific adjustments where needed.",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    number: "03",
    title: "Mobile UI/UX Design",
    description:
      "Clear navigation, thoughtful layouts and interactive prototypes that make your application easier to use.",
    tags: ["User journeys", "Prototypes", "Interface design"],
  },
  {
    number: "04",
    title: "API & Backend Integration",
    description:
      "Connect your app with existing business systems, databases and third-party services.",
    tags: ["APIs", "Authentication", "Business systems"],
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Test important user journeys, device compatibility and performance to identify issues before launch.",
    tags: ["Functional testing", "Devices", "Performance"],
  },
  {
    number: "06",
    title: "Launch & Maintenance",
    description:
      "Support release preparation, app-store submission and ongoing improvements through an agreed maintenance plan.",
    tags: ["Release support", "Updates", "Maintenance"],
  },
];

const processSteps = [
  {
    number: "01",
    image: discovery,
    title: "Discovery",
    description:
      "We understand your audience, business requirements and the core problem your application will solve.",
  },
  {
    number: "02",
    image: design,
    title: "App Design",
    description:
      "We map user journeys, create wireframes and develop prototypes to review the experience before development.",
  },
  {
    number: "03",
    image: development,
    title: "Development",
    description:
      "We build the application in stages, integrate required services and review progress with you.",
  },
  {
    number: "04",
    image: deployment,
    title: "Testing & Launch",
    description:
      "We test key functionality and prepare releases for distribution, subject to the relevant app-store reviews.",
  },
  {
    number: "05",
    image: maintenance,
    title: "Maintenance",
    description:
      "We help address issues, maintain compatibility and plan improvements as your application evolves.",
  },
];

const capabilities = [
  {
    title: "User Accounts",
    description:
      "Sign-in, profiles and access controls designed around your application's requirements.",
  },
  {
    title: "Notifications",
    description:
      "Relevant alerts and updates, with appropriate permission and preference controls.",
  },
  {
    title: "Payments",
    description:
      "Payment integrations selected according to your business needs and platform requirements.",
  },
  {
    title: "Data Synchronization",
    description:
      "Keep app data connected with your backend, with offline support where the project requires it.",
  },
  {
    title: "Administration",
    description:
      "Management tools for content, users and operations when included in the project scope.",
  },
  {
    title: "App Analytics",
    description:
      "Understand important user journeys and app performance with appropriately configured measurement.",
  },
];

const Mobileapp_development = () => {
  return (
    <div className="min-h-screen bg-[#f4f1e9] font-sans text-[#14213d]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#d9ccff]/70 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Nexora / Mobile App Development
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Big ideas.
              <br />
              <span className="font-serif font-normal italic text-blue-600">
                Pocket-sized
              </span>
              <br />
              experiences.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Nexora creates thoughtful mobile applications that
              connect your business with the people who matter.
              Designed for everyday use. Built around your goals.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss your app
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#mobile-services"
                className="border-b border-[#14213d] py-2 font-semibold"
              >
                Explore our services ↓
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {["Android", "iOS", "Flutter"].map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-[#14213d]/15 bg-white/60 px-4 py-2 text-xs font-bold"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="rounded-[32px] bg-[#14213d] p-5 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="uppercase tracking-widest text-slate-400">
                Nexora / Mobile
              </span>

              <span className="text-[#b9e769]">
                Designed for people
              </span>
            </div>

            <div className="rounded-3xl bg-[#f8f5ef] p-6">
              <img
                src={app}
                alt="Mobile application development illustration"
                className="h-72 w-full object-contain sm:h-80"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#d9ccff] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  User experience
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Simple to use.
                </h2>
              </div>

              <div className="rounded-2xl bg-[#ffae94] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Development
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Built with purpose.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-600">
              More than an app
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A useful connection between you and your customers.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Whether you are creating a customer-facing product or
              improving an internal workflow, your mobile application
              should solve a clear problem.
            </p>

            <p>
              Nexora brings planning, design and development together
              to create an experience that fits your business. We
              focus on useful features, clear interactions and a
              practical path from concept to launch.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="mobile-services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                What we do
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                From first screen
                <br />
                to final release.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600 md:justify-self-end">
              A connected set of services to help you plan, design,
              build and improve your mobile application.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.number}
                className={`flex flex-col rounded-3xl border border-[#ded9cf] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl ${
                  index === 0 ? "bg-[#d9ccff]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-[#f4f1e9] text-xl"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mb-7 mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#14213d]/15 px-3 py-1.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#14213d] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#b9e769]">
            How we work
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A clear route from
            <br />
            idea to application.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Nexora follows a collaborative process with defined
            stages, regular reviews and clear communication.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-white/15 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#b9e769]">
                    Step {step.number}
                  </span>

                  <span aria-hidden="true" className="text-slate-400">
                    ↗
                  </span>
                </div>

                <div className="my-6 rounded-2xl bg-[#f8f5ef] p-4">
                  <img
                    src={step.image}
                    alt=""
                    loading="lazy"
                    className="h-28 w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            Features & integrations
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Useful features.
            <br />
            Thoughtfully connected.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            We select features and integrations around your users,
            project scope and business requirements.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-gray-200 bg-[#faf8f3] p-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 block h-1 w-10 rounded-full bg-blue-600"
                />

                <h3 className="text-xl font-bold">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100">
              Have an app idea?
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let's make it something people use.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your goals with Nexora and explore the next
              steps for your mobile application.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#14213d] px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Nexora
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="text-xl font-black tracking-widest"
            >
              NEX<span className="text-blue-500">O</span>RA
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Turning meaningful ideas into useful mobile and
              digital experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>

            <div className="flex flex-col items-start gap-3 text-gray-400">
              <a
                href="tel:+917639564969"
                className="hover:text-white"
              >
                +91 7639564969
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="break-all hover:text-white"
              >
                {COMPANY_EMAIL}
              </a>

              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>

            <div className="flex flex-col items-start gap-3 text-gray-400">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/about" className="hover:text-white">
                About Nexora
              </Link>

              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-gray-700 pt-6 text-sm text-gray-400 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>

          <p>Innovate · Transform · Grow</p>
        </div>
      </footer>
    </div>
  );
};

export default Mobileapp_development;