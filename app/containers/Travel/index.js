import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';


class Travel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
      console.log(this.props)
    return (
        <div>
            Travel
        </div>
    );
  }
}

export default Travel;

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
