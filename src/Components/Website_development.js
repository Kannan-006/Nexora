import React from 'react'
import styles from '../Css/Website_development.module.css'
const logo = new URL('../images/logo.jpg', import.meta.url)
const websitedevelopment = new URL("../images/website development.jpg",import.meta.url);
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



const Website_development = () => {
  return (

    <div className={styles.heading}>
    <div className={styles.section}>
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


<div className={styles.web}>
  <h2>SOFTWARE DEVELOPMENT</h2>
 <p>In today’s digital age, a website is essential for the success of any business. A website functions as a digital storefront, providing customers with information about your products and services, as well as a method for contacting you and making purchases. Our website development service specialises in the creation of customised websites that are tailored to your business’s particular requirements and goals.</p>
<p>To keep your website running smoothly and safely, we also provide ongoing support and maintenance services. Our team has the knowledge and experience to design and develop a website from scratch or improve upon an existing one to meet your specific requirements.</p>
<img src={websitedevelopment}/>
</div>


{/* what we do */}
<div className={styles.whatwedo}>
  <h3>What We Do</h3>
  <details>
    <summary>Design and Development</summary>
    <p>Our designers and developers collaborate to create a visually appealing, user-friendly, and conversion-optimized website. We create a website that stands out from the competition by employing the newest design trends and technologies.</p> </details>

  <details>
    <summary>Content Creation</summary>
    <p>We can assist you in developing high-quality, search engine and audience-optimized content. Our team of content writers can create engaging and informative website copy, blog posts, and other forms of content for your website.</p> 
    </details>

  <details>
    <summary>SEO Services</summary>
    <p>We optimise your website for search engines in order to increase its visibility and attract more visitors. Our SEO services consist of keyword research, on-page optimisation, and link building in order to improve your website’s search engine ranking.</p>
      </details>

    <details>
    <summary>Responsive Design</summary>
    <p>We develop websites that are responsive and mobile-friendly, ensuring that your website looks fantastic on any device.</p>
      </details>

      <details>
    <summary>Sell product Online</summary>
    <p>If you sell products online, we can integrate e-commerce capabilities into your website so that customers can make purchases directly from your site.</p> 
    </details>
</div>

{/* how we do */}


<div id={styles.we}>
<h3>How We do</h3>
  <p>Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
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
  <p>At our website development service, we use a variety of technologies and tools to 
    create customised, high-quality websites that meet the specific requirements of our clients.</p>
</div>

<div id={styles.techno}>
<div className={styles.technology}>
  <h2>Front-end Technologies</h2>
<p>HTML5, CSS3, and JavaScript are used to create the website’s visual design, layout, and functionality.</p>
   </div>

   <div className={styles.technology}>
  <h2>Content management system</h2>
<p>We have experience with popular Content Management System (CMS) platforms such as WordPress, 
    Drupal, and Joomla. These systems facilitate content management, 
    revisions, and publication..</p>
   </div>

   <div className={styles.technology}>
  <h2>Server-side Technologies</h2>
<p>We create server-side functionality and integrate databases using popular 
    server-side languages such as PHP, Ruby on Rails, and Node.js.</p>
   </div>

   <div className={styles.technology}>
  <h2>Version Control</h2>
<p>We use Git and GitHub to manage code and facilitate developer collaboration.</p>
   </div>

   <div className={styles.technology}>
  <h2>Web Applications</h2>
<p>Popular front-end frameworks and libraries, such as React, 
    AngularJS, and Vue.js, 
    are used to create scalable and effective web applications..</p>
   </div>

   <div className={styles.technology}>
  <h2>E-commerce</h2>
<p>We have expertise with Magento, Shopify, and WooCommerce, among other popular e-commerce platforms. These platforms facilitate 
    online transactions, payment gateway security, and inventory management.</p>
   </div>
   </div>

   <div className={styles.marketing}>
    <h2>DataBase Management System</h2>
    <p>We utilise popular database management systems such 
        as MySQL, MongoDB, and PostgreSQL to manage 
        data and guarantee efficient data storage and retrieval.</p>
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

export default Website_development
