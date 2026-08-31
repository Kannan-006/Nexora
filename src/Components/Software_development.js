import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const software = new URL(
  "../images/software development.jpeg",
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
    title: "Software Architecture",
    description:
      "Plan the structure, data flows and system components around your business requirements and expected usage.",
    tags: ["Planning", "System design", "Data flows"],
  },
  {
    number: "02",
    title: "Custom Development",
    description:
      "Create business applications with features and workflows tailored to the way your organization operates.",
    tags: ["Business tools", "Web applications", "Custom workflows"],
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Connect your software with existing applications and third-party services to reduce disconnected processes.",
    tags: ["APIs", "Integrations", "Data exchange"],
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Simplify repetitive tasks, approvals and reporting with automation designed around your team.",
    tags: ["Automation", "Approvals", "Reporting"],
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Test important workflows, system behavior and performance to identify issues before release.",
    tags: ["Functional testing", "Performance", "Quality reviews"],
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Keep your application useful with issue resolution, updates and improvements through an agreed support plan.",
    tags: ["Updates", "Issue resolution", "Improvements"],
  },
];

const processSteps = [
  {
    number: "01",
    image: discovery,
    title: "Discovery",
    description:
      "We understand your business processes, users and requirements, then agree on the project scope.",
  },
  {
    number: "02",
    image: design,
    title: "Design & Architecture",
    description:
      "We plan the system structure, data model and user experience before development begins.",
  },
  {
    number: "03",
    image: development,
    title: "Development",
    description:
      "We build in manageable stages, share progress and refine the application through regular reviews.",
  },
  {
    number: "04",
    image: deployment,
    title: "Testing & Deployment",
    description:
      "We test key workflows, prepare the production environment and coordinate the application release.",
  },
  {
    number: "05",
    image: maintenance,
    title: "Maintenance",
    description:
      "We help maintain the application and plan updates as your needs and operating environment change.",
  },
];

const capabilities = [
  {
    title: "Front-End Development",
    description:
      "Responsive interfaces that help users navigate information and complete tasks clearly.",
  },
  {
    title: "Back-End Development",
    description:
      "Application logic, APIs and access controls to support your business processes.",
  },
  {
    title: "Database Management",
    description:
      "Data models and storage designed around your records, relationships and reporting needs.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Hosting and deployment arrangements selected for your workload, budget and requirements.",
  },
  {
    title: "Mobile Integration",
    description:
      "APIs and shared services that connect mobile experiences with your business application.",
  },
  {
    title: "DevOps & Delivery",
    description:
      "Version control, release workflows and monitoring appropriate to your project.",
  },
];

const useCases = [
  "Inventory management",
  "Customer management",
  "Project tracking",
  "Internal dashboards",
  "Approval workflows",
  "Business reporting",
];

const Software_development = () => {
  return (
    <div className="min-h-screen bg-[#f4f1e9] font-sans text-[#14213d]">
      <Navbar />

    
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-[#d9ccff]/70 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Nexora / Software Development
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your business.
              <br />
              Your workflow.
              <br />
              <span className="font-serif font-normal italic text-blue-600">
                Your software.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Nexora builds custom software that simplifies complex
              processes and gives your team practical tools to work
              more effectively.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss your project
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#software-services"
                className="border-b border-[#14213d] py-2 font-semibold"
              >
                Explore our services ↓
              </a>
            </div>
          </div>

          
          <div className="rounded-[32px] bg-[#14213d] p-5 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="uppercase tracking-widest text-slate-400">
                Nexora / Engineering
              </span>

              <span className="text-[#b9e769]">
                Built around your business
              </span>
            </div>

            <div className="rounded-3xl bg-[#f8f5ef] p-6">
              <img
                src={software}
                alt="Custom software development illustration"
                className="h-64 w-full object-contain sm:h-80"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#d9ccff] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Clear systems
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Less complexity.
                </h2>
              </div>

              <div className="rounded-2xl bg-[#b9e769] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Useful tools
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  More possibilities.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-600">
              Purpose-built solutions
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Software that fits the way you work.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Every business has its own processes, challenges and
              priorities. Nexora develops applications around those
              requirements, helping teams organize information and
              manage everyday work.
            </p>

            <p>
              From internal dashboards to customer-facing platforms,
              we bring planning, design and development together to
              create a solution with a clear purpose.
            </p>
          </div>
        </div>
      </section>

   
      <section
        id="software-services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                What we do
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                From business problem
                <br />
                to practical solution.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600 md:justify-self-end">
              A connected development service covering planning,
              implementation, testing and ongoing improvements.
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
            Clear steps.
            <br />
            Collaborative development.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Nexora follows a structured process with agreed
            requirements, regular reviews and clear communication
            throughout the project.
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

                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
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
            Technology & capabilities
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The right foundation
            <br />
            for your next stage.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            We choose technologies based on your application,
            integrations, budget and maintenance needs.
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

    
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Built for everyday work
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight">
              Turn disconnected tasks into connected workflows.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We can help you plan business tools that bring your
              records, processes and reporting into a more organized
              system.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-center gap-3 rounded-2xl border border-[#ded9cf] bg-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#b9e769] font-bold"
                >
                  ✓
                </span>

                <span className="font-semibold">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100">
              Have a business challenge?
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let's build a better way to work.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your requirements with Nexora and explore the
              right approach for your custom software project.
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
              Thoughtful software. Clear workflows. Meaningful
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

export default Software_development;