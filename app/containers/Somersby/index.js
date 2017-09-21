
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogbookForm from './LogbookForm'
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

  
export default class Somersby extends Component {
  render() {
    return (
      <div>
          <AppBarExampleIcon />
          <LogbookForm />
      </div>
    )
  }
}
