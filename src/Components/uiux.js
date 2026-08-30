import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const services = [
  {
    number: "01",
    title: "User Research",
    description:
      "Understand your audience, their goals and the challenges they face through research and stakeholder conversations.",
    tags: ["User needs", "Interviews", "Research"],
  },
  {
    number: "02",
    title: "User Experience Design",
    description:
      "Organize content and interactions into clear journeys that help people complete their tasks.",
    tags: ["User flows", "Navigation", "Information architecture"],
  },
  {
    number: "03",
    title: "Wireframes & Prototypes",
    description:
      "Explore layouts and interactions before development with wireframes and clickable prototypes.",
    tags: ["Wireframes", "Prototypes", "Interaction design"],
  },
  {
    number: "04",
    title: "User Interface Design",
    description:
      "Create consistent, responsive interfaces with thoughtful typography, color and visual hierarchy.",
    tags: ["Web interfaces", "Mobile screens", "Responsive layouts"],
  },
  {
    number: "05",
    title: "Design Systems",
    description:
      "Define reusable components and guidelines that keep your product consistent as it grows.",
    tags: ["Components", "Design tokens", "Guidelines"],
  },
  {
    number: "06",
    title: "Usability Reviews",
    description:
      "Review key journeys, identify usability barriers and recommend practical improvements.",
    tags: ["Usability", "Accessibility reviews", "Iteration"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your product, audience, business goals and existing user experience.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We map user journeys, organize information and sketch the essential screens.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the visual direction and create responsive layouts and reusable components.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "We review prototypes, gather feedback and refine important interactions.",
  },
  {
    number: "05",
    title: "Hand Off",
    description:
      "We prepare agreed assets, specifications and interaction notes for development.",
  },
];

const deliverables = [
  {
    title: "User Flows",
    description:
      "A clear map of how people move through important product journeys.",
  },
  {
    title: "Wireframes",
    description:
      "Screen structures that establish content, navigation and priorities.",
  },
  {
    title: "Responsive Screens",
    description:
      "Interface designs adapted to the device sizes agreed in your scope.",
  },
  {
    title: "Interactive Prototypes",
    description:
      "Clickable experiences to communicate behavior and collect feedback.",
  },
  {
    title: "Component Library",
    description:
      "Reusable interface elements with consistent styles and relevant states.",
  },
  {
    title: "Developer Handoff",
    description:
      "Organized design files, assets and implementation notes for your team.",
  },
];

const Uiux_design = () => {
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
              Nexora / UI & UX Design
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Looks beautiful.
              <br />
              <span className="font-serif font-normal italic text-blue-600">
                Feels effortless.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Nexora designs thoughtful digital experiences that
              balance your brand, business goals and the needs of
              the people using your product.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss your design
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#uiux-services"
                className="border-b border-[#14213d] py-2 font-semibold"
              >
                Explore our services ↓
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {["Web experiences", "Mobile apps", "Design systems"].map(
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

          {/* DECORATIVE DESIGN PREVIEW */}
          <div
            role="img"
            aria-label="An illustrative Nexora interface design with typography, color samples and reusable components."
            className="rounded-[32px] bg-[#14213d] p-5 shadow-2xl sm:p-6"
          >
            <div aria-hidden="true">
              <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold">
                <span className="uppercase tracking-widest text-slate-400">
                  Nexora / Design Studio
                </span>

                <span className="text-[#b9e769]">
                  Ideas made visible
                </span>
              </div>

              <div className="overflow-hidden rounded-3xl bg-[#f8f5ef]">
                <div className="flex items-center justify-between border-b border-[#14213d]/10 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffae94]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d9ccff]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#b9e769]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Interface exploration
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest">
                      NEXORA
                    </span>

                    <span className="rounded-full bg-[#14213d] px-3 py-1.5 text-[10px] font-semibold text-white">
                      Design concept
                    </span>
                  </div>

                  <div className="mt-7 rounded-2xl bg-[#d9ccff] p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                      Thoughtful by design
                    </p>

                    <p className="mt-5 text-4xl font-semibold leading-none tracking-tight">
                      Less friction.
                      <br />
                      More clarity.
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="rounded-xl bg-[#14213d] px-4 py-2 text-xs font-semibold text-white">
                        Explore →
                      </span>

                      <span className="text-xs font-semibold">
                        Made for people
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Typography
                      </p>

                      <p className="mt-4 text-5xl font-semibold">
                        Aa
                      </p>

                      <p className="mt-2 text-xs text-gray-500">
                        Clear. Readable. Consistent.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#ffae94] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        Color palette
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="h-8 w-8 rounded-full bg-[#14213d]" />
                        <span className="h-8 w-8 rounded-full bg-blue-600" />
                        <span className="h-8 w-8 rounded-full bg-[#d9ccff]" />
                        <span className="h-8 w-8 rounded-full bg-[#b9e769]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Research", "Design", "Prototype"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
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
              More than appearance
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Good design makes the next step clear.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              A useful interface helps people understand where they
              are, what they can do and how to reach their goal.
              Visual design and user experience work together to
              make that possible.
            </p>

            <p>
              Nexora brings research, structure and visual craft
              together to design products that are clear, consistent
              and aligned with your business.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="uiux-services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                What we do
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Every interaction
                <br />
                deserves attention.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600 md:justify-self-end">
              From understanding your users to preparing designs for
              development development, we help shape a connected product experience.
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
            Understand first.
            <br />
            Design with purpose.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Nexora follows a collaborative design process with
            opportunities to review, test and refine the experience.
          </p>

          <div className="mt-12 border-t border-white/15">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-[60px_180px_1fr]"
              >
                <span className="text-sm font-bold text-[#b9e769]">
                  {step.number}
                </span>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="max-w-2xl leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            What you receive
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Clear designs.
            <br />
            Practical deliverables.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            Deliverables are agreed around your project's scope,
            whether you need an early prototype or a complete
            interface ready for development.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-[#faf8f3] p-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 block h-1 w-10 rounded-full bg-blue-600"
                />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100">
              Have a product idea?
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let's make it feel right.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your goals with Nexora and explore a better
              experience for your users.
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
              Thoughtful design. Clear interactions. Meaningful
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

export default Uiux_design;