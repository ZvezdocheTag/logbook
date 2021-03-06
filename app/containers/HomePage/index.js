/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  makeSelectTravels
 } from 'containers/App//selectors';
import H2 from 'components/H2';

import AtPrefix from './decor/AtPrefix';
import CenteredSection from './decor/CenteredSection';
import Section from './decor/Section';
import messages from './decor/messages';
import { 
  fetchTravels,
  fetchTravelsSuccess,
  fetchTravelsFailure
} from '../Travel/logic/actions';
import { changeUsername } from './logic/actions';
import { makeSelectUsername } from './logic/selectors';
import TravelsList from '../Travel/TravelsList'


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    const { fetchTravels } = this.props;
    fetchTravels("all")
  }

  render() {
    const { travels } = this.props;
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              Latest Travels
            </H2>
          </CenteredSection>
          <Section>
            <TravelsList travels={travels.travelsList}/>
          </Section>
        </div>
      </article>
    );
  }
}



HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    fetchTravels: (id) => {
      dispatch(fetchTravels(id))
      .request
      .then(
        res => dispatch(fetchTravelsSuccess(res)),
        err => dispatch(fetchTravelsFailure(err))
      )
    }
  };
}

const mapStateToProps = function() {
  // console.log(makeSelectRepos())
  return createStructuredSelector({
    travels: makeSelectTravels()
  })
};

// Wrap the component to inject dispatch and state into it
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
