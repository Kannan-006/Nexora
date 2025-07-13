import React from 'react';
import Navbar from './Navbar';
const software = new URL("../images/software development.jpeg", import.meta.url);
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

const Software_development = () => {
  return (
    <div className="bg-white text-gray-800">

 <Navbar/>

      <section className="px-10 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">SOFTWARE DEVELOPMENT</h2>
        <p className="mb-4">At Next Web, we develop custom software that meets the specific needs and requirements of businesses...</p>
        <p className="mb-6">Our custom software development services cover a wide range of uses...</p>
        <img src={software} alt="Software" className="mx-auto w-3/4" />
      </section>

  
      <section className="px-10">
        <h3 className="text-2xl font-semibold mb-4">Why We Do</h3>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">Software Design and Architecture</summary>
            <p className="mt-2">Before beginning any project...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">Software Development</summary>
            <p className="mt-2">To create scalable, reliable, and secure software solutions...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">Software Testing and Quality Assurance</summary>
            <p className="mt-2">Testing and quality assurance are critical to the success...</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">Maintenance and Support</summary>
            <p className="mt-2">We provide ongoing maintenance and support services...</p>
          </details>
        </div>
      </section>

      <section className="px-10 py-8">
        <h3 className="text-2xl font-semibold mb-4">How We Do</h3>
        <p className="mb-6">Next Web follows a well-defined process...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{img: discovery, title: 'Discovery'}, {img: design, title: 'Web Design'}, {img: development, title: 'Development'}, {img: deployment, title: 'Deployment'}, {img: maintanance, title: 'Maintenance'}].map(({img, title}, i) => (
            <div key={i} className="border rounded p-4 text-center">
              <img src={img} alt={title} className="h-32 mx-auto mb-2" />
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm">Content for {title} phase...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Technology Stack</h1>
        <p className="text-center mb-8">Our software development service uses a wide range of technologies...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Front-end Development", "Back-end Development", "Database Management", "Cloud Computing Services", "Mobile Development", "DevOps"].map((tech, i) => (
            <div key={i} className="border p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">{tech}</h2>
              <p className="text-sm">Description for {tech}...</p>
            </div>
          ))}
        </div>
      </section>


      <section className="px-10 py-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Digital Marketing</h2>
        <p>Help customers find your products...</p>
        <p>Make your brand and products stand out...</p>
      </section>


      <footer className="border-t pt-4 mt-10 px-10 pb-6">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#"><img src={insta} alt="Instagram" className="h-6" /></a>
          <a href="#"><img src={facebook} alt="Facebook" className="h-6" /></a>
          <a href="#"><img src={linkedin} alt="LinkedIn" className="h-6" /></a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
          <div className="flex items-center gap-2"><img src={phone} alt="Phone" className="h-4" /><span>+9927387829</span></div>
          <div className="flex items-center gap-2"><img src={mail} alt="Mail" className="h-4" /><span>Nextweb@gmail.com</span></div>
          <div className="flex items-center gap-2"><img src={address} alt="Address" className="h-4" /><span>Chennai</span></div>
        </div>
      </footer>
    </div>
  );
};

export default Software_development;