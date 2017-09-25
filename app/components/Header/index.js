import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/somersby">
            <FormattedMessage {...messages.somersby} />
          </HeaderLink>
          <HeaderLink to="/logbook">
            <FormattedMessage {...messages.logbook} />
          </HeaderLink>
          <HeaderLink to="/travel/123">
            <FormattedMessage {...messages.travel} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
