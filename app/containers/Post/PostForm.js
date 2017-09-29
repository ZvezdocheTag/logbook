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
import Toggle from 'material-ui/Toggle';
import { 
    createStructuredSelector 
} from 'reselect';

import TravelsList from '../Travel/TravelsList' 
import RaisedButton from 'material-ui/RaisedButton';

const CoordsField = (props) => {

    return (
        <div>
            <div className="logbook-form__field logbook-form__field--lng">
                <label htmlFor="travel-lng" className="logbook-form__label">Longtitude</label>
                <input 
                    name={`travel-lng-${props.keya}`}
                    className="logbook-form__input"
                    ref={lng => this.lng = lng}
                    placeholder="52.50"
                    onChange={props.change}
                 />
            </div>
            <div className="logbook-form__field logbook-form__field--lat">
                <label htmlFor="travel-lat" className="logbook-form__label">Latitude</label>
                <input 
                    name={`travel-lat-${props.keya}`}
                    className="logbook-form__input"
                    ref={lat => this.lat = lat}
                    placeholder="50.50"
                    onChange={props.change}
                 />
            </div>
        </div>
    )
}

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            coordinate: {
                '1': {},
                '2': {}
            },
            active: false,
        }
    }



    getCoordinate(e) {
        let condition = e.target.name[e.target.name.length - 1];
        // console.log(condition)
        
        this.setState({
            [`coordinate`]: {
                ...this.state.coordinate,
                [condition]: {
                    ...this.state.coordinate[condition],
                    [e.target.name]: +e.target.value
                }
            }
        })
    }

    toggleCoordinateField = () => {
        this.setState({
            active: !this.state.active,
        })
    }

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
        let { coordinate, active } = this.state;

        reader.onloadend = () => {
            let data = {
                name: this.name.value,
                description: this.description.value,
                img: reader.result,
                coordinate: !active ? coordinate['1'] : coordinate
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
           <form action="" className="logbook-form logbook-form--in-modal">
            <div className="logbook-form__field logbook-form__field--title">
                <label htmlFor="travel-name" className="logbook-form__label">Title</label>
                <input 
                    name="travel-name" 
                    className="logbook-form__input"
                    ref={name => this.name = name}
                 />
            </div>
            <CoordsField change={this.getCoordinate.bind(this)} keya={1}/>
                <Toggle
                style={{
                    width: '45%',
                    marginBottom: '5px'
                    }}
                label="Add one more coordinate"
                onToggle={this.toggleCoordinateField}
                />
            <div className={`logbook-form__field ${this.state.active ? "" : "hide"}`} >
                <CoordsField change={this.getCoordinate.bind(this)} keya={2}/>
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
  


