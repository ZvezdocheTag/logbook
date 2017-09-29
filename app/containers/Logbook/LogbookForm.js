import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { 
    createTravel,
    createTravelSuccess,
    createTravelFailure
} from '../Travel/logic/actions'
import { connect } from 'react-redux';

import { 
    makeSelectUsername, 
    makeSelectLogbooks,
    makeSelectLogbooksItem,
    selectTravels
} from './logic/selectors'

import { 
    createStructuredSelector 
} from 'reselect';

import TravelsList from '../Travel/TravelsList' 
import RaisedButton from 'material-ui/RaisedButton';

class LogbookForm extends Component {
    componentWillMount() {
        let { fetchTravels, dispatch } = this.props;
   
    }

    addTravelFUnc(e) {
        e.preventDefault();
        const reader = new FileReader();
        const {  
            selectorsLogbook,
            createTravel
        } = this.props;

        reader.onloadend = () => {
            let data = {
                name: this.name.value,
                description: this.description.value,
                img: reader.result,
                posts: []
            }
            createTravel(data)
        }

        reader.readAsDataURL(this.img.files[0])
    }

  render() {
    let { logbooks, travels } = this.props;
    return (
        <div className="box">
           <form action="" className="logbook-form">
            <div className="logbook-form__field logbook-form__field--title">
                <label htmlFor="travel-name" className="logbook-form__label">Title</label>
                <input 
                    name="travel-name" 
                    
                    className="logbook-form__input"
                    ref={name => this.name = name}
                 />
            </div>
            <div className="logbook-form__field logbook-form__field--description">
                <label htmlFor="travel-description" className="logbook-form__label">Description</label>
                <textarea 
                name="travel-description" 
                
                className="logbook-form__input" 
                ref={description => this.description = description}
                />
            </div>
            <div className="logbook-form__field logbook-form__field--picture">
                <input type="file" name="" id="" ref={img => this.img = img}/>
                <div className="logbook-form__images">
                    <img src="" alt=""/>
                </div>
            </div>
            <RaisedButton 
                className="logbook-form__submit" 
                label="Submit" 
                primary={true} 
                onClick={this.addTravelFUnc.bind(this)}
            >
            </RaisedButton >

        </form>
             <TravelsList travels={travels.travelsList}/> 
        </div>
    )
  }
}

function mapStateToProps(state) {
    return createStructuredSelector({
      logbooks: makeSelectLogbooks(),
      travels: selectTravels()
    })
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      createTravel: (id) => {
        dispatch(createTravel(id))
            .payload.then(
                res => dispatch(createTravelSuccess(res)),
                err => dispatch(createTravelFailure(err))
            )
      },
      dispatch,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogbookForm);
  


