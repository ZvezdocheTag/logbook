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
  makeSelectLoading, 
  makeSelectError,
  makeSelectTravels
 } from 'containers/App//selectors';
import H2 from 'components/H2';
import MaterialCard from 'components/MaterialCard';
import List from 'components/List';

import AtPrefix from './decor/AtPrefix';
import CenteredSection from './decor/CenteredSection';
import Section from './decor/Section';
import messages from './decor/messages';
import { 
  fetchTravels,
  fetchTravelsSuccess,
  fetchTravelsFailure
} from '../App/actions';
import { changeUsername } from './logic/actions';
import { makeSelectUsername } from './logic/selectors';
import CircularProgress from 'material-ui/CircularProgress';

const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress size={60} thickness={7} />
  </div>
);
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    const { fetchTravels } = this.props;
    
        console.log(fetchTravels("all"))
  }
  componentDidMount() {


    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { travels } = this.props;
    let condition = travels.travelsList.travel;
    if(typeof condition === "undefined") {
      condition = false;
    } else {
      condition = travels.travelsList.travel.length
    }
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
              Latest posts
            </H2>
          </CenteredSection>
          <Section>
            {
              !travels.travelsList.loading && condition ?
                <List 
                component={MaterialCard} 
                items={travels.travelsList.travel}></List> :
                <CircularProgressExampleSimple />
            }
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
    username: makeSelectUsername(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    travels: makeSelectTravels()
  })
};

// Wrap the component to inject dispatch and state into it
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
