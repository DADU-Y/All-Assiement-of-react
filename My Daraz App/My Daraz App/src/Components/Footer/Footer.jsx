import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} style={{marginBlockStart:"100px"}}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h4>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Daraz</h4>
          <ul>
            <li>About Us</li>
            <li>Digital Payments</li>
            <li>Daraz Blog</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Earn With Daraz</h4>
          <ul>
            <li>Sell on Daraz</li>
            <li>Daraz University</li>
            <li>Affiliate Program</li>
            <li>Partner Program</li>
          </ul>
        </div>



        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#">Facebook</a>
            <br/>
            <br/>
            <a href="#">Twwetire</a>
            <br/>
            <br/>
            <a href="#">iNsatramm</a>
            <br/>
            <br/>
            <a href="#">Youtube</a>
            <br/>
            <br/>
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Daraz Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
