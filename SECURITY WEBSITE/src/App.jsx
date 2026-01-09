import React, { useEffect, useState } from 'react'

export default function App() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [active, setActive] = useState('home')
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setModalOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const requestQuote = () => alert('Request a Quote clicked!')
  const bookAssessment = () => alert('Security assessment booking coming soon!')
  const bookCall = () => alert('Book a Call clicked!')

  const services = [
    ['Manned Guarding', 'Professional, well-trained security personnel providing 24/7 protection.'],
    ['Residential & Estate Security', 'Reliable security solutions for private homes and gated estates.'],
    ['Event Security Management', 'Crowd control, access management, and on-site security for events.'],
    ['CCTV & Surveillance Support', 'Monitoring and basic management of security cameras.']
  ]

  return (
    <div className="app">
      <nav>
        <div className="nav-inner">
          <a href="#home" className={active==='home'?'active':''} onClick={() => setActive('home')}>Home</a>
          <a href="#about" className={active==='about'?'active':''} onClick={() => setActive('about')}>About Us</a>
          <a href="#services" className={active==='services'?'active':''} onClick={() => setActive('services')}>Services</a>
          <a href="#faqs" className={active==='faqs'?'active':''} onClick={() => setActive('faqs')}>FAQs</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Dependable Security<br/>For Places & People That Matter.</h1>
          <p>Delivering dependable security services through disciplined personnel, proven systems, and a commitment to protecting what matters most — every day, around the clock.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={requestQuote}>Request a Quote</button>
            <button className="btn btn-outline" onClick={bookAssessment}>Book a Security Assessment</button>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services-container">
          <div className="services-text">
            <button className="serve">* Our Services</button>
            <h2>Services we<br/>provide</h2>
            <p>At Lion of Judah Security Company, we deliver professional security solutions for homes, businesses, and events.</p>
            <button className="btn btn-primary" onClick={bookAssessment}>Book a Security Assessment</button>
          </div>

          <div className="services-list">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="icon">🛡️</div>
                <div>
                  <h4>{s[0]}</h4>
                  <p>{s[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="faqs">
        <div className="faqs-inner">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How do I request a quote?</summary>
            <p>Click the "Request a Quote" button or use the contact form to send us the basics. A member of our team will contact you within 24–48 hours.</p>
          </details>
          <details>
            <summary>Do you provide event security?</summary>
            <p>Yes. We provide comprehensive event security services for concerts, conferences, religious gatherings and private functions.</p>
          </details>
          <details>
            <summary>Are your guards licensed and trained?</summary>
            <p>All guards we deploy are licensed, fully vetted and undergo continuous training.</p>
          </details>
        </div>
      </section>

      <section id="about" className="standout">
        <div className="content">
          <h1>Why We Stand Out</h1>
          <p className="description">Reliable, professional, and trusted security solutions designed to put your safety first.</p>
          <ul className="features">
            <li>Experienced Personnel</li>
            <li>24/7 Protection</li>
            <li>Advanced Surveillance</li>
            <li>Tailored Solutions</li>
            <li>Integrity &amp; Trust</li>
          </ul>
        </div>
        <div className="image-wrapper">
          <img src="dd1c89eebb569ac8070651ee8ffce9e03b7193dd (1).png" alt="Security professionals" />
        </div>
      </section>

      <div className="cta-strip"><span>✦ BOOK A CALL   ✦ BOOK A CALL   ✦ BOOK A CALL ✦</span></div>

      <section className="reviews">
        <header className="reviews-header">
          <h2>Protection That Speaks for Itself</h2>
          <p>Real feedback from clients who trust us with their safety and assets.</p>
        </header>
        <div className="reviews-grid">
          <div className="card card-large">
            <h3><span className="big">24/7</span> Coverage</h3>
            <p className="subtitle">Reliable protection day and night</p>
            <blockquote>“Lion of Judah Security has been consistent, professional, and dependable."</blockquote>
            <div className="author"><img src="avatar.jpg" alt=""/><div><strong>Vi bukola</strong><span>Security Officer , Pepsi Nigeria</span></div></div>
          </div>
          <div className="right-column">
            <div className="card">
              <h4><strong>QUICK</strong> Response</h4>
              <blockquote>“Their response time is impressive."</blockquote>
              <div className="author"><img src="avatar.jpg" alt=""/><div><strong>Vi bukola</strong><span>Security Officer , Pepsi Nigeria</span></div></div>
            </div>
            <div className="card-row">
              <div className="card outline"><blockquote>“Their patrol team is proactive and well trained."</blockquote></div>
              <div className="card green"><blockquote>“Their patrol team is proactive and well trained."</blockquote></div>
            </div>
          </div>
        </div>

        <button className="view-btn" onClick={() => setModalOpen(true)}>View all reviews ↗</button>

        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setModalOpen(false)}>✕</button>
              <h3>All Reviews</h3>
              <div className="modal-reviews">
                <div className="review"><div className="stars">★★★★★</div><p>Professional team with excellent response time.</p><span>Vi bukola · Pepsi Nigeria</span></div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="cta-section">
        <div className="cta-left">
          <h2>Your Safety Starts With a<br/>Trusted Partner.</h2>
          <p>We provide dependable security solutions designed to give you confidence, peace of mind, and reliable protection.</p>
          <button className="btns" onClick={requestQuote}>Request a Quote</button>
        </div>
        <div className="cta-right">
          <h2>Need to Talk To<br/>A Security Expert?</h2>
          <button className="btn" onClick={bookCall}>Book a call now</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="brand"><img src="Logo.png" alt="Lion Logo"/></div>
          <div className="headline"><h2>Dependable <span>Security</span><br/>For Places & People That matter.</h2></div>
        </div>
        <div className="divider" />
        <div className="footer-middle">
          <div className="links"><h4>Product</h4><a href="#">Features</a></div>
          <div className="links"><h4>Company</h4><a href="#">About</a></div>
          <div className="links"><h4>Support</h4><a href="#">Help center</a></div>
          <div className="watermark">LION<br/>OF<br/>JUDAH</div>
        </div>
        <div className="divider" />
        <div className="footer-bottom">
          <p>Copyright © {year} BRIX Templates | All Rights Reserved</p>
          <div className="socials"><a href="#"><i className="fab fa-facebook-f"></i></a></div>
        </div>
      </footer>
    </div>
  )
}
