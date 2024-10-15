import React, { useState } from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import the necessary icons
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import the necessary icons
import { FaSearch, FaHandHoldingHeart, FaChevronDown } from 'react-icons/fa'; // Import icons from react-icons
import hblLogo from './images/hbl.png';
import unionpayLogo from './images/unionpay.png';
import visaLogo from './images/visa.png';
import easypaisaLogo from './images/easypaisa.png';
import jazzcashLogo from './images/jazzcash.png';
import pciLogo from './images/pci.png';
import AabsharLogo from './images/logo.png';
import USAIDLogo from './images/usaid.png';
import AwardsLogo from './images/awards.png';
import TechstarsLogo from './images/techstars.png';
import TPLLogo from './images/tpl_logo.png';
import MckinseyLogo from './images/mckinsey_logo.jpeg';
import GGFLogo from './images/ggf_logo.png';
import NovaLogo from './images/nova_logo.png';
import USApparel from './images/us-apparels-logo.png';
import ShanLogo from './images/shan-logo.png';
import UnileverLogo from './images/unilever-logo.png';
import UnzeLogo from './images/unze-logo.png';
import StandardCharteredLogo from './images/standard-chartered-logo.png';
import PSOLogo from './images/pso-logo.png';
import MKLogo from './images/mckinsey.png';
import DemoLogo from './images/demo.png';
import ClimateLogo from './images/climate_kic.png';
import YPOLogo from './images/ypo_logo.png';
import AILogo from './images/aibox.png';
import CarbonLogo from './images/co2Box.png';
import NozzleLogo from './images/path-to-carbon-credit.png';
import TapLogo from './images/path-to-aerator.png';
import ReligiousLogo from './images/religious-center.png';
import TextileLogo from './images/textile.png';
import HospitalLogo from './images/hospital.png';
import HospitalityLogo from './images/hospitality.png';
import DomesticLogo from './images/domestic.png';


