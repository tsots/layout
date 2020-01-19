import React, { Component } from 'react';

import MAssetsLarge from '../img/marketing-assets-large.svg';
import MAssetsSmall from '../img/marketing-assets-small.svg';

class MAssets extends Component {
  render() {
    return (
      <section className='Marketing-Assets'>
        <h3>MARKETING ASSETS</h3>
        <img src={MAssetsLarge} alt='' />
        <p>
          Marketing assets are a collection of media, content as well as
          information that is compiled to support marketing and sales
          activities. A few common types of marketing assets but not limited to.
          <ul>
            <li>Web Content</li>
            <li>Social-Media Profiles</li>
            <li>Business Cards</li>
            <li>Brochures</li>
            <li>Flyers</li>
            ..........
          </ul>
        </p>
      </section>
    );
  }
}

export default MAssets;
