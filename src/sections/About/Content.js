import React, { Component } from 'react';

import Who from './partials/Who-We-Are';
import Services from './partials/Services';

class Content extends Component {
  render() {
    return (
      <div className='About-Content'>
        <Who />
        <Services />
      </div>
    );
  }
}

export default Content;
