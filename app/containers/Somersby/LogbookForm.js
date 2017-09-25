import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { addTravel } from './logic/actions'
import { connect } from 'react-redux';
import { 
    makeSelectUsername, 
    makeSelectLogbooks,
    makeSelectLogbooksItem } from './logic/selectors'
import { createStructuredSelector } from 'reselect';
import '!file-loader?name=[name].[ext]&outputPath=images/!./img/1.jpg';
import imS from './img/1.jpg';
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
    constructor() {
        super();
        this.state = {
            file: '',
            imagePreviewUrl: '',
            result: []
        }
    }
    readerRes(file) {
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
              file: file,
              imagePreviewUrl: reader.result,
              result: [...this.state.result, reader.result ]
            });
        }
      
        reader.readAsDataURL(file)

    }

    addTravelFUnc(e) {
        e.preventDefault();
        
        const { addTravel, selectorsLogbook } = this.props;
        let data = {
            name: this.name.value,
            description: this.description.value,
            img: this.img.files[0].name
          }
          
          
          this.readerRes(this.img.files[0])


        addTravel(data)
      }
  render() {
    let { logbooks } = this.props;
    let {imagePreviewUrl} = this.state;
    console.log(logbooks)
    return (
        <div>
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
                <button className="logbook-form__download-img">download image

                </button>
                <input type="file" name="" id="" ref={img => this.img = img}/>
                <div className="logbook-form__images">
                    <img src="" alt=""/>
                </div>
            </div>
            <RaisedButton 
            className="logbook-form__submit" 
            label="Submit" 
            primary={true} 
            onClick={this.addTravelFUnc.bind(this)}>
            
            </RaisedButton >

        </form>
        <ul>
            {
                logbooks.size !== 0 ?
                logbooks.map((item, i) => (
                   <li key={i} className="logbook">
                       <div className="logbook__name">
                            <Link to={`/travel/${item.name}`}>
                                {item.name}
                            </Link>
                           
                       </div>
                       <div className="logbook__description">
                           {item.description}
                       </div>
                       <div className="logbook__avatar">
                           <img src={this.state.result.length ? this.state.result[i] : ''} alt=""/>
                       </div>
                   </li>
                )) : <li> NO repos </li>
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
      addTravel: (data) => dispatch(addTravel(data)),
      dispatch,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogbookForm);
  


