import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const marketing = new URL(
  "../images/marketing1.png",
  import.meta.url
).href;

const services = [
  {
    number: "01",
    title: "Strategy & Planning",
    description:
      "Define your audience, business goals and marketing priorities with a focused plan.",
    tags: ["Business goals", "Audience", "Planning"],
  },
  {
    number: "02",
    title: "Market Research",
    description:
      "Understand your customers, competitors and market opportunities before choosing your approach.",
    tags: ["Research", "Competitors", "Insights"],
  },
  {
    number: "03",
    title: "Search Engine Optimization",
    description:
      "Improve your website's content, structure and discoverability through thoughtful SEO work.",
    tags: ["On-page SEO", "Content", "Technical reviews"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Build a consistent brand presence with relevant content and purposeful social campaigns.",
    tags: ["Social content", "Brand voice", "Campaigns"],
  },
  {
    number: "05",
    title: "Paid Advertising",
    description:
      "Plan and manage advertising campaigns around your audience, budget and business objectives.",
    tags: ["Search ads", "Social ads", "Testing"],
  },
  {
    number: "06",
    title: "E-Commerce Marketing",
    description:
      "Help shoppers discover your products through product content, campaigns and improved landing pages.",
    tags: ["Product discovery", "Landing pages", "Promotions"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We explore your business, audience, existing marketing and what you want to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We select suitable channels, define messaging and agree on a practical campaign plan.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We prepare campaign content, creative assets and landing-page recommendations.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We launch the agreed campaigns and check that tracking and key user journeys work.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We review performance, share findings and refine the approach using available data.",
  },
];

const capabilities = [
  {
    title: "SEO & Search",
    description:
      "Keyword research, page optimization and technical recommendations.",
  },
  {
    title: "Content Management",
    description:
      "Content planning, publishing workflows and consistent brand messaging.",
  },
  {
    title: "Advertising Platforms",
    description:
      "Campaign setup and management on platforms appropriate for your audience.",
  },
  {
    title: "Campaign Analytics",
    description:
      "Measurement plans and reports connected to agreed business objectives.",
  },
  {
    title: "Creative Content",
    description:
      "Campaign copy, visual direction and content adapted to each channel.",
  },
  {
    title: "Landing Pages",
    description:
      "Clear messaging and user journeys that support your campaign goals.",
  },
];

const Marketing = () => {
  return (
    <div className="min-h-screen bg-[#f4f1e9] font-sans text-[#14213d]">
      <Navbar />

      
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-[#d9ccff]/70 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Nexora / Digital Marketing
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Make your brand
              <br />
              <span className="font-serif font-normal italic text-blue-600">
                worth noticing.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Connect with the right audience through thoughtful
              strategy, engaging content and focused digital campaigns.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Let's talk growth
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#marketing-services"
                className="border-b border-[#14213d] py-2 font-semibold"
              >
                Explore our services ↓
              </a>
            </div>
          </div>

        
          <div className="rounded-[32px] bg-[#14213d] p-5 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="uppercase tracking-widest text-gray-400">
                Nexora / Marketing
              </span>

              <span className="text-[#b9e769]">
                Strategy meets creativity
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white p-6">
              <img
                src={marketing}
                alt="Digital marketing illustration"
                className="h-64 w-full object-contain sm:h-72"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {
                  label: "Discover",
                  color: "bg-[#d9ccff]",
                  symbol: "01",
                },
                {
                  label: "Connect",
                  color: "bg-[#ffae94]",
                  symbol: "02",
                },
                {
                  label: "Grow",
                  color: "bg-[#b9e769]",
                  symbol: "03",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-2xl p-4`}
                >
                  <span className="text-xs font-bold opacity-60">
                    {item.symbol}
                  </span>

                  <p className="mt-3 text-sm font-bold sm:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-600">
              More than visibility
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Marketing with a clear purpose.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              A strong digital presence starts with understanding your
              customers. Nexora helps you communicate what makes your
              business valuable and reach people through suitable
              channels.
            </p>

            <p>
              We bring research, creativity and measurement together
              to build a marketing approach that fits your brand,
              resources and goals.
            </p>
          </div>
        </div>
      </section>

      
      <section
        id="marketing-services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                What we do
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Built around your audience.
              </h2>
            </div>

            <p className="max-w-sm leading-7 text-gray-600">
              Choose the right mix of strategy, content and campaigns
              for your business.
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

    
      <section className="bg-[#14213d] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#b9e769]">
            How we work
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A clear process.
            <br />
            A focused direction.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Nexora keeps the process collaborative, with an agreed
            plan and regular opportunities to review progress.
          </p>

          <div className="mt-12 border-t border-white/15">
            {process.map((step) => (
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

      
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            Channels & capabilities
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The right tools for your goals.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            We choose platforms and workflows based on your audience,
            budget and campaign requirements.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
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

    
      <section className="p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-blue-600 px-7 py-14 text-white md:grid-cols-[1fr_auto] sm:px-12">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100">
              Your next chapter
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Give your brand a clearer voice.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your goals with Nexora and let's explore a
              marketing plan that fits your business.
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
              Thoughtful technology. Creative communication.
              Meaningful digital experiences.
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

export default Marketing;