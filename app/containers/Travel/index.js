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
  fetchTravel,
  fetchTravelSuccess,
  fetchTravelFailure,
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
border-bottom: 1px dotted #999;
`;

function getValue(obj) {
  let coordinate = [];
  for(let key in obj) { 
    coordinate.push(obj[key])
  }
  return coordinate
}

class Travel extends React.Component { 
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 7,
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this)
  }
  componentWillMount() {
    const { id } = this.props.params;
    const { fetchTravel } = this.props;
    fetchTravel(id)
  } 


  handleOpen = () => {
    console.log("WORK")
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { activeTravel } = this.props.travels;
    const { loading, travel } = activeTravel;
    const position = [this.state.lat, this.state.lng];
    const position1 = [this.state.lat + .1, this.state.lng - .5];

    let coords = [];
    if(travel !== null) {
      if(travel.posts.length) {
        coords = travel
        .posts
        .filter(item => item.coordinate !== "undefined")
        .map(item => getValue(item.coordinate))
      }
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

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
                      posts={travel !== null ? travel.posts : false
                    }
                    />
                  }
                  tabBtitle={'Travels map'} 
                  tabB={
                    <TravelMap 
                      coords={coords}
                      zoom={this.state.zoom}
                      positionsLine={[position, position1]}
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
                      <PostForm />
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
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Travel);

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };
