import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const ecommerce = new URL(
  "../images/ecommerce.jpeg",
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

const features = [
  {
    title: "Custom Design",
    description:
      "A distinctive storefront designed around your brand, products and audience.",
  },
  {
    title: "Responsive Design",
    description:
      "Shopping experiences that adapt smoothly to mobile phones, tablets and desktops.",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Platform selection and store configuration based on your catalogue, workflow and business requirements.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Clear navigation, useful filters and intuitive product pages that help customers find what they need.",
  },
  {
    title: "Product Catalogue",
    description:
      "Organized product listings with images, descriptions, categories, pricing and available variations.",
  },
  {
    title: "Shopping Cart",
    description:
      "An easy-to-manage cart where customers can review items, update quantities and continue shopping.",
  },
  {
    title: "Checkout",
    description:
      "A clear checkout flow with delivery details, order summaries and supported payment options.",
  },
  {
    title: "Order Management",
    description:
      "Tools to view orders, track fulfilment and keep customers informed about their purchases.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Search-friendly page structure, descriptive metadata and performance improvements to support discoverability.",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Reporting integrations to help you understand store activity, product performance and sales trends.",
  },
];

const steps = [
  {
    image: discovery,
    title: "Discovery",
    description:
      "We understand your products, customers, business goals and operational requirements.",
  },
  {
    image: design,
    title: "Store Design",
    description:
      "We plan the customer journey and design a storefront that reflects your brand.",
  },
  {
    image: development,
    title: "Development",
    description:
      "We build your store and integrate the agreed catalogue, checkout and management features.",
  },
  {
    image: deployment,
    title: "Testing & Launch",
    description:
      "We test key shopping flows, check responsiveness and prepare your store for launch.",
  },
  {
    image: maintenance,
    title: "Maintenance",
    description:
      "We help maintain and improve your store through an agreed support and update plan.",
  },
];

const technologies = [
  {
    title: "E-Commerce Platform",
    description:
      "A platform or custom solution selected to suit your business and future requirements.",
  },
  {
    title: "Front-End Technologies",
    description:
      "Responsive interfaces built using appropriate web technologies and reusable components.",
  },
  {
    title: "Back-End Technologies",
    description:
      "Server-side functionality for products, customers, orders and store administration.",
  },
  {
    title: "Databases",
    description:
      "Structured storage for product information, inventory and order records.",
  },
  {
    title: "Payment Integration",
    description:
      "Integration with a supported payment provider for your region and business needs.",
  },
  {
    title: "Shipping Integration",
    description:
      "Delivery options, shipping calculations and tracking integrations where supported.",
  },
  {
    title: "Security",
    description:
      "Access controls, input validation and appropriate safeguards for your store.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Measurement tools configured around the information your business needs.",
  },
];

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#14213d]">
      <Navbar />

      {/* HERO */}
      <section className="bg-blue-600 px-4 pb-20 pt-36 text-center text-white">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
          Nexora / E-Commerce Development
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
          Build an online store your customers love.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Nexora helps businesses turn their products into engaging
          online shopping experiences—from the first visit to checkout.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Discuss your store
          <span aria-hidden="true">↗</span>
        </Link>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            Sell online with confidence
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            More than a storefront.
            <br />
            A better shopping experience.
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Your online store should make shopping simple and
            management practical. Nexora brings design and development
            together to create stores that work for your customers
            and your business.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From product catalogues and responsive layouts to checkout
            and order management, we shape each project around your
            requirements.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Responsive",
              "User-focused",
              "Customizable",
              "Built to grow",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#f4f1e9] p-5 shadow-lg">
          <img
            src={ecommerce}
            alt="E-commerce development"
            className="h-80 w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f4f1e9] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              What we do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything your store needs.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Explore the features we can bring together for your
              e-commerce project.
            </p>
          </div>

          <div className="grid items-start gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <details
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {feature.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-blue-600 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-100 pt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            How we work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            From your idea to your online store.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-600">
            Nexora follows a clear development process so you
            understand what we are building and what comes next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Step {String(index + 1).padStart(2, "0")}
                </span>

                <span aria-hidden="true" className="text-blue-600">
                  ↗
                </span>
              </div>

              <div className="mb-6 rounded-xl bg-gray-50 p-4">
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="h-36 w-full object-contain"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {step.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#14213d] px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#b9e769]">
            Technology & integrations
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            The right foundation for your business.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            We select technologies and integrations based on your
            requirements, budget and long-term plans.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <article
                key={technology.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="mb-3 text-lg font-bold">
                  {technology.title}
                </h3>

                <p className="text-sm leading-7 text-slate-300">
                  {technology.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#f4f1e9] px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
            Ready for your next step?
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's bring your store to life.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Tell Nexora about your products and goals. We will help
            you explore the right approach for your online business.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Nexora
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-4 pb-8 pt-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="text-xl font-black tracking-widest"
            >
              NEX<span className="text-blue-500">O</span>RA
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Transforming ideas into thoughtful digital products
              and shopping experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>

            <div className="flex flex-col items-start gap-3 text-gray-400">
              <a
                href="tel:+917639564969"
                className="transition hover:text-white"
              >
                +91 7639564969
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="break-all transition hover:text-white"
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

        <div className="mx-auto mt-10 max-w-6xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;