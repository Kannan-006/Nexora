import React from 'react';
import Navbar from './Navbar';
const marketing = new URL('../images/marketing1.png', import.meta.url);
const discovery = new URL('../images/dicovery.png', import.meta.url);
const design = new URL('../images/web design.png', import.meta.url);
const development = new URL('../images/development.png', import.meta.url);
const deployment = new URL('../images/deployment.png', import.meta.url);
const maintanance = new URL('../images/maintanance.jpg', import.meta.url);
const insta = new URL('../images/instagram.png', import.meta.url);
const facebook = new URL('../images/facebook.png', import.meta.url);
const linkedin = new URL('../images/linkedin.png', import.meta.url);
const phone = new URL('../images/phone.png', import.meta.url);
const mail = new URL('../images/mail.jpeg', import.meta.url);
const address = new URL('../images/address.png', import.meta.url);

const Marketing = () => {
  return (
    <div className="w-full">
     <Navbar/>

      <section className="p-6">
        <h2 className="text-3xl font-bold mb-4">SOFTWARE DEVELOPMENT</h2>
        <p className="mb-4">In today’s digital age, a website is essential for the success of any business...</p>
        <img src={marketing} alt="Marketing" className="w-full max-w-3xl mx-auto" />
      </section>

      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-medium">Strategic Planning and Analysis</summary>
            <p>We’ll work with you to identify your business goals...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-medium">Research</summary>
            <p>Review of your business and its goals...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-medium">Digital strategy</summary>
            <p>Review marketing and digital strategy options...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-medium">Sell product Online</summary>
            <p>If you sell products online...</p>
          </details>
        </div>
      </section>

      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">How We Do</h3>
        <p className="mb-6">Next Web follows a well-defined process...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{img: discovery, title: 'Discovery'}, {img: design, title: 'Web Design'}, {img: development, title: 'Development'}, {img: deployment, title: 'Deployment'}, {img: maintanance, title: 'Maintenance'}].map(({img, title}, idx) => (
            <div key={idx} className="bg-white shadow rounded p-4 text-center">
              <img src={img} alt={title} className="w-24 h-24 mx-auto mb-2" />
              <h4 className="font-semibold text-lg mb-2">{title}</h4>
              <p className="text-sm text-gray-600">Description for {title}.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6">
        <h1 className="text-3xl font-bold mb-4">Technology Stack</h1>
        <p className="mb-6">Our software consultants and developers...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["SEO", "Content management", "Google Ads", "Version Control", "Tools", "Marketing"].map((tech, idx) => (
            <div key={idx} className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{tech}</h2>
              <p className="text-sm text-gray-600">Description of {tech}.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 p-6 mt-10">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#"><img src={insta} alt="Instagram" className="h-6" /></a>
          <a href="#"><img src={facebook} alt="Facebook" className="h-6" /></a>
          <a href="#"><img src={linkedin} alt="LinkedIn" className="h-6" /></a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2"><img src={phone} className="h-5" /> +9927387829</div>
          <div className="flex items-center gap-2"><img src={mail} className="h-5" /> Nextweb@gmail.com</div>
          <div className="flex items-center gap-2"><img src={address} className="h-5" />Chennai</div>
        </div>
      </footer>
    </div>
  );
};

export default Marketing;
