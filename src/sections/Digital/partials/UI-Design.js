import React, { Component } from 'react';

import UIDesignLarge from '../img/UI-design-large.svg';
import UIDesignSmall from '../img/UI-design-small.svg';

class UIDesign extends Component {
  render() {
    return (
      <section className='UI-Design'>
        <h3>UI-DESIGN</h3>
        <img
          src={UIDesignSmall}
          srcSet={`${UIDesignSmall} 500w, ${UIDesignLarge} 768w`}
        />
        <p>
          The “UI” in UI design stands for “user interface.” The user interface
          is the graphical layout of an application. It consists of the buttons
          users click on, the text they read, the images, sliders, text entry
          fields, and all the rest of the items the user interacts with. This
          includes screen layout, transitions, interface animations and every
          single micro-interaction. Any sort of visual element, interaction, or
          animation must all be designed.
        </p>
      </section>
    );
  }
}

export default UIDesign;
