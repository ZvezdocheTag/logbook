
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogbookForm from './LogbookForm'
import AppBar from 'material-ui/AppBar';


const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

  
class Logbook extends Component {
  render() {
    return (
      <div>
          {/* <AppBarExampleIcon /> */}
          <LogbookForm />

      </div>
    )
  }
}


// LocaleToggle.propTypes = {
//   onLocaleToggle: React.PropTypes.func,
//   locale: React.PropTypes.string,
// };


export default Logbook;