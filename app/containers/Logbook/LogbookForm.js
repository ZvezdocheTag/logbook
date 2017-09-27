import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { 
    addTravel, 
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




const LogbookItem = ({ img, title, text }) => (
    <div className="logbook-item">
        <div className="logbook-item__img">
            <img src={img} alt=""/>
        </div>
        <div className="logbook-item__title">
            {title}
        </div>
        <div className="logbook-item__description">
            {text}
        </div>
    </div>
)

const styl = {
    border: '1px solid red'
}

class UserLogbook extends Component {
    render() {
        return (
            <div className="logbook-list">
                <LogbookItem />
            </div>
        )
    }
}
class LogbookForm extends Component {
    componentWillMount() {
        let { fetchTravels, dispatch } = this.props;
   
    }

    addTravelFUnc(e) {
        e.preventDefault();
        const reader = new FileReader();
        const { 
            addTravel, 
            selectorsLogbook,
            createTravel
        } = this.props;

        reader.onloadend = () => {
            let data = {
                name: this.name.value,
                description: this.description.value,
                img: reader.result
            }
            createTravel(data)
        }

        reader.readAsDataURL(this.img.files[0])
    }

  render() {
    let { logbooks, travels } = this.props;
    console.log(this.props, "IN")
    return (
        <div className="box">
           <form action="" className="logbook-form">
            <div className="logbook-form__field logbook-form__field--title">
                <label htmlFor="travel-name" className="logbook-form__label">Title</label>
                <input 
                    name="travel-name" 
                    style={styl} 
                    className="logbook-form__input"
                    ref={name => this.name = name}
                 />
            </div>
            <div className="logbook-form__field logbook-form__field--description">
                <label htmlFor="travel-description" className="logbook-form__label">Description</label>
                <textarea 
                name="travel-description" 
                style={styl} 
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
      addTravel: (id) => dispatch(addTravel(id)),
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
  


