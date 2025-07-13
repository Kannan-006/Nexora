import React from 'react'
import Navbar from './Navbar';
const logo = new URL('../images/logo.jpg', import.meta.url)
const websitedevelopment = new URL("../images/website development.jpg",import.meta.url);
const discovery = new URL("../images/dicovery.png",import.meta.url);
const design = new URL("../images/web design.png",import.meta.url)
const development = new URL("../images/development.png",import.meta.url)
const deployment = new URL("../images/deployment.png",import.meta.url)
const maintanance = new URL("../images/maintanance.jpg",import.meta.url);
const insta = new URL("../images/instagram.png",import.meta.url);
const facebook = new URL("../images/facebook.png",import.meta.url);
const linkedin = new URL("../images/linkedin.png",import.meta.url);
const phone = new URL("../images/phone.png",import.meta.url);
const mail = new URL("../images/mail.jpeg",import.meta.url);
const address = new URL("../images/address.png",import.meta.url);

const Website_development = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <Navbar/>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">SOFTWARE DEVELOPMENT</h2>
        <p className="text-lg mb-4">In today’s digital age, a website is essential for the success of any business. A website functions as a digital storefront, providing customers with information about your products and services, as well as a method for contacting you and making purchases. Our website development service specialises in the creation of customised websites that are tailored to your business’s particular requirements and goals.</p>
        <p className="text-lg">To keep your website running smoothly and safely, we also provide ongoing support and maintenance services. Our team has the knowledge and experience to design and develop a website from scratch or improve upon an existing one to meet your specific requirements.</p>
        <img src={websitedevelopment} className="w-full h-auto mt-8" alt="Website Development"/>
      </div>
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
        <details className="mb-4">
          <summary className="font-medium text-lg">Design and Development</summary>
          <p>Our designers and developers collaborate to create a visually appealing, user-friendly, and conversion-optimized website. We create a website that stands out from the competition by employing the newest design trends and technologies.</p>
        </details>

        <details className="mb-4">
          <summary className="font-medium text-lg">Content Creation</summary>
          <p>We can assist you in developing high-quality, search engine and audience-optimized content. Our team of content writers can create engaging and informative website copy, blog posts, and other forms of content for your website.</p>
        </details>

        <details className="mb-4">
          <summary className="font-medium text-lg">SEO Services</summary>
          <p>We optimise your website for search engines in order to increase its visibility and attract more visitors. Our SEO services consist of keyword research, on-page optimisation, and link building in order to improve your website’s search engine ranking.</p>
        </details>

        <details className="mb-4">
          <summary className="font-medium text-lg">Responsive Design</summary>
          <p>We develop websites that are responsive and mobile-friendly, ensuring that your website looks fantastic on any device.</p>
        </details>

        <details className="mb-4">
          <summary className="font-medium text-lg">Sell Product Online</summary>
          <p>If you sell products online, we can integrate e-commerce capabilities into your website so that customers can make purchases directly from your site.</p>
        </details>
      </div>

     
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">How We Do</h3>
        <p>Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <img src={discovery} className="mx-auto mb-4" alt="Discovery" />
          <h4 className="text-xl font-medium">Discovery</h4>
          <p>During this phase, we collaborate closely with our clients to determine their needs, objectives, and goals. We create a comprehensive project plan outlining the work scope, timelines, and deliverables.</p>
        </div>

        <div className="text-center">
          <img src={design} className="mx-auto mb-4" alt="Design" />
          <h4 className="text-xl font-medium">Web Design</h4>
          <p>We create detailed design specifications, ensuring the final product meets your expectations. At the conclusion of this phase, a software prototype is developed for testing and validation.</p>
        </div>

        <div className="text-center">
          <img src={development} className="mx-auto mb-4" alt="Development" />
          <h4 className="text-xl font-medium">Development</h4>
          <p>Our team constructs the software based on the design specifications using agile methodologies, ensuring incremental and iterative development.</p>
        </div>

        <div className="text-center">
          <img src={deployment} className="mx-auto mb-4" alt="Deployment" />
          <h4 className="text-xl font-medium">Deployment</h4>
          <p>The software is deployed to the production environment, and we ensure the product functions as expected with final testing.</p>
        </div>

        <div className="text-center">
          <img src={maintanance} className="mx-auto mb-4" alt="Maintenance" />
          <h4 className="text-xl font-medium">Maintenance</h4>
          <p>We provide ongoing support and maintenance to keep the software current and aligned with evolving client needs.</p>
        </div>
      </div>


      <div className="mb-16">
        <h1 className="text-3xl font-semibold mb-4">Technology Stack</h1>
        <p className="text-lg mb-8">We use a variety of technologies and tools to create customized, high-quality websites that meet the specific requirements of our clients.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">Front-end Technologies</h2>
            <p>HTML5, CSS3, and JavaScript to create the website’s visual design and functionality.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">Content Management System</h2>
            <p>Experience with CMS platforms like WordPress, Drupal, and Joomla for easy content management.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">Server-side Technologies</h2>
            <p>We integrate databases using server-side languages like PHP, Ruby on Rails, and Node.js.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">Version Control</h2>
            <p>We use Git and GitHub for code management and team collaboration.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">Web Applications</h2>
            <p>We use frameworks like React, AngularJS, and Vue.js for scalable web applications.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="font-medium text-xl">E-commerce</h2>
            <p>Expertise in platforms like Magento, Shopify, and WooCommerce for secure online transactions.</p>
          </div>
        </div>
      </div>


      <hr className="border-t-2 mb-8" />
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a href='#'><img src={insta} alt="Instagram" className="h-6" /></a>
          <a href='#'><img src={facebook} alt="Facebook" className="h-6" /></a>
          <a href='#'><img src={linkedin} alt="LinkedIn" className="h-6" /></a>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <img src={phone} alt="Phone" className="h-6" /><span className="ml-2">+9927387829</span>
          </div>
          <div className="flex items-center">
            <img src={mail} alt="Mail" className="h-6" /><span className="ml-2">Nextweb@gmail.com</span>
          </div>
          <div className="flex items-center">
            <img src={address} alt="Address" className="h-6" /><span className="ml-2">Chennai</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Website_development;
