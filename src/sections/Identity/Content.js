import React, { Component } from 'react';

import BStrategy from './partials/Branding-Strategy';
import CBranding from './partials/Corporate-Branding';
import LogoDesign from './partials/Logo-Design';
import MAssets from './partials/Marketing-Assets';
import Messaging from './partials/Messaging';
import PBranding from './partials/Personal-Branding';

class Content extends Component {
  render() {
    return (
      <div className='Identity'>
        <BStrategy />
        <CBranding />
        <LogoDesign />
        <MAssets />
        <Messaging />
        <PBranding />
      </div>
    );
  }
}

export default Content;
