"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on scope and complexity. Most projects take between 4–12 weeks from planning to launch."
    },
    {
      question: "Do you work with startups or only established companies?",
      answer:
        "We work with both startups and established businesses. Our process supports founders at any stage and ensures tailored solutions for every client."
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our team specializes in modern technologies including React, Next.js, Node.js, cloud platforms, Docker, and scalable backend architectures to deliver high-quality software."
    },
    {
      question: "Can you improve an existing product?",
      answer:
        "Yes. We frequently help companies improve performance, scalability, and user experience of existing products, whether it's optimizing code, refactoring architecture, or redesigning interfaces."
    },
    {
      question: "How do we get started?",
      answer:
        "The simplest way is to book a strategy call with our team. We'll review your requirements, discuss timelines, and suggest the best approach for your project."
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We offer ongoing maintenance, performance monitoring, and feature updates to ensure your product continues to deliver value and stays ahead of the competition."
    },
    {
      question: "Can you work with remote teams?",
      answer:
        "Yes. Our workflows are designed to collaborate seamlessly with remote teams across different time zones, using structured communication and modern project management tools."
    },
    {
      question: "What if our project requirements change mid-way?",
      answer:
        "We follow an agile methodology so changes can be accommodated without compromising deadlines or quality. Flexibility is built into our process."
    }
  ];

  return (
    <section className="faqSection">
      <div className="faqGrid">

        {/* LEFT COLUMN */}
        <div className="faqLeft">

          {/* Sticky headings */}
          <div className="faqSticky">
            <div className="faqLabel"><span>FAQs</span></div>
            <h2 className="faqHeading">Clear Answers for <br /> Ambitious Founders</h2>
            <p className="faqDescription">
              Everything you need to know about our process, and how we deliver results
            </p>
          </div>

          {/* Card at bottom of left column */}
          <div className="faqCard">
            <h3>Still have specific questions?</h3>
            <p>
              Every project is unique. Let’s sit down, review your technical
              requirements, and map out exactly how we can bring your vision to life.
            </p>
            <Link href="/contactUs">
              <button className="faqButton">Book a Strategy Call</button>
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN - Accordion */}
        <div className="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className={`faqItem ${activeIndex === index ? "active" : ""}`}>
              <div className="faqQuestion" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <div className="faqIcon">{activeIndex === index ? "−" : "+"}</div>
              </div>
              {activeIndex === index && (
                <div className="faqAnswer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}