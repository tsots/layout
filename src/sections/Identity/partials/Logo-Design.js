import React, { Component } from 'react';

import LogoDesignLarge from '../img/logo-design-large.svg';
import LogoDesignSmall from '../img/logo-design-small.svg';

class LogoDesign extends Component {
  render() {
    return (
      <section className='Logo-Design'>
        <h3>LOGO DESIGN</h3>
        <img src={LogoDesignLarge} alt='Logo Design Illustration' />
        <p>
          Logos are symbols made up of text and images that help identify brands
          we like. But they can be so much more!
          <br />
          <br />
          The logo we design are unique, memorable and communicate your business
          idea, vision, and personality in the most effective manner within the
          shortest amount of time.
        </p>
      </section>
    );
  }
}

export default LogoDesign;
