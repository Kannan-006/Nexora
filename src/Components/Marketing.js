import React from 'react'
import styles from "../Css/Marketing.module.css"
const logo = new URL('../images/logo.jpg', import.meta.url)
const marketing = new URL("../images/marketing1.png",import.meta.url);
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

const Marketing = () => {
  return (
    <div className={styles.marketing}>
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

{/* market */}


<div className={styles.market}>
  <h2>SOFTWARE DEVELOPMENT</h2>
 <p>In today’s digital age, a website is essential for the success of any business. A website functions as a digital storefront, providing customers with information about your products and services, as well as a method for contacting you and making purchases. Our website development service specialises in the creation of customised websites that are tailored to your business’s particular requirements and goals.</p>
<p>To keep your website running smoothly and safely, we also provide ongoing support and maintenance services. Our team has the knowledge and experience to design and develop a website from scratch or improve upon an existing one to meet your specific requirements.</p>
<img src={marketing}/>
</div>


{/* what we do */}
<div className={styles.whatwedo}>
  <h3>What We Do</h3>
  <details>
    <summary>Strategic Planning and Analysis</summary>
    <p>We’ll work with you to identify your business goals and objectives, and develop a
       comprehensive software strategy that aligns with your vision. Our team will conduct a thorough analysis of your existing software infrastructure, identify any inefficiencies or opportunities for improvement, and develop a plan that is
       tailored to your unique needs and requirements.</p> </details>

  <details>
    <summary>Research</summary>
    <p>Review of your business and its goals
Analysis of your offline and online competitors
Research and update of your target persona and audience</p> </details>

  <details>
    <summary>Digital strategy</summary>
    <p>
    Review marketing and digital strategy options<br/>
    Assess budget / business case<br/>
    Prioritize and select strategic initiatives</p>
 </details>

   
      <details>
    <summary>Sell product Online</summary>
    <p>If you sell products online, we can integrate capabilities into your website so that customers 
      can make purchases directly from your site.</p> 
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
  <p>Our software consultants and developers have expertise in a wide range of technologies and tools</p>
</div>

<div id={styles.techno}>
<div className={styles.technology}>
  <h2>SEO</h2>
<p>Search engine optimization is the process of improving the quality and quantity of website 
  traffic to a website or a web page from search engines</p>
   </div>

   <div className={styles.technology}>
  <h2>Content management </h2>
<p>We have experience with popular Content Management System (CMS) platforms such as WordPress, 
    Drupal, and Joomla. These systems facilitate content management, 
    revisions, and publication..</p>
   </div>

   <div className={styles.technology}>
  <h2>Google Ads</h2>
<p>
Google Ads  tool for managing Google Ads campaigns, 
allowing you to make changes to your Google Ads campaigns offline,</p>
   </div>

   <div className={styles.technology}>
  <h2>Version Control</h2>
<p>instagram, whatsapp, twitter, SMO etc</p>
   </div>

   <div className={styles.technology}>
  <h2>Tools</h2>
<p>Canva, SEO, Google Ads, Sprout Social, Slack</p>
   </div>

   <div className={styles.technology}>
  <h2>Marketing</h2>
<p>We have expertise with Magento, Shopify, and WooCommerce, among other popular platforms. These platforms facilitate 
    online management.</p>
   </div>
   </div>

   
   <br />

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

export default Marketing
