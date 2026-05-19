import { Button } from "./ui/Button";
import heroImage from "../assets/images/hero-img.png"

const HeroSection = () => {
  return (
    <section className="hero-banner">
      <div className="banner-wrapper">
        <div className="hero-flex-container">
          <div className="hero-main">
            <div className="hero-heading">
              <h1>Explore Our Solar System Through Data</h1>
            </div>
            <p className="hero-paragraph">
              Understand the planets not just by name, but by measurable facts.
              From size and mass to gravity and density, this page breaks down
              the solar system in a clear, data-driven way.
            </p>

            {/* This CTA button part of the task is for member 4 */}
            
          </div>
          <div className="hero-img">
            <img
              src={heroImage}
              width="644px"
              height="644px"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
