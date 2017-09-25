import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import TravelCard from './TravelCard';
import List from 'components/List';
import styled from 'styled-components';

const ListWrapper = styled.div`
  outline: none;
  border-bottom: 1px dotted #999;
`;

class Logbook extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
            Travels
            <ListWrapper>
                <List component={TravelCard}></List>
            </ListWrapper>
            
            
        </div>
    );
  }
}

export default Logbook;

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentUser: React.PropTypes.string,
// };

// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser(),
// }))(RepoListItem);
