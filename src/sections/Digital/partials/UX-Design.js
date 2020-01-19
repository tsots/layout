import React, { Component } from 'react';

import UXDesignLarge from '../img/UX-design-large.svg';
import UXDesignSmall from '../img/UX-design-small.svg';

class UXDesign extends Component {
  render() {
    return (
      <section className='UX-Design'>
        <h3>UX-DESIGN</h3>
        <img
          src={UXDesignSmall}
          srcSet={`${UXDesignSmall} 500w, ${UXDesignLarge} 768w`}
        />
        <p>
          “UX” stands for “user experience.” A user’s experience of the app is
          determined by how they interact with it. Is the experience smooth and
          intuitive or clunky and confusing? Does navigating the app feel
          logical or does it feel arbitrary? Does interacting with the app give
          people the sense that they’re efficiently accomplishing the tasks they
          set out to achieve or does it feel like a struggle? User experience is
          determined by how easy or difficult it is to interact with the user
          interface elements that the UI designers have created.
        </p>
      </section>
    );
  }
}

export default UXDesign;
