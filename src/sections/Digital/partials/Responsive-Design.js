import React, { Component } from 'react';

import RWDesignLarge from '../img/responsive-web-large.svg';
import RWDesignSmall from '../img/responsive-web-small.svg';

class RWDesign extends Component {
  render() {
    return (
      <section className='Responsive-Web-Design'>
        <h3>RESPONSIVE WEB DESIGN</h3>
        <img
          src={RWDesignSmall}
          srcSet={`${RWDesignSmall} 500w, ${RWDesignLarge} 768w`}
        />
        <p>
          We carefully craft comprehensive digital experiences that function
          consistently and seamlessly across all browsers. From desktop screens
          to mobile phones and tablets, our websites scale and adapt smoothly to
          the ever-changing context of multi-device users and interactions.
        </p>
      </section>
    );
  }
}

export default RWDesign;
