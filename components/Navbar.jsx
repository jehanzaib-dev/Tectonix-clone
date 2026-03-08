"use client";

import { useState } from "react";
import "@/styles/Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <a href="/" className="logo">
          TECTONIX
        </a>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#expertise">Expertise</a>
          <a href="#work">Our Work</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQs</a>

          <a href="/contactUs" className="mobile-cta">
            Book a call
          </a>

        </nav>

        {/* Desktop CTA */}
        <a href="/contactUs" className="nav-cta">
          Book a call
        </a>

      </div>

    </header>
  );
}