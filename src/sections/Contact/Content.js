import React, { Component } from 'react';

class Content extends Component {
  render() {
    return <div style={homeStyle}>Hello from Contact!</div>;
  }
}

const homeStyle = {
  color: '#999',
  background: 'purple',
  padding: '1rem 5rem'
};

export default Content;
