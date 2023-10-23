import logo from './assets/soorya.png';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';
import profilepic from "./assets/profilepic.jpeg";
import { useState, useRef } from 'react';
import resume from './Soorya_S__Resume.pdf';
import { ToastContainer, toast } from 'react-toast';
import instaLogo from "./assets/icons8-instagram.svg";
import linkedInLogo from "./assets/icons8-linkedin.svg";
import gitLogo from "./assets/icons8-github.svg";
import reactLogo from "./assets/react-2.svg";
import JsLogo from "./assets/javascript-2.svg";
import htmlLogo from "./assets/html-1.svg";
import cssLogo from "./assets/css-3.svg";
import draftJsLogo from "./assets/draftLogo.png";
import gitLabLogo from "./assets/gitlab-3.svg";
import restApiLogo from "./assets/REST_API.webp";
import reduxLogo from "./assets/redux.svg";
import menuIcon from "./assets/icons8-menu.svg";
import closeIcon from "./assets/icons8-close.svg"
import { motion } from "framer-motion";
import company2slide1 from "./assets/editor.png";
import company2slide2 from "./assets/analytics.png";
import company2slide3 from "./assets/receiverEnd.png";
import Carousel from 'react-bootstrap/Carousel';
import erpSlide1 from './assets/erp-app1.jpeg'
import erpSlide2 from './assets/erp-app2.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const professionalRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [headerList , setHeaderList] = useState([{name: "Home", idName: "home"}, {name: "About", idName: "about"}, {name: "Professional", idName: "professional"}, {name: "Portfolio", idName: "portfolio"}, {name: "Experience", idName: "experience"}, {name: "Contact", idName: "contact"}]);
  const [selectedTab , setSelectedTab] = useState("Home");
  const [state, handleSubmit] = useForm("xyyqoyqj");
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideBarMarginValue, setSideBarMarginValue] = useState(0);
  const images = [
    company2slide1,
    company2slide2,
    company2slide3
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if(state?.result?.kind === "success") {
    toast.success("Submitted Successfully");
  }

  const tabClick = (e,li) => {
    const element = document.getElementById(li.idName);
    const offset = 150;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - offset;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setSelectedTab(li.name);
    }, 500);
  }
  
  const getVisibleElementId = () => {
    const elements = document.querySelectorAll('[id]');
    let elementInView = null;
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        elementInView = element;
      }
    });
    if (elementInView) {
      let index = headerList.findIndex(x => x.idName === elementInView.id)
      if(index > 0) {
        setSelectedTab(headerList[index].name)
      }
      if(window.scrollY === 0) {
        setSelectedTab("Home")
      }
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSelectedTab("Contact")
      }
    }
  }
  
  const handleScroll = () => {
    getVisibleElementId()
  }
  window.addEventListener("scroll", handleScroll);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  
  return (

    <div className='portfolio-main-container'>
      <div style={{height: "70px", scrollBehavior: "auto",backgroundColor: "#707a8a", position: "sticky", top: "0", width: "100%", zIndex: "2"}}>
        <div style={{display: "flex"}}>
          <div className='main-page-header'>
            <img src={logo} width="5%"className="header-logo-img" />
            <div className='main-page-header-sections-container'>
              {headerList.map((li) => {
                return(
                <a className={`main-page-header-sections ${selectedTab == li.name && "main-page-header-sections-selected"}`} onClick={(e)=>{tabClick(e,li)}}>{li.name}</a>)
              })} 
            </div>
            <div className='main-page-header-side-bar-icon' onClick={() => {setShowSideBar(true);setSideBarMarginValue(60)}}>
              <img src={menuIcon}/>
            </div>
            <div className={`main-page-header-side-bar-container ${showSideBar && "expanded"}`} style={{width: `${sideBarMarginValue}%`}}>
              <div className='side-bar-close-icon-container' onClick={()=>{setShowSideBar(false);setSideBarMarginValue(0)}}>
                <img src={closeIcon}/>
              </div>
              <ul className='side-bar-list-contaioner'>
                {headerList.map((li) => {
                  return(
                  <li className='side-bar-list-content' style={{width: `${sideBarMarginValue}%`}} onClick={(e)=>{tabClick(e,li);setShowSideBar(false)}}>{li.name}</li>)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='home-page-content-container' ref={homeRef} id="home">
      <motion.div
          className="main-content"
          style={{position: "relative"}}
          initial={{ left: "-40%" }}
          whileInView={{ left: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div style={{margin: "auto", marginTop: "73px"}}>
          <h1 className='home-page-content'>I<span style={{color: "#00d646"}}>'</span>M</h1>
          <h1 style={{marginTop: "-50px"}} className='home-page-content'>SOORYA<span style={{color: "#00d646"}}>.</span></h1>
          <h1 className='home-page-content-skills'>React Js Developer| UI Developer | JavaScript | HTML | CSS</h1>
        </div>
        </motion.div>
        <img className="profile-pic-img" src={profilepic} width="30%"/>
      </div>
      <motion.div
        className="about-page-container"
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        ref={aboutRef} 
        id="about"
      >
        <img src={logo} width="10%" className='about-page-img'/>
        <motion.div
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        >
        <div>
          Experienced front-end developer with over 2 years and 6 months of dedicated expertise in crafting engaging and responsive web applications. Proficient in a wide range of front-end technologies, I specialize in harnessing the power of React, HTML, CSS, and JavaScript to create visually stunning, user-friendly, and high-performance web experiences.
        </div>
        </motion.div>
        <a href={resume} className='about-page-btn' download>Download Resume</a>
      </motion.div>
      <div className='professional-page-container' ref={professionalRef} id="professional">
        <h1 className='skills-header'>Skills</h1>
        <div className='skills-container'>
          <div className='skills-1'>
            <img src={reactLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              React js
            </div>
          </div>
          <div className='skills-2'>
            <img src={JsLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              JavaScript
            </div>
          </div>
          <div className='skills-1'>
            <img src={htmlLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              HTML
            </div>
          </div>
        </div>
        <div className='skills-container'>
          <div className='skills-1'>
            <img src={cssLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              CSS
            </div>
          </div>
          <div className='skills-2'>
            <img src={draftJsLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              Draft js
            </div>
          </div>
          <div className='skills-1'>
            <img src={gitLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              Git
            </div>
          </div>
        </div>
        <div className='skills-container'>
          <div className='skills-1'>
            <img src={gitLabLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              GitLab
            </div>
          </div>
          <div className='skills-2'>
            <img src={restApiLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              Rest API
            </div>
          </div>
          <div className='skills-1'>
            <img src={reduxLogo} width={"20px"} className='skills-logos'/>
            <div className='skills-1-content'>
              Redux
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-page-container' ref={portfolioRef}>
        <div className='portfolio-page-comapny1-container' id="portfolio">
          <div className='portfolio-page-comapny1-carousel'>
            <Carousel>
              <Carousel.Item interval={100000}>
                <img src={company2slide1} alt="First slide" width="100%" className='carousel-images'/>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img src={company2slide2} alt="Second slide" width="100%" className='carousel-images'/>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img src={company2slide3} alt="Third slide" width="100%" className='carousel-images'/>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='portfolio-page-comapny1-content'>
            <div>
              <div className='portfolio-page-comapny1-company-name'>
                Animaker
              </div>
              <div className='portfolio-page-comapny1-project'>
                SHOW
              </div>
            </div>
            <div className='portfolio-page-comapny1-work'>
              Show by Animaker is a B2B product primarily used for email campaigning to a bulk number of contacts. Users can send elements such as images, buttons, videos, and more. Additionally, users have the ability to track email analytics.
            </div>
          </div>
        </div>
        <div className='portfolio-page-comapny1-container' id="portfolio" style={{marginTop: "40px"}}>
          <div className='portfolio-page-comapny1-content'>
            <div className='portfolio-page-comapny-project-container'>
              <div className='portfolio-page-comapny1-company-name'>
                KHR Technologies
              </div>
              <div className='portfolio-page-comapny1-project'>
                ERP Application
              </div>
            </div>
            <div className='portfolio-page-comapny1-work'>
              Enterprise Resource Planning and Management System (ERS) is software that manages an organization's day-to-day business activities, including accounting, inventory management, financial processes, and other organizational functions.
            </div>
          </div>
          <div className='portfolio-page-comapny1-carousel'>
            <Carousel>
              <Carousel.Item interval={100000}>
                <img src={erpSlide1} alt="First slide" width="100%" className='carousel-images'/>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img src={erpSlide2} alt="Second slide" width="100%" height="444px" className='carousel-images'/>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='experience-page-container' id="experience">
        <div className='experience-page-individual-container' style={{marginLeft: "auto"}}>
          {/* <div class="vertical-line"></div> */}
          <div className='experience-page-content'>
            <div className='experience-page-years'>2021 - 2022</div>
            <div className='experience-page-company'>KHR Technologies</div>
            <div className='experience-page-work-content'>Worked as a React Developer who Developed and provided maintenance for websites, using React, HTML, Java Script and CSS.</div>
          </div>
        </div>
        <div className='experience-page-individual-container'>
          <div className='experience-page-content'>
            <div className='experience-page-years'>2022 - 2023</div>
            <div className='experience-page-company'>Animaker</div>
            <div className='experience-page-work-content'>Worked as a Associate React Js Developer who Worked on designing UI and translated it into production-ready code using HTML, CSS with React JS library and also worked and customised Draft Js library.</div>
          </div>
          {/* <div class="vertical-line"></div> */}
        </div>
      </div>     
      <div className='contact-page-container' ref={contactRef} id="contact">
        <div className='contact-page-contact-content'>
          <div style={{marginTop: "auto"}}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
              <img src={instaLogo} width="20%"/>
              <img src={linkedInLogo} width="20%"/>
              <img src={gitLogo} width="20%"/>
            </div>
            <div style={{marginBottom: "10px"}}>
              soorya1105@gmail.com
            </div>
            <div>
              +91 948-716-8309
            </div>
          </div>
        </div>
        <form  onSubmit= {handleSubmit}>
          <div>
            <h1 style={{marginLeft: "10px", color: "#FFFFFF"}}>
              Contact
            </h1>
            <input
              id="name"
              type="name" 
              name="Name"
              placeholder='Name'
              className='contact-page-input-box'
            />            
          </div>
          <div>
          <input
            id="phoneNumber"
            type="phoneNumber" 
            name="Phone Number"
            placeholder='Phone'
            className='contact-page-input-box'
          />
          </div>
          <div>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder='Email'
              className='contact-page-input-box'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="<Message>"
              placeholder='Message'
              className='contact-page-input-box'
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div>
            <button className='contact-page-submit-btn' type="submit" disabled={state.submitting} >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='footer-container'>
        <div className='footer-container-content'>
          @2023 SOORYA S
        </div>
        <div className='footer-container-content'>
          ALL RIGHTS RESERVED
        </div>
      </div>
      <ToastContainer delay={3000} />
    </div>
  );
}

export default App;