function App() {

  const [showProducts, setShowProducts] = useState(false);

  const toggleProductsDropdown = () => {
    setShowProducts(!showProducts);
  };

  const [calculatedOutput, setCalculatedOutput] = useState(0); // State for the calculated output
  const [incrementValue, setIncrementValue] = useState(0); // State for the incremental/decremental box

  const increment = () => {
    setIncrementValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setIncrementValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };
  

  return (
<div className="app">
      {/* Header Section */}
      <header className="header-section">
        <div className="navbar">
          <div className="logo-container">
            <img src={AabsharLogo} alt="Aabshar logo" className="logo" />
          </div>
          <nav className="nav-links">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
              <li className="products-dropdown">
                <a href="#products" onClick={toggleProductsDropdown}>
                  Products <FaChevronDown className="dropdown-icon" />
                </a>
                {showProducts && (
                  <ul className="dropdown-menu">
                    <li><a href="#water-nozzle">Water Nozzle</a></li>
                    <li><a href="#smart-monitor">Smart Monitor</a></li>
                    <li><a href="#ai-monitoring">AI Monitoring System</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#contact">Contact Us</a></li>
              <li className="contribute-item">
                <a href="#contribute" className="contribute-btn"> Contribute <FaHandHoldingHeart className="donate-icon" /> </a>
              </li>
            </ul>
          </nav>
          <div className="search-container">
            <FaSearch className="search-icon" />
          </div>
        </div>
      </header>

      {/* Main Content Section */}
<section className="main-content">
  <div className="text-content">
    <h1>NO WATER DAMAGES</h1>
    <p>Reduce Water Wastage</p>
    <p>Reduce Electricity Bill</p>
    <p>Reduce CO2 Emission</p>
    <button className="subscribe-btn">Subscribe Now</button>
  </div>
  <div className="image-container">
    <img src={DemoLogo} alt="Demo" className="demo-image" />
  </div>
</section>


<section className="trusted-brands">
  <h2>Trusted By 200+ International Brands:</h2>
  <div className="brands">
    <img src={MKLogo} alt="Mckinsey Logo" />
    <img src={UnileverLogo} alt="Unilever" />
    <img src={UnzeLogo} alt="Unze London" />
    <img src={StandardCharteredLogo} alt="Standard Chartered" />
    <img src={PSOLogo} alt="PSO" />
    <img src={USApparel} alt="US Apparel" />
    <img src={ShanLogo} alt="Shan" />
  </div>
</section>

     {/* One-Stop Solutions Section */}
<section className="one-stop-solutions">
  <div className="one-stop-container">
    {/* Left Column */}
    <div className="left-column">
      <h1>ONE STOP SOLUTIONS</h1>
      <p>
        To improve your water & CO2 footprint, you need to know how and where it's used.
        Our AI monitoring solutions collect detailed water flow and usage information
        to help you achieve ESG & SDGs compliance effectively. The Enterprise Grade system.
      </p>
      <button className="explore-btn">Explore More!</button>
      
      <div className="appreciated-by">
        <h3>Appreciated by:</h3>
        <div className="logos">
          <img src={ClimateLogo} alt="Climate KIC" />
          <img src={GGFLogo} alt="The Global Good Fund" />
          <img src={MckinseyLogo} alt="McKinsey & Company" />
          <img src={YPOLogo} alt="YPO" />
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="right-column">
      <div className="image-grid">
        <div className="image-item center-image">
          <img src={AabsharLogo} alt="AabsharLogo" />
        </div>
        <div className="image-item top-image">
          <img src={AILogo} alt="AI Monitoring System" />
          <p className="hover-text">AI Monitoring System</p>
        </div>
        <div className="image-item bottom-image">
          <img src={NozzleLogo} alt="Water Nozzle" />
          <p className="hover-text">Water Nozzle</p>
        </div>
        <div className="image-item left-image">
          <img src={TapLogo} alt="Accessories" />
          <p className="hover-text">Accessories</p>
        </div>
        <div className="image-item right-image">
          <img src={CarbonLogo} alt="Carbon Credit" />
          <p className="hover-text">Carbon Credit</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Success Section */}
{/* Success Section */}
<section className="success-section">
  <h1 className="success-title">SUCCESS</h1>
  
  <div className="success-content">
    {/* Left Part - YouTube Video */}
    <div className="video-thumbnail">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fs-ti4iXU3I"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    
    {/* Right Part - Text Description */}
    <div className="video-description">
      <p className="description-text">
        At Aabshar, we understand that water is a precious and finite resource that must be conserved for future generations. That’s why we have made it our mission to provide innovative solutions that help individuals and businesses save water.
      </p>
      
      <h3 className="success-message">
        You can be a Success Story with Just one Tap and you all set up.
      </h3>
      
      <a href="#" className="more-success-stories-link">
        Get inspired with more Successful Case Studies →
      </a>
    </div>
  </div>


        {/* Add Impact Heading */}
        <div className="heading-container">
      <h2 className="impact-heading">Impact:</h2>
      <h2 className="impact-heading2">Monthly Impact Calculator:</h2> {/* Replace with your desired text */}
    </div>
    
    {/* Impact Statistics */}
    <div className="impact-stats">
      <div className="stats-column">
        <div className="stats-row">
          <div className="stats-item">
            <p className="stat-value">4.3 Billion</p>
            <p className="stat-label">Liters Water Saved</p>
          </div>
          <div className="stats-item">
            <p className="stat-value">236 Million</p>
            <p className="stat-label">Lives Impacted</p>
          </div>
        </div>
        <div className="stats-row">
          <div className="stats-item">
            <p className="stat-value">1 Billion</p>
            <p className="stat-label">Trees Saved</p>
          </div>
          <div className="stats-item">
            <p className="stat-value">90 Million</p>
            <p className="stat-label">Tons CO2 Reduced</p>
          </div>
        </div>
      </div>

          {/* Impact Calculator */}
          <div className="impact-calculator">
            <select className="calculator-select">
              <option>Select Product</option>
              <option>Single Mode 85% Savings</option>
              <option>Dual Mode 98% Savings</option>
            </select>
            <select className="calculator-select">
              <option>Select Location</option>
              <option>Home</option>
              <option>Business</option>
              <option>Mosque</option>
            </select>

            {/* Incremental/Decremental Box */}
            <div className="increment-decrement-container">
              <button className="decrement-button" onClick={decrement}>−</button>
              <p className="increment-value">{incrementValue}</p>
              <button className="increment-button" onClick={increment}>+</button>
            </div>

            <p className="estimated-saving-text">Your Estimated Water Saving: </p>
            <div className="calculator-output">
              <p className="output-text">Output</p>
            </div>
            <p className="estimated-saving-text">Liters every month</p>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
<section className="industry-focus">
  <h2 className="main-title">REDUCE CONSUMPTION AND CUT WATER BILLS</h2>
  <div className="info-columns">
    <div className="info-column">
      <h3>Save Water</h3>
      <p>Our nozzles will reduce the water consumption up to 85% without affecting the water flow.</p>
    </div>
    <div className="info-column">
      <h3>Save Money</h3>
      <p>Reduced water quantity and reduced usage of pumps will positively impact the bills at the end of the month.</p>
    </div>
    <div className="info-column">
      <h3>Fight Water Scarcity</h3>
      <p>The tanks will be able to serve more people with the same amount of water.</p>
    </div>
    <div className="info-column">
      <h3>Save Electricity</h3>
      <p>The use of water pumps will be reduced because the quantity of water in a tank will deplete slower.</p>
    </div>
  </div>

  <h2 className="industry-focus-title">Industry Focus:</h2>
  <div className="focus-grid">
    <div className="focus-item">
      <img src={ReligiousLogo} alt="Religious Centers" />
      <p>Religious Centers</p>
    </div>
    <div className="focus-item">
      <img src={TextileLogo} alt="Textile" />
      <p>Textile</p>
    </div>
    <div className="focus-item">
      <img src={DomesticLogo} alt="Domestic" />
      <p>Domestic</p>
    </div>
    <div className="focus-item">
      <img src={HospitalityLogo} alt="Hospitality" />
      <p>Hospitality</p>
    </div>
    <div className="focus-item">
      <img src={HospitalLogo} alt="Hospital" />
      <p>Hospital</p>
    </div>
  </div>
  <button className="register-category-btn">Register your category</button>
</section>


     {/* Globally Recognized Section */}
<section className="globally-recognized">
  <h3>Globally Recognized</h3>
  <div className="recognized-logos">
    <div className="logo-item">
      <img src={GGFLogo} alt="The Global Good Fund" />
      <p></p>
      <p>The Global Good Fund</p>
    </div>
    <div className="logo-item">
      <img src={MckinseyLogo} alt="McKinsey & Company" />
      <p></p>
      <p>McKinsey & Company</p>
    </div>
    <div className="logo-item">
      <img src={TPLLogo} alt="TPL" />
      <p></p>
      <p>TPL</p>
    </div>
    <div className="logo-item">
      <p></p>
      <img src={NovaLogo} alt="Novartis" />
      <p></p> 
      <p>Novartis</p>
    </div>
  </div>
</section>

      <section className="blogs-section">
  <div className="blogs-header">
    <h3>BLOGS</h3>
    <a href="#" className="view-all">View All</a>
  </div>
  <div className="blogs-grid">
    <div className="blog-item">
      <img src={TechstarsLogo} alt="Techstars" />
      <div className="label-box">High-Growth Companies</div>
      <p>Techstars WaterTech</p>
    </div>
    <div className="blog-item">
      <img src={USAIDLogo} alt="USAID Pakistan" />
      <div className="label-box">Save Pakistan</div>
      <p>USAID Pakistan</p>
    </div>
    <div className="blog-item">
      <img src={AwardsLogo} alt="McKinsey Blog" />
      <div className="label-box">Award Winning Tech</div>
      <p>Accredited by Over 50 Orgs</p>
    </div>
  </div>
</section>




 {/* Subscribe Section */}
<section className="subscribe-section">
  <hr />
  <h3 className="subscribe-heading">Subscribe to Newsletter</h3>
  <div className="subscribe-form">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="subscribe-input" 
    />
    <button className="subscribe-btn">Subscribe</button>
    {/* Scroll to Top Button */}
    <button 
      className="scroll-top-btn" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="fas fa-arrow-up"></i> {/* Font Awesome upward arrow icon */}
    </button>
  </div>
</section>


     {/* Info Section Before Footer */}
<section className="info-section">
  <div className="info-content">
    <div className="info-column footer-description">
      <img 
        src={AabsharLogo} // Use the imported logo here
        alt="Aabshar - The Water Saving Company" 
        className="footer-logo" 
      />
      <p className="justified-text">
        Aabshar helps organizations achieve water, energy, and CO<sub>2</sub> sustainability for ESG and SDGs compliance. 
        Our AI monitoring systems not only detect and prevent leaks in real-time but also optimize water usage 
        by up to 98% and significantly lower CO<sub>2</sub> emissions.
      </p>
      <p className="line-space"></p> {/* This creates a line space */}
      <p className="justified-text">
        Join us in our mission to save 80 billion liters of water by 2028.
      </p>
    </div>

    <div className="info-column quick-links">
      <h4 style={{ color: '#3328BF' }}>Quick Links</h4> {/* Set header color to blue */}
      <ul>
        <li><a href="#" className="quick-link">Home</a></li>
        <li><a href="#" className="quick-link">Case Studies</a></li>
        <li><a href="#" className="quick-link">Products</a></li>
        <li><a href="#" className="quick-link">Contact Us</a></li>
      </ul>
    </div>

    <div className="info-column contact-us">
      <h4 style={{ color: '#3328BF' }}>Contact Us</h4> {/* Keep the header in blue */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <FaEnvelope style={{ marginRight: '8px' }} /> {/* Email icon */}
        <span style={{ color: '#000000' }}>info@aabshar.com</span>
      </p>
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <FaPhone style={{ marginRight: '8px' }} /> {/* Phone icon */}
        <span style={{ color: '#000000' }}>+92 323 4409902</span>
      </p>
    </div>


<div className="info-column footer-socials">
  <h4>Follow Our Socials</h4>
  <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
    <a href="https://www.facebook.com/aabsharsolutions" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={30} color="#4267B2" />
    </a>
    <a href="https://www.instagram.com/aabsharsolutions/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} color="#C13584" />
    </a>
    <a href="https://x.com/i/flow/login?redirect_after_login=%2Faabsharsolution" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={30} color="#1DA1F2" />
    </a>
    <a href="https://www.linkedin.com/company/aabshar/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} color="#0077B5" />
    </a>
    <a href="https://www.youtube.com/@AABSHARsolutions" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={30} color="#FF0000" />
    </a>
  </div>
</div>

  </div>
</section>

{/* Payment Methods Section */}
<section className="payment-methods-section" style={{ fontSize: '20px', padding: '20px 10px', textAlign: 'center', color: '#3328BF'}}>
    <h3>Payment Methods</h3>
    <div className="payment-methods-grid" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <img src={hblLogo} alt="HBL" className="payment-logo" />
        <img src={unionpayLogo} alt="UnionPay" className="payment-logo" />
        <img src={visaLogo} alt="Visa" className="payment-logo" />
        <img src={easypaisaLogo} alt="Easypaisa" className="payment-logo" />
        <img src={jazzcashLogo} alt="JazzCash" className="payment-logo" />
        <img src={pciLogo} alt="PCI" className="payment-logo" />
    </div>
</section>


      {/* Footer Section */}
      <footer className="footer">
  <div className="footer-bottom">
    <p className="copyright">Copyright © 2024 Aabshar, All rights reserved.</p>
    <div className="legal-links">
      <a href="#">Customer Service</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy Policy</a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
