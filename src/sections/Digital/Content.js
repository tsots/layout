import React, { Component } from 'react';

import DDesign from './partials/Digital-Design';
import Research from './partials/Research';
import RWDesign from './partials/Responsive-Design';
import SMedia from './partials/Social-Media';
import UIDesign from './partials/UI-Design';
import UXDesign from './partials/UX-Design';
import WDesign from './partials/Web-Design';

class Content extends Component {
  render() {
    return (
      <div className='Digital'>
        <DDesign />
        <Research />
        <RWDesign />
        <SMedia />
        <UIDesign />
        <UXDesign />
        <WDesign />
      </div>
    );
  }
}

export default Content;
