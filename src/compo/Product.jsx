import React, { Component } from 'react'
import img2 from './asstss/avatar.png'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.handleUpvote = this.handleUpvote.bind(this)
  }

  handleUpvote() {
    this.props.onVote(this.props.id)
  }

  render() {
      const {description,title,image,vote} = this.props;
      
    return (
      <div className='item'>
          <div className="image">
            <img 
             src={image} alt="image" />
          </div>
          <div className="middle aligned content">
            <div className="header">
                <a href="#">
                  <button onClick={this.handleUpvote} >up</button>
                </a>
                <p>{vote}</p>
                
            </div>
            <div className="description">
                <a href="#">{title}</a>
                <p>{description} </p>
            </div>
            <div className="extra">
                <span>Submitted by:</span>
                <img src={img2}
                 alt="Imgae" 
                className="ui avatar" />
            </div>
          </div>
      </div>
    )
  }
}
