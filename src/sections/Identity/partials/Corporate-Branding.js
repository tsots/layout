import React, { Component } from 'react';

import CBrandingLarge from '../img/corporate-branding-large.svg';
import CBrandingSmall from '../img/corporate-branding-small.svg';

class CBranding extends Component {
  render() {
    return (
      <section className='Corporate-Branding'>
        <h3>CORPORATE BRANDING</h3>
        <img
          src={CBrandingSmall}
          srcSet={`${CBrandingSmall} 300w, ${CBrandingLarge} 768w`}
          alt='Corporate Branding Illustration'
        />
        <p>
          BLet us design an Identity for your business using awesome and unique
          combinations of color, graphics and typography in order to design
          elements that we can use across all media types.
          <br />
          <br />
          Media types include websites, marketing assets, social media profiles
          that will serve as an advocate for your brand.
        </p>
      </section>
    );
  }
}

export default CBranding;
