"use client";
import "@/styles/OurExpertiseSection.css";

export default function ExpertiseSection() {
  return (
    <section className="expertise-section">

      <div className="expertise-header">
        <p className="expertise-tag">OUR EXPERTISE</p>
        <h2 className="expertise-title">
          Technology & Product Expertise
        </h2>
      </div>

      <div className="expertise-grid">

        <div className="expertise-card large">
          <img src="/images/mobile1.jpg" alt="Image" width={150} height={150} />
          <h3>Mobile App Architecture</h3>
          <h4>iOS & Android Solutions</h4>
          <p>
            Scalable mobile applications with seamless performance,
            optimized for modern mobile ecosystems.
          </p>
        </div>

        <div className="expertise-card">
          <h3>Web Platforms</h3>
          <h4>Modern Web Applications</h4>
          <p>
            High-performance websites and SaaS platforms built
            for speed and scalability.
          </p>
        </div>

        <div className="expertise-card">
          <h3>UI/UX Systems</h3>
          <h4>Design & Experience</h4>
          <p>
            Design systems and user experiences focused on
            usability and engagement.
          </p>
        </div>

        <div className="expertise-card wide">
          <h3>MVP Development</h3>
          <h4>Startup Launch</h4>
          <p>
            Rapid product development to validate ideas and launch
            startups faster.
          </p>
        </div>

        <div className="expertise-card">
          <h3>Cloud Infrastructure</h3>
          <h4>Secure & Scalable</h4>
          <p>
            Cloud-native architectures designed for reliability
            and growth.
          </p>
        </div>

        <div className="expertise-card">
          <h3>Enterprise Systems</h3>
          <h4>Business Platforms</h4>
          <p>
            Enterprise-grade platforms that streamline
            operations and workflows.
          </p>
        </div>

      </div>

    </section>
  );
}