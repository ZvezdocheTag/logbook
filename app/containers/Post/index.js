import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import {
  fetchPost,
  fetchPostSuccess,
  fetchPostFailure,
} from './logic/actions'
import Post from './Post';
import { 
  makeSelectTravels,
  makeSelectActivePost
} from './logic/selectors'

class PostMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    
    const { fetchPost, params } = this.props;
    const { id, travelName } = params;
    
    fetchPost(id, travelName)
  } 

  render() {
    let { activePost } = this.props;

    console.log(this.props.activePost, "IN POST FETCH")
    return (
        <div>
          {activePost.post === null ? 
            <div></div> :
            <Post item={activePost.post}/>
          }
        </div>
    );
  }
}

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

const mapStateToProps = () => {
  return createStructuredSelector({
    travels: makeSelectTravels(),
    activePost: makeSelectActivePost()
  })
}
function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (id, travelId) => {
      dispatch(fetchPost(id, travelId))
          .payload.then(
              res => dispatch(fetchPostSuccess(res)),
              err => dispatch(fetchPostFailure(err))
          )
    },
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);
