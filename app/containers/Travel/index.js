import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import TravelCard from './TravelCard';
import List from 'components/List';
import styled from 'styled-components';
import { makeSelectTravels } from '../App/selectors'


const ListWrapper = styled.div`
  outline: none;
  border-bottom: 1px dotted #999;
`;

class Travel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { id } = this.props.params;
    const { travelsList } = this.props.travels;
    let travel;
    if(typeof travelsList.travel !== "undefined") {
        travel = travelsList
          .travel
          .filter(item => item.id === id)
    } else {
      console.log("UNDEFINED")
    }
    console.log(travel)
      
    return (
        <div>
            Travels
            <ListWrapper>
                <TravelCard item={typeof travel[0] !== "undefined" ? travel[0] : null}/>
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
export default connect(mapStateToProps)(Travel);

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
