import React, { Component } from 'react';

import CollageLarge from './img/collage-large-1.png';

class Content extends Component {
  render() {
    return (
      <div style={homeStyle}>
        <h1>
          <br />
          <span>Brand</span> <br />
          <span>Identity</span> <br />
          <span>Design</span>
        </h1>

        <img src={CollageLarge} alt='' />

        <div className='grid-container'>
          <div class='cell small-12'>
            <p>
              <span class='pre'>Identity Design solutions</span>
              <em>"Branding Strategies"</em> that are expertly crafted to
              surpass your expectations. Your Identity is the most important
              aspect of your
              <span class='idea'>idea</span> /
              <span class='business'>business</span> that make you visible to
              your target audience and we carve yours to endure the test of
              time....
            </p>
            <button
              className='button redirect'
              type='button'
              data-toggle='offCanvas'
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const homeStyle = {
  color: '#999',
  background: 'yellow',
  padding: '1rem 5rem'
};

export default Content;
