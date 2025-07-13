import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); 
  };

  return (
    <div className="bg-white">

       <Navbar/>
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About Next Web</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Empowering businesses through innovative digital solutions since 2010
        </p>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Next Web started as a small team of passionate developers 
              with a vision to transform businesses through technology.
            </p>
            <p className="text-lg">
              Our journey has been marked by continuous innovation, client satisfaction, 
              and a commitment to delivering exceptional results.
            </p>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-gray-400">Company Image</span>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Next Web</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {title: 'QUALITY', desc: 'Dedicated to providing services that go above expectations.'},
              {title: 'CUSTOMIZATION', desc: 'Services tailored to your unique business needs.'},
              {title: 'INNOVATION', desc: 'Forward-thinking solutions that drive growth.'},
              {title: 'AGILITY', desc: 'Versatile methods to meet changing demands.'},
              {title: 'COLLABORATION', desc: 'Working closely with clients for best outcomes.'},
              {title: 'EXPERIENCE', desc: '10+ years of industry experience.'}
            ].map((feat, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">{feat.title}</h3>
                <p className="text-gray-700 text-center">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <button 
          onClick={handleContactClick}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </button>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Next Web</h3>
            <p>Transforming businesses through digital solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div>+9927387829</div>
              <div>Nextweb@gmail.com</div>
              <div>Chennai</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div>Home</div>
              <div>Services</div>
              <div>Careers</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;