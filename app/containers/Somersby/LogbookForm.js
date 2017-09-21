import React, { Component } from 'react'
import PropTypes from 'prop-types'


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

class UserLogbook extends Component {
    render() {
        return (
            <div className="logbook-list">
                <LogbookItem />
            </div>
        )
    }
}
export default class LogbookForm extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <form action="" className="logbook">
            <div className="logbook__field logbook__field--title">
                <label htmlFor="travel-name" className="logbook__label">Title</label>
                <input name="travel-name" className="logbook__input" />
            </div>
            <div className="logbook__field logbook__field--description">
                <label htmlFor="travel-description" className="logbook__label">Description</label>
                <textarea name="travel-description" className="logbook__input" />
            </div>
            <div className="logbook__field logbook__field--picture">
                <button className="logbook__download-img">download image

                </button>
                <div className="logbook__images">
                    <img src="" alt=""/>
                </div>
            </div>
        </form>
    )
  }
}
