import React from 'react'
import styles from '../Css/Ecommerce.module.css'
const logo = new URL('../images/logo.jpg', import.meta.url);
const ecommerce = new URL('../images/ecommerce.jpeg', import.meta.url);
const discovery = new URL("../images/dicovery.png",import.meta.url);
const design = new URL("../images/web design.png",import.meta.url)
const development = new URL("../images/development.png",import.meta.url)
const  deployment= new URL("../images/deployment.png",import.meta.url)
const maintanance = new URL("../images/maintanance.jpg",import.meta.url);
const insta = new URL("../images/instagram.png",import.meta.url);
const facebook = new URL("../images/facebook.png",import.meta.url);
const linkedin = new URL("../images/linkedin.png",import.meta.url);
const phone = new URL("../images/phone.png",import.meta.url);
const mail = new URL("../images/mail.jpeg",import.meta.url);
const address = new URL("../images/address.png",import.meta.url);

const Ecommerce = () => {
  return (
    <div className={styles.header}>

<div id={styles.section}>
    <img src={logo}/>
   
<nav>
<ul>
<li><a href='#' className={styles.item}>Home</a></li>
<li><a href='#' className={styles.item}>About Us</a></li>
<li><a  href='#' className={styles.item}>Our services</a>
<div className={styles.navcontent}>
<div className={styles.navsub}>
<ul>
<li><a href='#' >Website Development</a></li>
<li><a href='#' >App Development</a></li>
<li><a href='#' >Software Development</a></li>
<li><a href='#'>Marketing</a></li>
<li><a href='#' >E-Commerce</a></li>
</ul>
</div>
</div>
</li>
<li><a href='#' className={styles.item}>Career</a></li>
<li><a href='#' className={styles.item}>Support</a></li>
<li><a href='#' className={styles.item}>Contact US</a></li>
</ul>
</nav> 
<div className={styles.btn}>
<a href='Login'><button>Signup</button></a>
</div>
</div>

{/* tittle */}


<div id={styles.title}>
  <h2>E-COMMERCE</h2>
 <p>Our ecommerce development service helps businesses sell their goods and services online by making custom ecommerce solutions. Our team of experienced developers builds ecommerce sites that are safe, scalable, and easy to use with a variety of technologies and frameworks.</p>
<p>We provide a comprehensive range of ecommerce development services, from the design and development of custom websites to the integration of shopping carts and the setting up of payment gateways, with the goal of assisting companies of varying sizes and types in achieving online success. Our e-commerce solutions are built with scalability in mind,
     ensuring that they are able to expand and adapt as your company develops over time.</p>
<img src={ecommerce}/>
</div>


{/* what we do */}



<div className={styles.do}>
  <h3>What We Do</h3>
  <details>
    <summary>Custom Design</summary>
    <p>We make ecommerce sites that look good, are easy to use, 
        and are set up to make sales. Our team of designers works closely with you to learn about your brand, your target audience, and your business goals so that they can create 
        a design that is unique and reflects your brand.</p> 
    </details>

  <details>
    <summary>Responsive Design</summary>
    <p>We make ecommerce sites that work well on desktops, laptops, 
        tablets, and smartphones. This makes sure that your customers can access your online store from anywhere, at any time, and on any device.

    </p>
   </details>

  <details>
    <summary>E-commerce platforms</summary>
    <p>We use a variety of ecommerce platforms, like Shopify,
         WooCommerce, Magento, and BigCommerce, to make ecommerce websites that are highly functional, scalable, and easy to manage. We carefully choose the right platform for your
         business based on what it needs and how much it can spend.</p>  </details>

    <details>
    <summary>User-friendly interface </summary>
    <p>The ecommerce website should have an easy-to-use interface that makes it easy for visitors to find pro.</p> </details>

    <details>
    <summary>Product catalogue </summary>
    <p>The ecommerce website should have a catalogue of all the products that can be bought.
         The catalogue should be easy to use and let people search, 
        filter, and sort products based on what they want.</p> </details>

        <details>
    <summary>Shophing Cart </summary>
    <p>The ecommerce website should have a shopping cart that lets people put items in their cart and buy them.</p> </details>

        <details>
    <summary>Checkout</summary>
    <p>The ecommerce website should have an easy-to-use checkout process that lets people pay safely.</p>
     </details>

        <details>
    <summary>Order Management</summary>
    <p>The ecommerce website should have a system for managing and keeping track of orders, 
        such as order fulfilment, shipping, and returns.</p> </details>

        <details>
    <summary>Search Engine Optimization</summary>
    <p>The ecommerce website should be optimised for search engines to make it more visible and get more visitors.</p>
     </details>


     <details>
    <summary>Analytics and Reporting</summary>
    <p>The ecommerce site should have tools for tracking sales, traffic, and how customers use the site.</p>
     </details>
</div>


{/* How we do */}


<div id={styles.how}>
<h3>How We do</h3>
  <p>Next Web follows a well-defined process for software development that ensures 
    our clients receive the highest quality software on time and within budget.
     Our software development methodology is founded on collaboration, communication, 
     and openness.</p>
  </div>

<div id={styles.sector}>
   <div className={styles.mini}>
    <img src={discovery}/>
    <h4>Discovery</h4>
    <p>During this phase, we collaborate closely with our clients to determine their needs, objectives, and goals. We collect information regarding the project's scope, schedule, and budget. During the development process, we also identify any potential risks and obstacles. At the conclusion of this phase, we create a comprehensive project plan outlining the work scope, timelines, and deliverables.</p>
  </div>

  <div className={styles.mini}>
    <img src={design}/>
    <h4>Web Design</h4>
    <p>Following the conclusion of the discovery phase, we enter the design phase. During this phase, a detailed design specification describing the software's architecture, user interface, and functionality is developed. We collaborate closely with our clients to ensure that the final product meets their needs and expectations. At the conclusion of this phase, a software prototype is developed for testing and validation.</p>
   </div>

  <div className={styles.mini}>
    <img src={development}/>
    <h4>Development</h4>
    <p>Following the completion of the design phase, we enter the development phase. During this phase, our development team constructs the software in accordance with the design specification. We employ agile development methodologies to ensure that software is developed iteratively and incrementally. Additionally, we conduct routine testing and quality assurance checks to ensure that the software is of the highest standard.</p>
     </div>


     <div className={styles.mini}>
    <img src={deployment}/>
    <h4>Deployment</h4>
    <p>Following the conclusion of the development phase, we enter the deployment phase. During this phase, the software is deployed to the production environment and final testing and quality assurance checks are conducted. We collaborate closely with our clients to ensure that the software is functioning as expected and that any issues are promptly addressed.</p>
      </div>

 <div className={styles.mini}>
    <img src={maintanance}/>
    <h4>Maintanance</h4>
    <p>Finally, once the software has been deployed, we will enter the maintenance phase. Throughout this phase, we provide ongoing support and maintenance to ensure that the software continues to meet the needs and expectations of our client. In addition, we provide regular updates and enhancements to keep the software current and relevant.</p>
     </div>
</div>

{/* technology stack */}


<div id={styles.tech}>
  <h1>Technology Stack </h1>
  <p>Our ecommerce development service uses a wide range of technologies and
     frameworks to create custom ecommerce solutions that meet your business's 
    needs and go above and beyond your expectations. </p>
</div>

<div id={styles.techno}>
<div className={styles.technology}>
  <h2>E-Commerce Platform</h2>
<p>We work with a number of ecommerce platforms, including Shopify,
     WooCommerce, Magento, and BigCommerce. Each platform has its own pros and cons, and we carefully choose the right one 
    for your business based on its needs and goals.</p> </div>

   <div className={styles.technology}>
  <h2>Front-end Technologies</h2>
<p>To make responsive and easy-to-use ecommerce websites, we use a variety of 
    front-end technologies, such as HTML, CSS, JavaScript, React, Angular, and Vue.js. Our designers and developers work together to make sure that your website looks good 
    and is set up to get the most sales.</p>
   </div>

   <div className={styles.technology}>
  <h2>Back-end Technologies </h2>
<p>	To make scalable and safe ecommerce websites, we use a number 
    of back-end technologies, such as PHP, Node.js, Python, and Ruby on Rails. Our team of developers knows a lot about these technologies and 
    can make solutions that are tailored to your business’s needs.</p>
   </div>

   <div className={styles.technology}>
  <h2>Databases</h2>
<p>To store and manage the data on your ecommerce site, we use databases 
    like MySQL, MongoDB, and PostgreSQL. We carefully choose the right database for your business and make
     sure it is scalable, secure, and reliable.</p>
   </div>

   <div className={styles.technology}>
  <h2>Payment gateway integration</h2>
<p>We integrate payment gateways like PayPal, Stripe, and Authorize.net 
    so that your customers can buy things 
    from your ecommerce website easily and safely.</p>
   </div>

   <div className={styles.technology}>
  <h2>Shipping integration</h2>
<p>We integrate shipping services like FedEx, UPS, and USPS to make sure that your customers 
    get their orders on time and in good condition.</p>
   </div>

   <div className={styles.technology}>
  <h2>Security and Compliance</h2>
<p>We make sure that your ecommerce website is safe and meets industry 
    standards like PCI DSS and GDPR. We use security measures like SSL encryption, two-factor authentication, and firewalls to keep your customers’ data safe 
    and stop people from getting in without permission.</p>
   </div>

   <div className={styles.technology}>
  <h2>Analytics and Reporting</h2>
<p>We use ecommerce analytics tools like Google Analytics, Piwik, and
     Adobe Analytics to keep track of your website’s sales, traffic, and conversions, among other things. This lets us improve the 
    performance and user experience of your website.</p>
   </div>

   </div>
   <br />


        {/* Footer */}

        <hr className={styles.hr} style={{width:"80%",marginLeft:"130px"}}/>

<div className={styles.footer}>

<div className={styles.socialicons}>
<a href='#'><img src={insta}/></a>
<a href='#'><img src={facebook}/></a>
<a href='#'><img src={linkedin}/></a>
</div>
<div id={styles.footer}>
<img src={phone}/><span>+9927387829</span>
<img src={mail}/><span>Nextweb@gmail.com</span>
<img src={address}/><span>Pudukkottai Main Road</span>

</div>
</div>








      
    </div>
  )
}

export default Ecommerce
