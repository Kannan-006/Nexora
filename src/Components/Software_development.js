import React from 'react'
import styles from "../Css/Software_development.module.css";
const logo = new URL('../images/logo.jpg', import.meta.url);
const software = new URL("../images/software development.jpeg",import.meta.url);
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

const Software_development = () => {
  return (
    <div className={styles.Header}>
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

{/* tittle */}

<div className={styles.title}>
  <h2>SOFTWARE DEVELOPMENT</h2>
 <p>At Next Web, we develop custom software that meets the specific needs and requirements of businesses in many different industries. Our team of experienced developers works closely with clients to understand their business processes, find inefficiencies, and design and implement a custom software solution that streamlines operations, cuts costs, and increases profits.</p>
<p>Our custom software development services cover a wide range of uses, such as project management, supply chain management, inventory management, human resources, and accounting. We use the most up-to-date technologies and development methods to create high-quality, scalable, and flexible solutions that can be changed to meet the changing needs of businesses.</p>
<img src={software}/>
</div>



<div className={styles.do}>
  <h3>Why We Do</h3>
  <details>
    <summary>Software Design and architeture</summary>
    <p>Before beginning any project, we ensure that we fully understand your requirements and then design a solution to meet those requirements. Our expert team has extensive experience designing and developing software solutions for a wide range of businesses.</p>
  </details>

  <details>
    <summary>Software Development</summary>
    <p>To create scalable, reliable, and secure software solutions, our developers use the most recent programming languages and technologies. We use the best software development methods to ensure that the software we deliver is the best it can be.</p>
   </details>

  <details>
    <summary>Software testing and quality assurance</summary>
    <p>We all know that testing and quality assurance are critical to the success of any software project. Our testing team performs thorough testing to find and fix bugs, as well as to ensure that the software meets your requirements.</p>
    </details>

    <details>
    <summary>Maintanance and support</summary>
    <p>We provide ongoing maintenance and support services to ensure that your software continues to function properly after it has been released. We also provide support for any issues that may arise following deployment.</p>
      </details>
</div>

{/* how we do */}
<div className={styles.we}>
<h3>How We do</h3>
  <p>Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
  </div>

<div className={styles.sector}>
   <div className={styles.mini}>
    <img src={discovery}/>
    <h4>Discovery</h4>
    <p>During this phase, we 
      collaborate closely with 
      our clients to determine
       their needs, objectives,
        and goals. We collect
         information regarding the project's scope, schedule, and budget.
          During the development process, we also identify any potential risks and obstacles. At the conclusion of this phase, we create a comprehensive project plan outlining the work scope, timelines, and deliverables.</p>
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

{/* Technology */}

<div className={styles.tech}>
  <h1>Technology Stack </h1>
  <p>Our software development service uses a wide range of technologies, frameworks,<br/>    and programming languages to create custom software solutions that meet our clients' needs.</p>
</div>

<div className={styles.techno}>
<div className={styles.technology}>
  <h2>Front-end Development</h2>
<p>We build the front ends of web apps, mobile apps, and desktop software 
  with HTML, CSS, and JavaScript. Popular front-end frameworks like React,
   Angular, and Vue.js are also used to make user interfaces that are interactive</p>
   </div>

   <div className={styles.technology}>
  <h2>Back-end Development</h2>
<p>We use PHP, Python, Ruby on Rails, and Node.js, 
  among other back-end technologies, to build the server-side logic 
  for web apps, mobile apps, and desktop software. We also use well-known 
  frameworks like Django, Laravel, and Express.js to build back-end systems that
   are strong and scalable.</p>
   </div>

   <div className={styles.technology}>
  <h2>DataBase Management</h2>
<p>We use a variety of database technologies, such as MySQL, MongoDB,
   and PostgreSQL, to make databases
   that can handle large amounts of data and provide fast, reliable access.</p>
   </div>

   <div className={styles.technology}>
  <h2>Cloud computing services</h2>
<p>We can help you store, manage, and access your data and 
  applications from anywhere, at any time, using Amazon Web Services
   (AWS), Microsoft Azure, and Google Cloud Platform.</p>
   </div>

   <div className={styles.technology}>
  <h2>Mobile Development</h2>
<p>We use Flutter to make mobile apps that work on both Android 
  and iOS devices without any problems. For Android app development, we also use native technologies like Java and Kotlin. 
  For iOS app development, we use Swift and Objective-C.</p>
   </div>

   <div className={styles.technology}>
  <h2>Devops</h2>
<p>We use DevOps tools and methods like Git, Jenkins, Docker, 
  and Kubernetes to automate the software development process. This makes sure that your software
   is delivered on time, with high quality and security.</p>
   </div>
   </div>

   <div className={styles.marketing}>
    <h2>Digital Marketing</h2>
    <p>Help customers find your products with ads that appear in related shopping results and product pages.</p>
   <p>Make your brand and products stand out with engaging creative formats.</p>
   </div>
   <br />

   {/* footer */}
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

export default Software_development;
