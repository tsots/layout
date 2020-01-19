import React, { Component } from 'react';

import DDesignLarge from '../img/digital-design-large.svg';
import DDesignSmall from '../img/digital-design-small.svg';

class DDesign extends Component {
  render() {
    return (
      <section className='Digital-Design'>
        <h3>DIGITAL DESIGN</h3>
        <img
          src={DDesignSmall}
          srcSet={`${DDesignSmall} 500w, ${DDesignLarge} 768w`}
        />
        <p>
          We create your online identity to perfectly reflect your company and
          the message you want to get through to your visitors. We give you the
          tools to be more effective online.
          <br />
          <br />
          Your digital identity includes not only your web-app, website, but
          also your social media assets, written content and audio-visual
          content.
        </p>
      </section>
    );
  }
}

export default DDesign;
