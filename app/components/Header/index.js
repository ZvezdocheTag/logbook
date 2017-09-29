import React from 'react';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';

class Header extends React.Component { 
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            home
          </HeaderLink>
          <HeaderLink to="/logbook">
            logbook
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
