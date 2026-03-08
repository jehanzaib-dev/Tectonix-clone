"use client";
import Image from 'next/image';
import "@/styles/LogoBar.css";

export default function LogoBar() {
  // Replace these with your actual logo paths
  const logos = [
    "/images/logo1.jpg",
    "/images/logo2.jpg",
    "/images/logo3.jpg",
    "/images/logo4.jpg",
    "/images/logo5.jpg",
    "/images/logo6.jpg",
    "/images/logo1.jpg",
  ];

  return (
    <div className="carousel-container">
      {/* First wrapper */}
      <div className="card-wrapper" aria-hidden="true">
        {logos.map((logo, idx) => (
          <div className="card" key={idx}>
            <Image src={logo} alt={`Logo ${idx + 1}`} width={50} height={50}/>
          </div>
        ))}
      </div>

      {/* Second wrapper */}
      <div className="card-wrapper">
        {logos.map((logo, idx) => (
          <div className="card" key={idx}>
            <Image src={logo} alt={`Logo ${idx + 1}`} width={50} height={50}/>
          </div>
        ))}
      </div>
    </div>
  );
}