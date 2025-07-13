import React from 'react';
import Navbar from './Navbar';
const ecommerce = new URL('../images/ecommerce.jpeg', import.meta.url);
const discovery = new URL("../images/dicovery.png", import.meta.url);
const design = new URL("../images/web design.png", import.meta.url);
const development = new URL("../images/development.png", import.meta.url);
const deployment = new URL("../images/deployment.png", import.meta.url);
const maintanance = new URL("../images/maintanance.jpg", import.meta.url);
const insta = new URL("../images/instagram.png", import.meta.url);
const facebook = new URL("../images/facebook.png", import.meta.url);
const linkedin = new URL("../images/linkedin.png", import.meta.url);
const phone = new URL("../images/phone.png", import.meta.url);
const mail = new URL("../images/mail.jpeg", import.meta.url);
const address = new URL("../images/address.png", import.meta.url);

const Ecommerce = () => {
  return (
    <div className="font-sans text-gray-800">
    <Navbar/>

      <section className="p-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">E-COMMERCE</h2>
        <p className="mb-4">Our ecommerce development service helps businesses sell their goods and services online...</p>
        <p className="mb-6">We provide a comprehensive range of ecommerce development services...</p>
        <img src={ecommerce} alt="Ecommerce" className="w-full rounded-lg shadow-md" />
      </section>

      <section className="px-6 py-10 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-center">What We Do</h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            { title: 'Custom Design', text: 'We make ecommerce sites that look good...' },
            { title: 'Responsive Design', text: 'We make ecommerce sites that work well on desktops...' },
            { title: 'E-commerce platforms', text: 'We use a variety of ecommerce platforms...' },
            { title: 'User-friendly interface', text: 'The ecommerce website should have an easy-to-use interface...' },
            { title: 'Product catalogue', text: 'The ecommerce website should have a catalogue of all the products...' },
            { title: 'Shopping Cart', text: 'The ecommerce website should have a shopping cart...' },
            { title: 'Checkout', text: 'The ecommerce website should have an easy-to-use checkout process...' },
            { title: 'Order Management', text: 'The ecommerce website should have a system for managing and keeping track of orders...' },
            { title: 'Search Engine Optimization', text: 'The ecommerce website should be optimised for search engines...' },
            { title: 'Analytics and Reporting', text: 'The ecommerce site should have tools for tracking sales...' }
          ].map((item, index) => (
            <details key={index} className="bg-white shadow rounded p-4">
              <summary className="cursor-pointer font-medium text-lg mb-2">{item.title}</summary>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 py-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">How We Do</h3>
        <p className="max-w-3xl mx-auto mb-10">Next Web follows a well-defined process for software development...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: discovery, title: 'Discovery', desc: 'During this phase, we collaborate closely with our clients...' },
            { img: design, title: 'Web Design', desc: 'Following the conclusion of the discovery phase...' },
            { img: development, title: 'Development', desc: 'Following the completion of the design phase...' },
            { img: deployment, title: 'Deployment', desc: 'Following the conclusion of the development phase...' },
            { img: maintanance, title: 'Maintenance', desc: 'Finally, once the software has been deployed...' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <img src={step.img} alt={step.title} className="w-full h-40 object-contain mb-4" />
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Technology Stack</h1>
        <p className="text-center max-w-2xl mx-auto mb-8">Our ecommerce development service uses a wide range of technologies...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["E-Commerce Platform", "Front-end Technologies", "Back-end Technologies", "Databases", "Payment gateway integration", "Shipping integration", "Security and Compliance", "Analytics and Reporting"].map((tech, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">{tech}</h2>
              <p className="text-sm text-gray-700">Description of {tech} services.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-6 bg-white mt-10 border-t">
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-4">
            <a href="#"><img src={insta} className="w-6 h-6" alt="Instagram" /></a>
            <a href="#"><img src={facebook} className="w-6 h-6" alt="Facebook" /></a>
            <a href="#"><img src={linkedin} className="w-6 h-6" alt="LinkedIn" /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mt-4 sm:mt-0 text-sm">
            <div className="flex items-center gap-2"><img src={phone} className="w-5 h-5" alt="Phone" /><span>+9927387829</span></div>
            <div className="flex items-center gap-2"><img src={mail} className="w-5 h-5" alt="Mail" /><span>Nextweb@gmail.com</span></div>
            <div className="flex items-center gap-2"><img src={address} className="w-5 h-5" alt="Address" /><span>Chennai</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;
