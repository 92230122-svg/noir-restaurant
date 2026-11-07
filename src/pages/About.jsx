
import { Link } from 'react-router-dom';
import {
  Flame,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function About() {
  return (
    <main className="noir-about">

      {/* ABOUT HERO */}
      <section className="noir-about-hero">
        <div className="container">
          <div className="noir-about-hero-content">

            <span className="noir-section-eyebrow">
              BEHIND THE FLAVOR
            </span>

            <h1>
              MORE THAN FOOD.
              <br />
              <span>IT'S AN ATTITUDE.</span>
            </h1>

            <p>
              We believe great food should never be ordinary.
              Welcome to NOIR, where passion meets flavor.
            </p>

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="noir-story-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="noir-story-image">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1000"
                  alt="Premium NOIR burger"
                  loading="lazy"
                />

                <div className="noir-story-image-label">
                  <strong>NOIR.</strong>
                  <span>EST. WITH PASSION</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="noir-story-content">

                <SectionTitle
                  centered={false}
                  eyebrow="OUR STORY"
                  title="BORN FROM"
                  highlight="PASSION."
                />

                <p>
                  NOIR was created around one simple belief:
                  fast food can be an extraordinary experience.
                </p>

                <p>
                  We bring together bold flavors, carefully selected
                  ingredients, and a passion for creating food that
                  leaves a lasting impression.
                </p>

                <p>
                  From the first bite to the last, our goal is to
                  make every moment unforgettable.
                </p>

                <Link to="/menu" className="noir-primary-button">
                  DISCOVER OUR MENU <ArrowRight size={18} />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="noir-values-section">
        <div className="container">

          <SectionTitle
            eyebrow="WHAT MAKES US DIFFERENT"
            title="THE NOIR"
            highlight="PROMISE"
            description="Three things that define everything we do."
          />

          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="noir-value-card">
                <div className="noir-value-icon">
                  <Flame size={30} />
                </div>

                <h3>BOLD FLAVORS</h3>

                <p>
                  Distinctive combinations and unforgettable taste
                  in every single bite.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="noir-value-card">
                <div className="noir-value-icon">
                  <Award size={30} />
                </div>

                <h3>QUALITY FIRST</h3>

                <p>
                  A commitment to carefully selected ingredients
                  and quality preparation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="noir-value-card">
                <div className="noir-value-icon">
                  <Heart size={30} />
                </div>

                <h3>MADE WITH PASSION</h3>

                <p>
                  Every detail matters because your experience
                  deserves something special.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="noir-about-cta">
        <div className="container text-center">

          <Sparkles size={30} />

          <h2>
            READY FOR YOUR
            <br />
            <span>NOIR MOMENT?</span>
          </h2>

          <Link to="/menu" className="noir-primary-button">
            EXPLORE OUR MENU <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;
