import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { 
    addTravel, 
    fetchTravels,
    createTravel } from './logic/actions'
import { connect } from 'react-redux';

import { 
    makeSelectUsername, 
    makeSelectLogbooks,
    makeSelectLogbooksItem 
} from './logic/selectors'

import { 
    createStructuredSelector 
} from 'reselect';

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
    readerRes() {
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
            // console.log(data)
            addTravel(data)
            createTravel(data).payload.then(res => {
                console.log(res)
            })
        }

      
        reader.readAsDataURL(this.img.files[0])

    }

    componentDidMount() {
        let { fetchTravels, dispatch } = this.props;

        // console.log(fetchTravels('all'))
    }

    addTravelFUnc(e) {
        e.preventDefault();

        this.readerRes()


    }

  render() {
    let { logbooks } = this.props;

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
        <ul>
            {
                logbooks.size !== 0 ?
                logbooks.map((item, i) => (
                   <li key={i} className="travel-item">
                       <div className="travel-item__name">
                            <Link to={`/travel/${item.name}`}>
                                {item.name}
                            </Link>     
                       </div>
                       <div className="travel-item__description">
                           {item.description}
                       </div>
                       <div className="travel-item__avatar">
                           <img src={item.img} 
                               alt=""
                            />
                       </div>
                   </li>
                )) : 
                <li> NO repos </li>
            }
        </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return createStructuredSelector({
      userTravel: makeSelectUsername(),
      logbooks: makeSelectLogbooks(),
    })
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      addTravel: (id) => dispatch(addTravel(id)),
      createTravel: (id) => dispatch(createTravel(id)),
      fetchTravels,
      dispatch,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogbookForm);
  


