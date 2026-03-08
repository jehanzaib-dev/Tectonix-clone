"use client";

import Link from "next/link";
import "@/styles/BookCallSection.css";

export default function BookCallSection() {
  return (
    <section className="bookCallSection">
      
      {/* Heading with corner borders */}
      <div className="bookCallLabel"><span>Book a Call</span></div>
      
      {/* Main Heading */}
      <h2 className="bookCallHeading">Ready to build something <br /> world-class?</h2>
      
      {/* Description */}
      <p className="bookCallDescription">
        Stop settling for average code. Schedule a free technical strategy call to discuss your product’s 
        architecture, timeline, and how Tectonix can bring it to life.
      </p>

      {/* Placeholder for LogoBar */}
      <div className="bookCallLogoBar">
        {/* LogoBar component will go here */}
      </div>

      {/* Call-to-action button */}
      <Link href="/contactUs">
        <button className="bookCallButton">Book your Strategy Call</button>
      </Link>
      {/* Green Beacon + Open Slots */}
      <div className="openSlotsWrapper">
        <span className="greenBeacon"></span>
        <span className="openSlotsText">Only 2 open slots available</span>
      </div>
      {/* Large Gradient Background Text with last "x" in red gradient */}
<div className="bookCallBackgroundText">
  <span className="tectonixGradient">Tectoni</span>
  <span className="tectonixRedGradient">x</span>
</div>
 {/* Footer Grid */}
      <div className="footerGrid">

        {/* 1. Tectonix Logo & Paragraph */}
        <div className="footerLogoSection">
          <Link href="#top" className="footerLogo">Tectonix</Link>
          <p>
            Building world-class digital products with scalable architecture and
            seamless user experiences.
          </p>
        </div>

        {/* 2. Company Section */}
        <div className="footerCompany">
          <h4>Company</h4>
          <ul>
            <li><Link href="/aboutUs">About Us</Link></li>
            <li><Link href="/contactUs">Contact Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        {/* 3. Socials Section */}
        <div className="footerSocials">
          <h4>Socials</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        {/* 4. Tech & Growth Insights Section */}
        <div className="footerInsights">
          <h4>Tech & Growth Insights</h4>
          <p>
            Get actionable strategies on app scaling, architecture, and launching successful digital products directly in your inbox.
          </p>

          {/* Email subscription */}
        <div className="emailContainer">
            <input 
              type="email" 
              placeholder="@ Enter your Email..." 
              className="footerEmailInput"
            />
            <button className="footerEmailButton">→</button> 
          </div>
        </div>
        
      </div>
    <div className="footer-bottom">

  <div className="footer-copyright">
    ©2026 Tectonix Digital Agency <br />
    registered in England & Wales
  </div>

  <div className="footer-policies">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>
  </div>

</div>

    </section>
  );
}