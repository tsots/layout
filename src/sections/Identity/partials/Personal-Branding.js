import React, { Component } from 'react';

import PBrandingLarge from '../img/personal-branding-large.svg';
import PBrandingSmall from '../img/personal-branding-small.svg';

class PBranding extends Component {
  render() {
    return (
      <section className='Personal-Branding'>
        <h3>PERSONAL BRANDING</h3>
        <img src={PBrandingLarge} alt='' />
        <p>
          We work to promote you by highlighting your skills, personality and
          tell your story using unspoken language, words.
          <br />
          <br />
          We work to differentiate you from other people, portray an image that
          people should see of you while being memorable.
        </p>
      </section>
    );
  }
}

export default PBranding;
