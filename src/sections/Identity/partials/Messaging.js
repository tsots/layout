import React, { Component } from 'react';

import MessagingLarge from '../img/messaging-large.svg';
import MessagingSmall from '../img/messaging-small.svg';

class Messaging extends Component {
  render() {
    return (
      <section className='Messaging'>
        <h3>MESSAGING</h3>
        <img src={MessagingLarge} alt='' />
        <p>
          We research, identify a plethora of communication mediums to get your
          message through.
          <br />
          <br />
          We help you choose a platform, language, persona including voice
          appropriate for your target audience while articulating and
          accentuating your brand promise.
        </p>
      </section>
    );
  }
}

export default Messaging;
