import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Home from './pages/Home';
import About from './pages/About';
import Identity from './pages/Identity';
import Digital from './pages/Digital';
import Contact from './pages/Contact';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App' style={{ height: '100%' }}>
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/About'>
                <About />
              </Route>
              <Route path='/Identity'>
                <Identity />
              </Route>
              <Route path='/Digital'>
                <Digital />
              </Route>
              <Route path='/Contact'>
                <Contact />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
