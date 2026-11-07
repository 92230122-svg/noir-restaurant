
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Camera,
  MessageCircle,
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';

const WHATSAPP_NUMBER = '96170228786';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
*NOIR RESTAURANT - NEW MESSAGE*

*CUSTOMER INFORMATION*
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

*MESSAGE*
${formData.message}

Thank you for contacting NOIR!
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="noir-contact-page">

      {/* CONTACT HERO */}
      <section className="noir-contact-hero">
        <div className="container">

          <span className="noir-section-eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1>
            LET'S <span>TALK.</span>
          </h1>

          <p>
            Questions, feedback, or just want to say hello?
            We're always happy to hear from you.
          </p>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="noir-contact-section">
        <div className="container">

          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="CONNECT WITH"
            highlight="NOIR"
            description="Your experience matters. Reach out to us anytime."
          />

          <div className="row g-5 mt-4">

            {/* CONTACT INFORMATION */}
            <div className="col-lg-5">

              <div className="noir-contact-info">

                <h2>CONTACT INFORMATION</h2>

                <p className="noir-contact-intro">
                  Have a question about our menu or your order?
                  Contact our team and we'll be happy to help.
                </p>

                <div className="noir-contact-info-item">
                  <div className="noir-contact-icon">
                    <Phone size={22} />
                  </div>

                  <div>
                    <span>PHONE / WHATSAPP</span>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      +961 70 228 786
                    </a>
                  </div>
                </div>

                <div className="noir-contact-info-item">
                  <div className="noir-contact-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <span>OUR LOCATION</span>
                    <p>Lebanon</p>
                  </div>
                </div>

                <div className="noir-contact-info-item">
                  <div className="noir-contact-icon">
                    <Clock size={22} />
                  </div>

                  <div>
                    <span>OPENING HOURS</span>
                    <p>Open Daily</p>
                  </div>
                </div>

                <div className="noir-contact-info-item">
                  <div className="noir-contact-icon">
                    <Mail size={22} />
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <p>Contact us through WhatsApp</p>
                  </div>
                </div>

                <div className="noir-contact-social">
                  <span>FOLLOW NOIR</span>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Camera size={20} />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>

              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="col-lg-7">

              <div className="noir-contact-form-wrapper">

                <h2>SEND US A MESSAGE</h2>

                <p>
                  Fill in the form below and we'll be happy to hear from you.
                </p>

                <form
                  className="noir-contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="noir-form-group">
                    <label htmlFor="contact-name">
                      YOUR NAME *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="noir-form-group">
                    <label htmlFor="contact-email">
                      EMAIL ADDRESS *
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="noir-form-group">
                    <label htmlFor="contact-subject">
                      SUBJECT *
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="noir-form-group">
                    <label htmlFor="contact-message">
                      YOUR MESSAGE *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="noir-contact-submit"
                  >
                    SEND MESSAGE
                    <Send size={18} />
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="noir-contact-banner">
        <div className="container text-center">

          <h2>
            GOOD FOOD.
            <br />
            <span>GOOD CONNECTIONS.</span>
          </h2>

          <p>
            Thank you for being part of the NOIR experience.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="noir-primary-button"
          >
            CHAT WITH US
            <MessageCircle size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}

export default Contact;
