import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black">
      <div className="container-fluid">
        <div className="row d-flex flex-wrap justify-content-between my-5 py-5">
          <FooterSection title="Quick Links" links={quickLinks} />
          <FooterSection title="About" links={aboutLinks} />
          <FooterSection title="Help & Info" links={helpLinks} />
          <ContactSection />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

const FooterSection: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div className="col-md-2 col-sm-6">
    <div className="footer-menu">
      <h5 className="widget-title mb-4">{title}</h5>
      <ul className="menu-list list-unstyled fs-6">
        {links.map((link, index) => (
          <li key={index} className="menu-item">
            <a href="#" className="item-anchor">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ContactSection: React.FC = () => (
  <div className="col-md-3 col-sm-6">
    <div className="footer-menu">
      <h5 className="widget-title mb-4">Contact Us</h5>
      <p>
        Do you have any questions or suggestions? <a href="mailto:contact@yourcompany.com" className="item-anchor">contact@yourcompany.com</a>
      </p>
      <p>
        Need support? Give us a call. <a href="tel:+43 720 11 52 78" className="item-anchor">+43 720 11 52 78</a>
      </p>
    </div>
  </div>
);

const FooterBottom: React.FC = () => (
  <div className="border-top py-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex flex-wrap">
          <div className="shipping">
            <span>We ship with:</span>
            <img src="images/arct-icon.png" alt="icon" />
            <img src="images/dhl-logo.png" alt="icon" />
          </div>
          <div className="payment-option">
            <span>Payment Option:</span>
            <img src="images/visa-card.png" alt="card" />
            <img src="images/paypal-card.png" alt="card" />
            <img src="images/master-card.png" alt="card" />
          </div>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <p>
            © Copyright 2023 ElectroStore. All rights reserved. HTML Template by <a href="https://templatesjungle.com" target="_blank">TemplatesJungle</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const quickLinks = ['Home', 'About', 'Services', 'Single item', 'Contact'];
const aboutLinks = ['How it works', 'Our packages', 'Promotions', 'Refer a friend'];
const helpLinks = ['Track Your Order', 'Returns + Exchanges', 'Shipping + Delivery', 'Contact Us', 'Find us easy', 'Faqs'];

export default Footer;
