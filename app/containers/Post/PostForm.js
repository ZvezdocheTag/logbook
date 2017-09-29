import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { 
    makeSelectUsername, 
    makeSelectLogbooks,
    makeSelectLogbooksItem,
    selectTravels
} from '../Logbook/logic/selectors'

import { 
    createStructuredSelector 
} from 'reselect';

import TravelsList from '../Travel/TravelsList' 
import RaisedButton from 'material-ui/RaisedButton';


class PostForm extends Component {

    addTravelFUnc(e) {
        e.preventDefault();
        const reader = new FileReader();
        const { 
            addTravel, 
            selectorsLogbook,
            createTravel,
            travels,
            handleClose
        } = this.props;


        const { activeTravel } = travels


        reader.onloadend = () => {
            let data = {
                name: this.name.value,
                description: this.description.value,
                img: reader.result,
                coordinate: {
                    lat: this.lat.value,
                    lng: this.lng.value,
                  }
            }

            this.props.createPostOn(data, activeTravel.travel.id)
            handleClose()
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
            <div className="logbook-form__field logbook-form__field--lng">
                <label htmlFor="travel-name" className="logbook-form__label">Longtitude</label>
                <input 
                    name="travel-name" 
                    className="logbook-form__input"
                    ref={lng => this.lng = lng}
                    placeholder="52.50"
                 />
            </div>
            <div className="logbook-form__field logbook-form__field--lat">
                <label htmlFor="travel-name" className="logbook-form__label">Latitude</label>
                <input 
                    name="travel-name" 
                    className="logbook-form__input"
                    ref={lat => this.lat = lat}
                    placeholder="50.50"
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
  
  
  export default connect(mapStateToProps)(PostForm);
  


