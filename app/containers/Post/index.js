import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';


class Post extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    //   console.log(this.props)
    return (
        <div>
            <h2>{`da`}</h2>
        </div>
    );
  }
}

export default Post;

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
