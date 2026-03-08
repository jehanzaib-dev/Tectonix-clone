"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "@/styles/EngagementModels.css";

export default function EngagementModels() {
  const router = useRouter();

  return (
    <section className="engagement-section">
      <div className="engagement-container">
        {/* Headings */}
        <div className="engagement-headings">
          <div className="section-label">Engagement Models</div>
          <h2>Strategic Investment for<br/>High-Performance Apps</h2>
          <p>
            Partner with a team that delivers. We offer flexible development
            models tailored to your roadmap, technical requirements, and
            long-term growth.
          </p>
        </div>

        {/* Wrapper with light grey background and rounded borders */}
        <div className="engagement-cards-wrapper">
          {/* Custom Roadmap Card */}
          <div className="engagement-card">
            <div className="card-content">
              <h3>Need a Custom Engineering Roadmap?</h3>
              <p>
                Unsure about the exact budget or tech stack? Let’s analyze your
                app's requirements and map out a precise, cost-effective
                development plan for your target market.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => router.push("/contactUS")}
            >
              Book a Call <span className="arrow">→</span>
            </button>
          </div>

          {/* Single Verified Partner Card */}
          <div className="partner-card-single">
            <div className="partner-heading">3X Faster</div>
            <p className="partner-message">
              "Working with Tectonix accelerated our app development threefold. Highly recommended!"
            </p>
            <div className="partner-info">
              <img src="/images/client2.jpg" alt="Jane Doe" className="partner-img" />
              <div className="partner-details">
                <span className="partner-name">Jane Doe</span>
                <span className="partner-post">CTO, FastTech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}