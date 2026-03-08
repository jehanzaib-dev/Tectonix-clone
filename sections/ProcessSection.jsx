"use client";

import React, { useRef, useEffect, useState } from "react";
import "@/styles/Process.css";

const steps = [
  { number: "01", title: "Ideation", subtitle: "Brainstorm & Strategy", description: "We collaborate to understand your idea and define a clear roadmap." },
  { number: "02", title: "Design", subtitle: "UI/UX", description: "We create user-centric designs that are visually appealing and functional." },
  { number: "03", title: "Development", subtitle: "Front & Backend", description: "Our team builds high-quality, scalable solutions tailored to your needs." },
  { number: "04", title: "Testing", subtitle: "QA & Deployment", description: "Thorough testing ensures bug-free, smooth, and reliable product delivery." },
  { number: "05", title: "Launch", subtitle: "Growth & Support", description: "We help launch, monitor, and grow your product successfully." },
];

export default function Process() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const targetHeightRef = useRef(0);
  const currentHeightRef = useRef(0);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    const progress = Math.min(
      Math.max(0, windowHeight - containerTop) / containerHeight,
      1
    );

    targetHeightRef.current = progress * containerHeight;
  };

  const animate = () => {
    let diff = targetHeightRef.current - currentHeightRef.current;

    if (diff > 0) {
      // scrolling down → lag (slower)
      currentHeightRef.current += diff * 0.1; 
    } else {
      // scrolling up → speed (faster)
      currentHeightRef.current += diff * 1; 
    }

    setLineHeight(currentHeightRef.current);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    animate();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Left half: headings */}
        <div className="process-headings">
          <div className="section-label">Process</div>
          <h2>How we transform ideas into reality</h2>
        </div>

        {/* Right half: timeline + steps */}
        <div className="process-timeline" ref={containerRef}>
          <div className="timeline-line" ref={lineRef} style={{ height: `${lineHeight}px` }} />
          <div className="steps-wrapper">
            {steps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <h4>{step.subtitle}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}