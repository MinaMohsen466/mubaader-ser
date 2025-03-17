import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaSnapchat } from 'react-icons/fa'
import ahmadLogo from '../../../images/FooterImg/d13e2f8b2f974fd139301126b7b9a03a.png'
import mubaaderText from '../../../images/FooterImg/main.png'
import realtorLogo from '../../../images/FooterImg/mubaaderealtorlogo.png'

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logos">
            <div className="logo-group">
              <a href="https://ahmadalmutawa.com" target="_blank" rel="noopener noreferrer" className="logo-link">
                <img src={ahmadLogo} alt="Ahmad Al-Mutawa Logo" className="ahmad-logo" />
              </a>
              <a href="https://mubaader.com" target="_blank" rel="noopener noreferrer" className="logo-link">
                <img src={mubaaderText} alt="@mubaader" className="mubaader-text" />
              </a>
            <a href="https://www.mubaaderealtor.com/" target="_blank" rel="noopener noreferrer" className="realtor-link">
              <img src={realtorLogo} alt="Mubaader Realtor" className="realtor-logo" />
            </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>{language ? "Quick Links" : "روابط سريعة"}</h3>
              <ul>
                <li><Link to="/">{language ? "Home" : "الرئيسية"}</Link></li>
                <li><a href="#who-we-are">{language ? "Who We Are" : "من نحن"}</a></li>
                <li><a href="#what-we-do">{language ? "What We Do" : "ماذا نقدم"}</a></li>
                <li><Link to="/portfolio">{language ? "Portfolio" : "معرض أعمالنا"}</Link></li>
                <li><Link to="/our-events">{language ? "Our Events" : "فعالياتنا"}</Link></li>
                <li><Link to="/careers">{language ? "Career" : "الوظائف"}</Link></li>
                <li><Link to="/get-start">{language ? "Get Started" : "ابدأ الآن"}</Link></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>{language ? "Polices" : "خدماتنا"}</h3>
              <ul>
                <li><Link to="/terms">{language ? "Terms Of Use" : "الشروط والأحكام"}</Link></li>
                <li><Link to="/privacy">{language ? "Privacy Polices" : "سياسة الخصوصية"}</Link></li>
              </ul>
            </div>

            <div className="link-column contact">
              <h3>{language ? "Contact Us" : "تواصل معنا"}</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{language ? "Kuwait City, Kuwait" : "مدينة الكويت، الكويت"}</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+96596033960">+965 96033960</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info@mubaader.com">info@mubaader.com</a>
                </li>
              </ul>
              <div className="social-links">
                <a href="https://www.facebook.com/Mubaader" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com/mubaader" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.instagram.com/mubaader" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.youtube.com/user/mutawacg" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://www.snapchat.com/add/mutawacg" target="_blank" rel="noopener noreferrer" aria-label="Snapchat"><FaSnapchat /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {language ? 
              "© 2024 Mubaader Services. All rights reserved." : 
              "© 2024 مبادر للخدمات. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer