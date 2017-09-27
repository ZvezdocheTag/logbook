import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import TravelCardItem from './TravelCard';
import List from 'components/List';
import styled from 'styled-components';
import { makeSelectTravels } from '../App/selectors'
import {
  fetchTravel,
  fetchTravelSuccess,
  fetchTravelFailure,
} from './logic/actions'

const ListWrapper = styled.div`
  outline: none;
  border-bottom: 1px dotted #999;
`;


class Travel extends React.Component { 
  componentWillMount() {
    const { id } = this.props.params;
    const { fetchTravel } = this.props;
    fetchTravel(id)
  } 
  
  render() {
    const { activeTravel } = this.props.travels;
    const { loading, travel } = activeTravel;

    return (
        <div>
            <ListWrapper>
              <TravelCardItem loading={loading} travel={travel}/>
            </ListWrapper>
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

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
