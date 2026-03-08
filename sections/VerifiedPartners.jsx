"use client";

import { useState, useEffect } from "react";
import "@/styles/VerifiedPartners.css";

export default function VerifiedPartners() {
  const testimonials = [
    {
      title: "3X Faster Time to Market",
      message:
        "Tectonix helped us launch our product three times faster than expected.",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "FinTech Labs",
      image: "/images/client1.png",
    },
    {
      title: "100% Uptime & Stability",
      message:
        "Their engineering quality ensured our platform runs flawlessly even during peak traffic.",
      name: "Michael Chen",
      role: "CTO",
      company: "EcomSphere",
      image: "/images/client2.jpg",
    },
    {
      message:
        "The team transformed our idea into a powerful digital product.",
      name: "Emily Carter",
      role: "Founder",
      company: "HealthBridge",
      image: "/images/client3.png",
    },
    {
      message: "Excellent communication and delivery exactly on schedule.",
      name: "David Brown",
      role: "Operations Director",
      company: "LogistiCore",
      image: "/images/client4.jpg",
    },
    {
      message: "Professional team that understands product scalability.",
      name: "Daniel White",
      role: "CEO",
      company: "NextGen AI",
      image: "/images/client5.jpg",
    },
    {
      message:
        "Working with Tectonix improved our platform performance significantly.",
      name: "Olivia Taylor",
      role: "Tech Lead",
      company: "CloudNova",
      image: "/images/client6.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const staticCards = testimonials.slice(0, 2);
  const dynamicCards = testimonials.slice(2);

  const currentDynamic = [dynamicCards[index], dynamicCards[index + 1]];

  return (
    <section className="partners-section">
      <div className="partners-heading">
        <div className="section-label">Verified Partners</div>
        <h2>Results that scale, Read success stories</h2>
      </div>

      <div className="partners-container">
        <div className="testimonial-cards-wrapper">
          {/* CARD 1 */}
          <div className="testimonial-card card1">
            <h5 className="testimonial-title">{staticCards[0].title}</h5>
            <p className="testimonial-text">"{staticCards[0].message}"</p>
            <div className="testimonial-user">
              <img src={staticCards[0].image} />
              <div className="user-info">
                <h4>{staticCards[0].name}</h4>
                <span>
                  {staticCards[0].role} • {staticCards[0].company}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="testimonial-card card2">
            <h5 className="testimonial-title">{staticCards[1].title}</h5>
            <p className="testimonial-text">"{staticCards[1].message}"</p>
            <div className="testimonial-user">
              <img src={staticCards[1].image} />
              <div className="user-info">
                <h4>{staticCards[1].name}</h4>
                <span>
                  {staticCards[1].role} • {staticCards[1].company}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 (dynamic) */}
          <div key={index} className="testimonial-card card3 slide-card">
            <p className="testimonial-text">"{currentDynamic[0].message}"</p>
            <div className="testimonial-user">
              <img src={currentDynamic[0].image} />
              <div className="user-info">
                <h4>{currentDynamic[0].name}</h4>
                <span>
                  {currentDynamic[0].role} • {currentDynamic[0].company}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 (dynamic) */}
          <div key={index + 10} className="testimonial-card card4 slide-card">
            <p className="testimonial-text">"{currentDynamic[1].message}"</p>
            <div className="testimonial-user">
              <img src={currentDynamic[1].image} />
              <div className="user-info">
                <h4>{currentDynamic[1].name}</h4>
                <span>
                  {currentDynamic[1].role} • {currentDynamic[1].company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}