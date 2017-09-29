import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import TravelCardItem from './TravelCard';
import List from 'components/List';
import TabsTravels from 'components/TabsTravels';
import styled from 'styled-components';
import { makeSelectTravels } from '../App/selectors'
import {
  createPost,
  fetchTravel,
  fetchTravelSuccess,
  fetchTravelFailure,
  createPostSuccess,
  createPostFailure,
} from './logic/actions'
import PostsList from 'containers/Post/PostsList'
import TravelMap from 'components/TravelMap'
import DialogTravel from 'components/Dialog'
import PostForm from 'containers/Post/PostForm'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const PostAddedButton = (props) => (
  <div>
    <FloatingActionButton secondary={true} style={style} onClick={props.handleOpen}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);
const ListWrapper = styled.div`
outline: none;
`;

function getValue(obj) {
  let coordinate = [];
  for(let key in obj) { 
    coordinate.push(+obj[key])
  }
  return coordinate
}

function splitCoordinateValue(obj) {
  let coordinate = [];
  for(let key in obj) {
    coordinate.push(getValue(obj[key]))
  }
  return coordinate;
}



class Travel extends React.Component { 
  constructor() {
    super();
    this.state = {
      zoom: 10,
      open: false,
    };
  }
  componentWillMount() {
    const { fetchTravel, params } = this.props;
    const { id } = params;
    
    fetchTravel(id)
  } 

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  addParentIdToPost = (arr) => {
    return arr.map(item => ({
      ...item, 
      travelId: this.props.params.id
    }))
  }

  render() {
    const { activeTravel } = this.props.travels;
    const { loading, travel } = activeTravel;

    let coords = [];
    if(travel !== null) {
      if(travel.posts.length) {
        coords = travel
        .posts
        .filter(item => item.coordinate !== "undefined")
        .map(item => {
          console.log(item.coordinate)
          return !item.coordinate.hasOwnProperty("1") ?
          getValue(item.coordinate):
          splitCoordinateValue(item.coordinate)
        }
          
          )
      }
    }


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    
    console.log(coords)
    return (
        <div>
            <ListWrapper>
              <TravelCardItem loading={loading} travel={travel}/>
            </ListWrapper>
            <div className="posts">
              <div className="posts__content">
                <TabsTravels
                  tabAtitle={`Travels list`} 
                  tabA={
                    <PostsList 
                      posts={travel !== null ? this.addParentIdToPost(travel.posts) : false
                    }
                    />
                  }
                  tabBtitle={'Travels map'} 
                  tabB={
                    <TravelMap 
                      coords={coords}
                      zoom={this.state.zoom}
                    />
                  }
                />   
              </div>
              <div className="posts__control">
                  <PostAddedButton handleOpen={this.handleOpen}/>
                  <DialogTravel
                    actions={actions}
                    open={this.state.open}
                    handleClose={this.handleClose}
                    inner={
                      <PostForm 
                      handleClose={this.handleClose} 
                      createPostOn={this.props.createPost}
                      />
                    }
                  />
              </div>
            </div>

        </div>
    );
  }
}


const mapStateToProps = () => {
  return createStructuredSelector({
    travels: makeSelectTravels()
  })
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTravel: (id) => {
      dispatch(fetchTravel(id))
          .payload.then(
              res => dispatch(fetchTravelSuccess(res)),
              err => dispatch(fetchTravelFailure(err))
          )
    },
    createPost: (data, id) => {
      dispatch(createPost(data, id))
          .payload.then(
              res => dispatch(createPostSuccess(res)),
              err => dispatch(createPostFailure(err))
          )
    },
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Travel);

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };
