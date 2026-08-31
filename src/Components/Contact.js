import React, { useState } from "react";
import Navbar from "./Navbar";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus("Please enter your name and message.");
      return;
    }

    const subject = encodeURIComponent(
      `Project enquiry from ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      [
        "Hello Nexora,",
        "",
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Phone: ${formData.phone.trim() || "Not provided"}`,
        "",
        "Message:",
        formData.message.trim(),
      ].join("\n")
    );

    window.location.href =
      `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

    setStatus(
      "An email draft has been requested. Send it from your email app to complete your enquiry. If no app opens, contact us using the email address shown."
    );
  };

  const inputClassName =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

  return (
    <div className="min-h-screen bg-white text-[#14213d]">
      <Navbar />

      
      <section className="bg-blue-600 px-4 pb-20 pt-36 text-center text-white">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
          Let's connect
        </p>

        <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
          Contact Nexora
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100">
          Have an idea or a project in mind? Tell us what you are
          planning, and let us explore how Nexora can help.
        </p>
      </section>

      
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
    
        <div className="rounded-3xl border border-gray-200 bg-[#faf8f3] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Start a conversation
          </p>

          <h2 className="mb-3 text-3xl font-bold">
            Tell us about your project.
          </h2>

          <p className="mb-8 leading-7 text-gray-600">
            Complete the details below to prepare an email to our team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold"
              >
                Full Name *
              </label>

              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold"
              >
                Email Address *
              </label>

              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-semibold"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                placeholder="+91 Your phone number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={25}
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold"
              >
                Your Message *
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project, goals and requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                className={`${inputClassName} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Prepare Email
              <span aria-hidden="true">↗</span>
            </button>

            <p className="text-sm leading-6 text-gray-500">
              This opens your email app. Your message is not sent
              automatically.
            </p>

            <p role="status" className="text-sm leading-6 text-blue-700">
              {status}
            </p>
          </form>
        </div>

   
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Let's build something meaningful.
          </h2>

          <p className="mb-8 leading-8 text-gray-600">
            Whether you need a website, mobile application, software,
            online store, marketing support or UI/UX design, we would
            love to hear from you.
          </p>

          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                Email us
              </p>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="break-all text-lg font-semibold hover:text-blue-600"
              >
                {COMPANY_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                Call us
              </p>

              <a
                href="tel:+917639564969"
                className="text-lg font-semibold hover:text-blue-600"
              >
                +91 7639564969
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                Based in
              </p>

              <p className="text-lg font-semibold">
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>

         
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#14213d] p-8 text-white">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/30 blur-2xl"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9e769]">
                Nexora / Studio
              </p>

              <h3 className="mt-6 text-3xl font-bold leading-tight">
                Your next big idea
                <br />
                starts with a conversation.
              </h3>

              <p className="mt-5 text-sm text-gray-400">
                Innovate · Transform · Grow
              </p>
            </div>
          </div>
        </div>
      </section>

  
      <footer className="bg-gray-900 px-4 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-black tracking-widest">
              NEX<span className="text-blue-500">O</span>RA
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Transforming ideas into digital experiences.
            </p>
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;