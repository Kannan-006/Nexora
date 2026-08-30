import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const websiteDevelopment = new URL(
  "../images/website development.jpg",
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
    title: "Website Design & Development",
    description:
      "Custom websites that reflect your brand and help visitors understand your business, services and next steps.",
    tags: ["Business websites", "Custom layouts", "Development"],
  },
  {
    number: "02",
    title: "Responsive Design",
    description:
      "Flexible layouts and thoughtful interactions that work across mobile phones, tablets and desktops.",
    tags: ["Mobile-first", "Responsive layouts", "Usability"],
  },
  {
    number: "03",
    title: "Website Content",
    description:
      "Organized, clear website copy that explains your offering and supports the needs of your audience.",
    tags: ["Page structure", "Website copy", "Content planning"],
  },
  {
    number: "04",
    title: "Search-Friendly Foundations",
    description:
      "Structured content, descriptive metadata and technical improvements that support search discoverability.",
    tags: ["On-page SEO", "Metadata", "Site structure"],
  },
  {
    number: "05",
    title: "E-Commerce Integration",
    description:
      "Product listings, shopping flows and payment integrations selected around your online selling requirements.",
    tags: ["Online stores", "Product pages", "Checkout"],
  },
  {
    number: "06",
    title: "Website Maintenance",
    description:
      "Updates, issue resolution and improvements through an agreed plan to support your website after launch.",
    tags: ["Updates", "Support", "Improvements"],
  },
];

const processSteps = [
  {
    number: "01",
    image: discovery,
    title: "Discovery",
    description:
      "We understand your business, audience and goals, then agree on the pages, features and project scope.",
  },
  {
    number: "02",
    image: design,
    title: "Website Design",
    description:
      "We plan the site structure and create layouts that bring your brand and content together.",
  },
  {
    number: "03",
    image: development,
    title: "Development",
    description:
      "We build responsive pages, connect required features and share progress for review.",
  },
  {
    number: "04",
    image: deployment,
    title: "Testing & Launch",
    description:
      "We check navigation, forms and responsive behavior before preparing your website for release.",
  },
  {
    number: "05",
    image: maintenance,
    title: "Maintenance",
    description:
      "We help keep your website current through agreed updates, support and ongoing improvements.",
  },
];

const technologies = [
  {
    title: "Front-End Development",
    description:
      "HTML, CSS and JavaScript for the structure, presentation and interactions of your website.",
    label: "Interface",
  },
  {
    title: "Content Management",
    description:
      "A suitable CMS when your team needs to publish and update content without editing code.",
    label: "Content",
  },
  {
    title: "Backend & APIs",
    description:
      "Server-side functionality and integrations for forms, accounts and other agreed features.",
    label: "Functionality",
  },
  {
    title: "Version Control",
    description:
      "Git-based workflows to track code changes and support organized development.",
    label: "Collaboration",
  },
  {
    title: "Web Applications",
    description:
      "Component-based interfaces using React when your project needs richer interactions.",
    label: "Experience",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "A store platform or custom approach chosen to suit your catalogue and business requirements.",
    label: "Commerce",
  },
];

const websiteTypes = [
  "Company websites",
  "Service websites",
  "Landing pages",
  "Portfolio websites",
  "Online stores",
  "Web applications",
];

const Website_development = () => {
  return (
    <div className="min-h-screen bg-[#f4f1e9] font-sans text-[#14213d]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-[#d9ccff]/70 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Nexora / Website Development
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your brand.
              <br />
              A better
              <br />
              <span className="font-serif font-normal italic text-blue-600">
                digital home.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Nexora creates thoughtful websites that communicate
              clearly, feel easy to use and give your business a
              stronger online presence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss your website
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#website-services"
                className="border-b border-[#14213d] py-2 font-semibold"
              >
                Explore our services ↓
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {["Responsive", "Brand-focused", "User-friendly"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#14213d]/15 bg-white/60 px-4 py-2 text-xs font-bold"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* WEBSITE VISUAL */}
          <div className="rounded-[32px] bg-[#14213d] p-5 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="uppercase tracking-widest text-slate-400">
                Nexora / Web Studio
              </span>

              <span className="text-[#b9e769]">
                Designed to connect
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white">
              <div
                aria-hidden="true"
                className="flex items-center gap-2 border-b border-gray-200 bg-[#f8f5ef] px-5 py-4"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffae94]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9ccff]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#b9e769]" />

                <span className="ml-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Your next website
                </span>
              </div>

              <div className="p-6">
                <img
                  src={websiteDevelopment}
                  alt="Website design and development illustration"
                  className="h-64 w-full object-contain sm:h-72"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#d9ccff] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Design
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Made to stand out.
                </h2>
              </div>

              <div className="rounded-2xl bg-[#ffae94] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Development
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Built with care.
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
              More than a first impression
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A website with a clear purpose.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Your website helps people understand what you do,
              explore your services and decide how to connect with
              your business.
            </p>

            <p>
              Nexora combines thoughtful design, organized content
              and practical development to create an experience
              shaped around those needs.
            </p>

            <p>
              Whether you are starting from scratch or improving an
              existing site, we help define a clear path from your
              idea to launch.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="website-services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                What we do
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Every page.
                <br />
                A reason to connect.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600 md:justify-self-end">
              Design, development and support brought together around
              your brand and business requirements.
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
            From first conversation
            <br />
            to your website launch.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Nexora follows a collaborative process with agreed
            deliverables, regular reviews and clear communication.
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

      {/* TECHNOLOGY */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            Technology & capabilities
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The right tools.
            <br />
            A thoughtful foundation.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            We select technologies based on your website's features,
            content needs, budget and long-term maintenance.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <article
                key={technology.title}
                className="rounded-2xl border border-gray-200 bg-[#faf8f3] p-7"
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {technology.label}
                </p>

                <h3 className="text-xl font-bold">
                  {technology.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {technology.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Built for your next step
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight">
              Different businesses.
              <br />
              Distinct digital experiences.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Your website should fit your goals. We help shape the
              structure, features and visual direction around what
              your business needs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {websiteTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-2xl border border-[#ded9cf] bg-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#b9e769] font-bold"
                >
                  ✓
                </span>

                <span className="font-semibold">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100">
              Ready for a new website?
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let's build your digital home.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your ideas with Nexora and explore the right
              approach for your next website.
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
              Thoughtful websites. Clear communication. Meaningful
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

export default Website_development;