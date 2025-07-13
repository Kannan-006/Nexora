import React from 'react';
import Navbar from './Navbar';
const app = new URL('../images/mobileapp.png', import.meta.url);
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

const Mobileapp_development = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
     <Navbar/>


      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">MOBILE APP DEVELOPMENT</h2>
        <p className="text-lg mb-6 text-gray-700 text-center max-w-3xl mx-auto">
          At Next Web, we develop custom software that meets the specific needs and requirements of businesses in many different industries. Our team of experienced developers works closely with clients to understand their business processes, find inefficiencies, and design and implement a custom software solution that streamlines operations, cuts costs, and increases profits.
        </p>
        <p className="text-lg mb-6 text-gray-700 text-center max-w-3xl mx-auto">
          Our custom software development services cover a wide range of uses, such as project management, supply chain management, inventory management, human resources, and accounting. We use the most up-to-date technologies and development methods to create high-quality, scalable, and flexible solutions that can be changed to meet the changing needs of businesses.
        </p>
        <img src={app} alt="Mobile App" className="mx-auto my-6 rounded-lg shadow-lg" />
      </section>


      <section className="px-6 py-12 bg-white">
        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">What We Do</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          <details className="p-4 border-b border-gray-200">
            <summary className="font-medium">Custom Mobile App Development</summary>
            <p className="mt-2 text-gray-700">
              We make mobile apps that are unique to your business and fit its needs. Our team of expert developers will work closely with you to learn about your business goals and needs. They will then create a mobile app that works well and is easy to use.
            </p>
          </details>

          <details className="p-4 border-b border-gray-200">
            <summary className="font-medium">Cross-platform Mobile App Development</summary>
            <p className="mt-2 text-gray-700">
              We use Flutter to make mobile apps that work on both Android and iOS devices without any problems. This method lets us make apps faster, for less money, and with a consistent user interface (UI).
            </p>
          </details>

          <details className="p-4 border-b border-gray-200">
            <summary className="font-medium">Mobile App Integration</summary>
            <p className="mt-2 text-gray-700">
              We help you connect your mobile app to your existing IT infrastructure, third-party APIs, and services, and backend systems so that your app is well-integrated and easy to scale.
            </p>
          </details>

          <details className="p-4 border-b border-gray-200">
            <summary className="font-medium">Mobile App Testing and QA</summary>
            <p className="mt-2 text-gray-700">
              Our mobile app testing and quality assurance services make sure that your mobile app is free of bugs, errors, and other problems. We use the most up-to-date tools and methods to find and fix bugs in your app before it goes on the market.
            </p>
          </details>
        </div>
      </section>

      <section className="px-6 py-12 bg-gray-100">
        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">How We Do</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src={discovery} alt="Discovery" className="mx-auto h-24 w-24 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Discovery</h4>
            <p className="text-gray-700">
              During this phase, we collaborate closely with our clients to determine their needs, objectives, and goals.
            </p>
          </div>
          <div className="text-center">
            <img src={design} alt="Design" className="mx-auto h-24 w-24 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Web Design</h4>
            <p className="text-gray-700">
              Following the conclusion of the discovery phase, we enter the design phase, where we develop software architecture and prototypes.
            </p>
          </div>
          <div className="text-center">
            <img src={development} alt="Development" className="mx-auto h-24 w-24 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Development</h4>
            <p className="text-gray-700">
              In this phase, we build the app according to specifications, using agile methods for iterative development and testing.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8">
        <div className="flex justify-between items-center px-6">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><img src={insta} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="text-white hover:text-gray-400"><img src={facebook} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="text-white hover:text-gray-400"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" /></a>
          </div>
          <div className="text-sm">
            <p className="flex items-center space-x-2">
              <img src={phone} alt="Phone" className="w-5 h-5" />
              <span>+9927387829</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <img src={mail} alt="Email" className="w-5 h-5" />
              <span>Nextweb@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <img src={address} alt="Address" className="w-5 h-5" />
              <span>Chennai</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mobileapp_development;
