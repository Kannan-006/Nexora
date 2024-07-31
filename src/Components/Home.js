import React from 'react'
import styles from '../Css/Home.module.css'
const logo = new URL('../images/logo.jpg', import.meta.url)
const web = new URL("../images/web deve.jpg",import. meta.url);
const app = new URL("../images/app.png",import. meta.url);
const software = new URL("../images/software.jpg",import. meta.url);
const commerce = new URL("../images/commerce.jpeg",import. meta.url);
const marketing = new URL("../images/marketing.png",import. meta.url);
const insta = new URL("../images/instagram.png",import.meta.url);
const facebook = new URL("../images/facebook.png",import.meta.url);
const linkedin = new URL("../images/linkedin.png",import.meta.url);
const phone = new URL("../images/phone.png",import.meta.url);
const mail = new URL("../images/mail.jpeg",import.meta.url);
const address = new URL("../images/address.png",import.meta.url);
const agility = new URL("../images/agility.jpeg",import.meta.url);
const collaboration = new URL("../images/collaboration.jpeg",import.meta.url);
const customaization = new URL("../images/customaization.jpeg",import.meta.url);
const quality= new URL("../images/quality.jpg",import.meta.url);
const innovation = new URL("../images/innovation.png",import.meta.url);


const Home = () => {
  return (
    // <div className={styles.Header}>
    <header>   <div className={styles.section}>
         <img src={logo}/>
        
<nav>
<ul>
 <li><a href='#' className={styles.item}>Home</a></li>
 <li><a href='#About' className={styles.item}>About Us</a></li>
 <li><a  href='#our services' className={styles.item}>Our services</a>
 <div className={styles.navcontent}>
<div className={styles.navsub}>
  <ul>
    <li><a href='/Website_development' >Website Development</a></li>
    <li><a href='/App_development' >App Development</a></li>
    <li><a href='/Software_development' >Software Development</a></li>
    <li><a href='/Marketing'>Marketing</a></li>
    <li><a href='/Ecommerce' >E-Commerce</a></li>
  </ul>
</div>
</div>
 </li>
 <li><a href='#career' className={styles.item}>Career</a></li>
 <li><a href='#' className={styles.item}>Support</a></li>
 <li><a href='#contact' className={styles.item}>Contact US</a></li>

 </ul>

</nav> 
<a href='/Login'><div className={styles.btn}><button >Login</button></div></a>
</div>
   <div className={styles.head}>
    </div>
    <div className={styles.photo}>
    </div>

  <div className={styles.serv}>
    <h3>Software<br/>
       Development</h3>
    <h3>Mobile App <br/>
      Development</h3>
    <h3>Website<br/>
       Development</h3>
       <h3>Marketing</h3>
    <h3>E-Commerce</h3>
  </div>
<br/> 
       {/* services */}
 <div className={styles.services}>
 <h2>Services Provided by Next Web </h2> <hr/>
 </div>

 <div className={styles.contain}>
  <div className={styles.content}>
   <img src={web}/>
   <h2>Website Development</h2>
   <p>Next Web skilled website building helps boost your online image. We specialize on user-friendly designs and smooth functions, so your website will stand out and get results. For better company online experiences, trust unique solutions.</p>
   <a href="/Website_development"><button>Read More</button></a>
  </div>

  <div className={styles.content}>
   <img src={app}/>
   <h2>Mobile App Development</h2>
   <p>With Next Web custom mobile app development service, you can improve your online visibility. From the idea to the implementation, we make solutions that fit your needs perfectly and are full of new ideas. Our team at Next Web can help you turn your ideas into fun mobile experiences.</p>
   <a href='/Mobileapp_development'><button>Read More</button></a>
  </div>
  <div className={styles.content}>
   <img src={software}/>
   <h2>Software Development</h2>
   <p>Next Web professional software creation services can help your business grow. From coming up with ideas to putting them into action, our skilled team makes solutions that are just right for you. With our top-notch development skills, you can experience new ideas and increased speed.</p>
   <a href='Software_development'><button>Read More</button></a>
   </div>

   <div className={styles.content}>
   <img src={commerce}/>
   <h2>E-Commerce Development</h2>
   <p>With Next Web E-commerce Development Service, you can start your path to digital success. From the idea stage to the launch, we create dynamic web stores that keep customers interested and increase sales. Improve the online presence of your business with our custom solutions.</p>
   <a href='/Ecommerce'><button>Read More</button></a>
   </div>

   <div className={styles.content}>
   <img src={marketing}/>
   <h2>Marketing</h2>
   <p>With Next WebE-commerce Development Service, you can start your path to digital success. From the idea stage to the launch, we create dynamic web stores that keep customers interested and increase sales. Improve the online presence of your business with our custom solutions.</p>
   <a href='/Marketing'><button>Read More</button></a>
   </div>
   </div>


   {/* why choose next web */}
  <div className={styles.choose}>
  <h2>Why Choose Next Web </h2>
  </div>
  <div id={styles.cont}>
    <div className={styles.cont}>
     <img src={quality}/>
     <h3>QUALITY</h3>
     <p>Dedicated to providing services that go above and above for our customers. </p>
    </div>

    <div className={styles.cont}>
     <img src={customaization}/>
     <h3>CUSTOMIZATION</h3>
     <p>Our services are custom-made to accommodate the specific demands of each individual company.  </p>
    </div>

    <div className={styles.cont}>
     <img src={innovation}/>
     <h3>INNOVATION</h3>
     <p>Our forward-thinking approach allows us to create solutions that propel the expansion and modernization of companies. </p>
    </div>

    <div className={styles.cont}>
     <img src={agility}/>
     <h3>AGILITY</h3>
     <p>Our methods are agile, and the solutions we provide are versatile enough to meet the evolving demands of any given firm.</p>
     </div>

     <div className={styles.cont}>
     <img src={collaboration}/>
     <h3>COLLABORATION</h3>
     <p>We have a teamwork-oriented strategy, closely collaborating with our customers to find win-win solutions. </p>
      </div>
    </div>

        {/* footer */}

    <div className={styles.about}>
      <h1>About Company!</h1>
      <p>We believe in the transformative power of technology. United by our commitment to innovation and excellence, we make software for businesses that want to become more profitable, more efficient, and more agile. The perfect blend of technical excellence, business performance monitoring, business intelligence and customer experience management is what makes us endearing to our clients.
</p>

        <a href='#'><img src={insta}/></a>
        <a href='#'><img src={facebook}/></a>
        <a href='#'><img src={linkedin}/></a>
    </div>
    <hr className={styles.hr} style={{width:"80%",marginLeft:"130px"}}/>
    <div id={styles.footer}>
        <img src={phone}/><span>+9927387829</span>
        <img src={mail}/><span>Nextweb@gmail.com</span>
        <img src={address}/><span>Pudukkottai Main Road</span>
      
    </div>

    </header>
     
  )
}

export default Home;
