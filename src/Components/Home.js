import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const web = new URL('../images/web deve.jpg', import.meta.url);
const app = new URL('../images/app.png', import.meta.url);
const software = new URL('../images/software.jpg', import.meta.url);
const commerce = new URL('../images/commerce.jpeg', import.meta.url);
const marketing = new URL('../images/marketing.png', import.meta.url);
const insta = new URL('../images/instagram.png', import.meta.url);
const facebook = new URL('../images/facebook.png', import.meta.url);
const linkedin = new URL('../images/linkedin.png', import.meta.url);
const phone = new URL('../images/phone.png', import.meta.url);
const mail = new URL('../images/mail.jpeg', import.meta.url);
const address = new URL('../images/address.png', import.meta.url);
const agility = new URL('../images/agility.jpeg', import.meta.url);
const collaboration = new URL('../images/collaboration.jpeg', import.meta.url);
const customaization = new URL('../images/customaization.jpeg', import.meta.url);
const quality = new URL('../images/quality.jpg', import.meta.url);
const innovation = new URL('../images/innovation.png', import.meta.url);

const Home = () => {
  const navigate = useNavigate();

 
  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <header className="bg-white shadow-md">
     
<Navbar/>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 py-6 text-center bg-gray-100">
        <h3 className="cursor-pointer hover:text-blue-600">Software<br />Development</h3>
        <h3  className="cursor-pointer hover:text-blue-600">Mobile App<br />Development</h3>
        <h3  className="cursor-pointer hover:text-blue-600">Website<br />Development</h3>
        <h3  className="cursor-pointer hover:text-blue-600">Marketing</h3>
        <h3  className="cursor-pointer hover:text-blue-600">E-Commerce</h3>
      </div>

 
      <section className="px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Services Provided by Next Web</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[{title: 'Website Development', img: web, link: '/Website_development', desc: 'Next Web skilled website building helps boost your online image...'},
            {title: 'Mobile App Development', img: app, link: '/Mobileapp_development', desc: 'Improve your online visibility with custom mobile apps...'},
            {title: 'Software Development', img: software, link: '/Software_development', desc: 'Our skilled team creates solutions that grow your business...'},
            {title: 'E-Commerce Development', img: commerce, link: '/Ecommerce', desc: 'Start your path to digital success with dynamic web stores...'},
            {title: 'Marketing', img: marketing, link: '/Marketing', desc: 'We create solutions that attract and convert customers...'}].map((svc, i) => (
            <div key={i} className="bg-white p-4 shadow-md rounded cursor-pointer" onClick={() => handleServiceClick(svc.link)}>
              <img src={svc.img} alt={svc.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h2 className="text-lg font-semibold mb-2">{svc.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{svc.desc}</p>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(svc.link);
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Next Web</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {[{title: 'QUALITY', img: quality, desc: 'Dedicated to providing services that go above expectations.'},
            {title: 'CUSTOMIZATION', img: customaization, desc: 'Services tailored to your unique business needs.'},
            {title: 'INNOVATION', img: innovation, desc: 'Forward-thinking solutions that drive growth.'},
            {title: 'AGILITY', img: agility, desc: 'Versatile methods to meet changing demands.'},
            {title: 'COLLABORATION', img: collaboration, desc: 'Working closely with clients for the best outcomes.'}].map((feat, i) => (
            <div key={i} className="bg-white p-6 rounded shadow text-center">
              <img src={feat.img} alt={feat.title} className="mx-auto h-24 object-contain mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-700">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <footer className="bg-white text-center px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">About Company!</h1>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          We believe in the transformative power of technology... performance monitoring, business intelligence and customer experience management is what makes us endearing to our clients.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {[insta, facebook, linkedin].map((icon, i) => (
            <a key={i} href="#"><img src={icon} className="w-6 h-6" alt="social" /></a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2"><img src={phone} className="w-5" /><span>+9927387829</span></div>
          <div className="flex items-center space-x-2"><img src={mail} className="w-5" /><span>Nextweb@gmail.com</span></div>
          <div className="flex items-center space-x-2"><img src={address} className="w-5" /><span>Chennai</span></div>
        </div>
      </footer>
    </header>
  );
};

export default Home;