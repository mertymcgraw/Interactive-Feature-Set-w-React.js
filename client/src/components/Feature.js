import React, { Component } from 'react';
import Subfeature from './Subfeature';
import '../styles/Feature.css';

class Feature extends Component {
  constructor(){
    super();
    this.hasSubfeatures = this.hasSubfeatures.bind(this);
  }

  hasSubfeatures(){
    if(this.props.details.subfeatures.length>0){
      return (
      < Subfeature />
      )
    }
  }

  render(){
    
    const images ={
      "Toilet": "/toilet.png",
      "Trash": "/trash.png",
      "Shower": "/shower.png", 
      "Pets allowed": "/pets.png"
    }
    const { details, index } = this.props
    const Merty = details.subfeatures.length
    return (
      <div className="feature-container">
        <div className="feature-icon">
          <img  src={images[details.title]}/>
        </div>
        <li className="feature-title">{details.title}</li>
        <button className="delete-button" onClick={() => this.props.removeFeature(index)}> x </button>
        <div>{this.hasSubfeatures()}</div>
      </div>
      )   
  }

}

export default Feature;