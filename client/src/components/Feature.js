import React, { Component } from 'react';
import '../styles/Feature.css';

class Feature extends Component {
  render(){
    const images ={
      "Toilet": "/toilet.png",
      "Trash": "/trash.png",
      "Shower": "/shower.png", 
      "Pets allowed": "/pets.png"
    }
    const { details, index } = this.props
    return (
      <div className="feature-container">
        <div className="feature-icon">
          <img  src={images[details.title]}/>
        </div>
        <li className="feature-title">{details.title}</li>
        <button className="delete-button" onClick={() => this.props.removeFeature(details, index)}> x </button>
      </div>
      )   
  }

}

export default Feature;