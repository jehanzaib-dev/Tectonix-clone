import "@/styles/HeroSection.css";
import { FaChartBar } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="leftSection">
        <div className="leftMessage">
          <p className="messageContent">"Finally a team that really listens. No ghosting, no excuses, just consistent updates and a flawless launch"</p>
        </div>
        </div>
        <div className="middleSection">
        <div className="hero-text">
        <p>Accepting Partners for 2026 Projects</p>
          <h1>Build Your Vision with Total Confidence.</h1>
          <p>
            We don’t do cookie‑cutter templates. We engineer tailored Mobile & Web solutions for founders who demand excellence.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn"><FaChartBar size={30}/>Book a Free Engineering Audit</button>
            <button className="secondary-btn">Our Case Studies</button>
          </div>
          <div className="hero-stats">
            <div><span>50+</span> Successful Deployments</div>
            <div><span>100%</span> Delivery Rate</div>

          </div>
      <p>No commitment. Just a clear roadmap for your app</p>
    </div>

        </div>
    <div className="rightSection">
      <div className="rightMessage">
        <p className="messageContent">"We wasted months with cheap freelancers. Tectonix came in, fixed the spaghetti, code and saved our startup"</p>
        </div>
        </div>
      </div>
    </section>
  );
}