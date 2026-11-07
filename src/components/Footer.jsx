
import { Link } from 'react-router-dom';
import {
  Camera,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="noir-footer">
      <div className="container">

        <div className="row gy-5">

          <div className="col-lg-4 col-md-6">
            <Link to="/" className="noir-footer-logo">
              NOIR<span>.</span>
            </Link>

            <p className="noir-footer-description">
              Bold flavors. Unforgettable bites.
              Discover a new level of burger experience
              made for those who crave something different.
            </p>

            <div className="noir-social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera size={19} />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span>f</span>
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <span>𝕏</span>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="noir-footer-heading">EXPLORE</h5>

            <ul className="noir-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="noir-footer-heading">CONTACT US</h5>

            <div className="noir-footer-info">
              <MapPin size={18} />
              <span>Lebanon</span>
            </div>

            <div className="noir-footer-info">
              <Phone size={18} />
              <span>Contact us for orders</span>
            </div>

            <div className="noir-footer-info">
              <Clock size={18} />
              <span>Open Daily</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="noir-footer-heading">STAY HUNGRY</h5>

            <p className="noir-footer-description">
              Good food. Good mood. Stay connected with NOIR.
            </p>

            <Link to="/menu" className="noir-footer-cta">
              EXPLORE MENU <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>

        <div className="noir-footer-bottom">
          <p>© {new Date().getFullYear()} NOIR Restaurant. All rights reserved.</p>
          <p>MADE WITH PASSION <span>♥</span></p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
