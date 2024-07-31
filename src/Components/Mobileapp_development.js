import React from 'react'
import styles from '../Css/Mobileapp_development.module.css'
const logo = new URL('../images/logo.jpg', import.meta.url);
const app = new URL('../images/mobile app.png', import.meta.url);
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






const Mobileapp_development = () => {
  return (
    <div id={styles.heading}>
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

</div>
{/* header */}

<div id={styles.title}>
  <h2>MOBILE APP DEVELOPMENT</h2>
 <p>At Next Web, we develop custom software that meets the specific needs and requirements of businesses in many different industries. Our team of experienced developers works closely with clients to understand their business processes, find inefficiencies, and design and implement a custom software solution that streamlines operations, cuts costs, and increases profits.</p>
<p>Our custom software development services cover a wide range of uses, such as project management, supply chain management, inventory management, human resources, and accounting. We use the most up-to-date technologies and development methods to create high-quality, scalable, and flexible solutions that can be changed to meet the changing needs of businesses.</p>
<img src={app}/>
</div>

{/* what we do */}



<div className={styles.do}>
  <h3>What We Do</h3>
  <details>
    <summary>Custom Mobile App Development</summary>
    <p>We make mobile apps that are unique to your business and fit its needs. 
        Our team of expert developers will work closely with you to learn about your business goals and needs. 
        They will then create a mobile app that works well and is easy to use.</p> 
    </details>

  <details>
    <summary>Cross-platform Mobile App Development</summary>
    <p>We use Flutter to make mobile apps that work on both Android 
        and iOS devices without any problems. This method lets us make apps faster, 
        for less money, and with a consistent user interface (UI).</p>
   </details>

  <details>
    <summary>Mobile App Integration</summary>
    <p>We help you connect your mobile app to your existing IT infrastructure,
         third-party APIs and services,
         and backend systems so that your app is well-integrated and easy to scale.</p>  </details>

    <details>
    <summary>Mobile App Testing and QA</summary>
    <p>Our mobile app testing and quality assurance services make sure 
        that your mobile app is free of bugs, errors, and other problems. We use the most up-to-date tools and methods to
         find and fix bugs in your app before it goes on the market.</p> </details>
</div>

{/* How we do */}


<div id={styles.how}>
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
  <p>Our mobile app development service uses a variety of technologies,
     frameworks, and programming languages to make high-quality mobile apps that meet
     the needs of our clients. Our tech stack consists of:</p>
</div>

<div id={styles.techno}>
<div className={styles.technology}>
  <h2>Flutter</h2>
<p>We use Flutter to make mobile apps that work on both 
    Android and iOS devices without any problems. Flutter is a powerful open-source framework that lets us make apps that look good and work well with just one codebase. 
    This cuts down on the time and money needed to make apps.</p> </div>

   <div className={styles.technology}>
  <h2>Native App Development</h2>
<p>When we make apps for Android, we use native technologies 
    like Java and Kotlin. When we make apps for iOS, we use Swift and Objective-C. Native development lets us use the full power of the platform to make 
    apps that work well and don’t get in the way of the user’s experience.</p>
   </div>

   <div className={styles.technology}>
  <h2>Back-end Development </h2>
<p>	To build the server-side logic for mobile apps, we 
use a variety of back-end technologies, such as Node.js, Django, and Laravel. This lets us make back-end systems that are strong and scalable, can handle a lot of data, and give fast, reliable access.
</p>
   </div>

   <div className={styles.technology}>
  <h2>Cloud Computing Services</h2>
<p>We offer cloud computing services using Amazon Web Services (AWS), Microsoft Azure,
     and Google Cloud Platform to help you store, manage, and access your
     mobile app data and content from anywhere, at any time.</p>
   </div>

   <div className={styles.technology}>
  <h2>Mobile App Analytics</h2>
<p>We use mobile app analytics tools like Google Analytics, Firebase Analytics, 
    and Mixpanel to learn important things about how users behave, how they interact with the app, and how long they stay with it. This gives us the information we need to improve the 
    performance and user experience of your mobile app.</p>
   </div>

   <div className={styles.technology}>
  <h2>Mobile App Testing</h2>
<p>We use testing frameworks and tools like Appium, XCTest, and Espresso to 
    make sure your mobile app doesn’t have any bugs, errors, or other problems. This lets us make a good mobile app that meets both your 
    business goals and the needs of your users.</p>
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

export default Mobileapp_development
