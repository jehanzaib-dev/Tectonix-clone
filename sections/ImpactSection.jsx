"use client";
import "@/styles/ImpactSection.css";

export default function ImpactSection() {
  const impactCards = [
    {
      main: "500+",
      sub: "Projects Delivered",
      description:
        "We have successfully delivered over 500 projects across multiple industries with excellence and precision.",
    },
    {
      main: "300+",
      sub: "Happy Clients",
      description:
        "Our client-centric approach has resulted in a high rate of satisfaction and long-term partnerships.",
    },
    {
      main: "10 Years",
      sub: "Industry Experience",
      description:
        "A decade of experience has given us the knowledge and skills to tackle complex challenges effectively.",
    },
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <p className="impact-heading">Impact</p>
        <h2 className="impact-main-heading">
          The Results We Achieve for Our Clients
        </h2>

        <div className="impact-cards">
          {impactCards.map((card, idx) => (
            <div className="impact-card" key={idx}>
              <h3 className="impact-card-main">{card.main}</h3>
              <h4 className="impact-card-sub">{card.sub}</h4>
              <p className="impact-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}