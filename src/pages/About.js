import React, { Component } from 'react';
import Content from '../sections/About/Content';

class Who extends Component {
  render() {
    return (
      <div className='About'>
        <img
          className='About__Tsotetsi'
          src={require('../img/Tsotetsi-Mosala.png')}
        />
        {/* <div className='About__Tsotetsi' /> */}
        <Content />
      </div>
    );
  }
}

export default Who;
