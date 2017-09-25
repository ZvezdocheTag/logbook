import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';


class Travels extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
            Travels
        </div>
    );
  }
}

export default Travels;

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
