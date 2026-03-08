"use client";
import "@/styles/ServicesSection.css";
import Image from "next/image";
import { useState } from "react";

// Single ServiceCard component with cursor-follow tooltip
function ServiceCard({ service }) {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="services-card"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE replaces icon */}
      <div className="service-icon">
        <Image
          src={service.image}
          alt={service.title}
          width={64}
          height={64} className="service-img"
        />
      </div>

      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      {/* Tooltip follows cursor */}
      {hovered && (
        <span
          className="tooltip"
          style={{
            left: tooltipPos.x + 12 + "px",
            top: tooltipPos.y + 12 + "px",
          }}
        >
          View Project
        </span>
      )}
    </div>
  );
}

// ServicesSection marquee component
export default function ServicesSection() {
  const services = [
    {
      image: "/images/mobile1.jpg",
      title: "Mobile App Development",
      description:
        "Custom native & cross-platform apps built to scale your business.",
    },
    {
      image: "/images/mobile2.jpg",
      title: "Web Development",
      description:
        "Modern web applications designed for performance and scalability.",
    },
    {
      image: "/images/mobile3.jpg",
      title: "Backend & APIs",
      description:
        "Robust backend systems and APIs tailored to your business needs.",
    },
    {
      image: "/images/mobile4.jpg",
      title: "Mobile App Development",
      description:
        "Custom native & cross-platform apps built to scale your business.",
    },
    {
      image: "/images/mobile5.jpg",
      title: "Web Development",
      description:
        "Modern web applications designed for performance and scalability.",
    },
    {
      image: "/images/mobile6.jpg",
      title: "Backend & APIs",
      description:
        "Robust backend systems and APIs tailored to your business needs.",
    },
  ];

  return (
    <div className="services-carousel-container">
      {/* First wrapper */}
      <div className="services-card-wrapper" aria-hidden="true">
        {services.map((service, idx) => (
          <ServiceCard service={service} key={idx} />
        ))}
      </div>

      {/* Second wrapper */}
      <div className="services-card-wrapper">
        {services.map((service, idx) => (
          <ServiceCard service={service} key={idx} />
        ))}
      </div>
    </div>
  );
}