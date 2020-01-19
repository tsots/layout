import React, { Component } from 'react';

import ResearchLarge from '../img/research-large.svg';
import ResearchSmall from '../img/research-small.svg';

class Research extends Component {
  render() {
    return (
      <section className='Research'>
        <h3>RESEARCH</h3>
        <img
          src={ResearchSmall}
          srcSet={`${ResearchSmall} 500w, ${ResearchLarge} 768w`}
        />
        <p>
          We are devoted strategists and believe that thoughtful information
          architecture lays the groundwork for an intuitive, efficient, and
          effective website. We perform a thorough audit of existing and
          anticipated content, which we use to map out the most logical and
          organized structure for your site.
        </p>
      </section>
    );
  }
}

export default Research;
