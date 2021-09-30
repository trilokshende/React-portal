import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/Footer.css'

function Footer() {

  return (

    <section className="footer navbar-dark bg-primary ">


      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            POLICY
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
            <br />
            Security
            <br />
            Privacy
          </section>
        </section>
        <section className="footer-info-center">
          <Link to="/customerHome/aboutUs">
            <section className="footer-info__email signup-color">
              ABOUT US
          </section>
          </Link>
          <section className="footer-info__terms">
            Address:  Nagpur
            <br />
            <br />
            <br />
            ©2021 Pizza Oven project, All rights reserved
            <br />
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            Follows Us On
          </section>
          <section className="footer-info__contact">
            Facebook
            <br />
            Instagram
          </section>
        </section>
      </section>

    </section>

  )

}

export default Footer;

