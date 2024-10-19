import React from 'react';
import { FaCcPaypal, FaCcVisa, FaCcMastercard, FaDhl } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black">
      <div className="container-fluid">
        <div className="row d-flex flex-wrap justify-content-between my-5 py-5">
          <FooterSection title="Shortcuts" links={quickLinks} />
          <FooterSection title="About" links={aboutLinks} />
          <FooterSection title="Info" links={helpLinks} />
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
        Do you have any questions or suggestions? <a href="mailto:contact@sidequest.com" className="item-anchor">contact@sidequest.com</a>
      </p>
      <p>
        Need support? Give us a call. <a href="tel:+5690000000" className="item-anchor">+56 9 0303 4456</a>
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
            <FaDhl size={45}/>
          </div>
          <div className="payment-option">
            <span>Payment:</span>
            <FaCcPaypal size={35}/>
            <FaCcVisa  size={35}/>
            <FaCcMastercard size={35}/>
          </div>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <p>
            © 2024 Sidequest. Dev by <a href="https://gabaportafolio.vercel.app/" target="_blank">GABA</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const quickLinks = ['Home', 'About', 'Shop', 'Contact'];
const aboutLinks = ['How it works', 'Our packages', 'Promotions', 'Refer a friend'];
const helpLinks = ['Track Your Order', 'Returns + Exchanges', 'Shipping + Delivery', 'Contact Us', 'Find us easy', 'Faqs'];

export default Footer;
