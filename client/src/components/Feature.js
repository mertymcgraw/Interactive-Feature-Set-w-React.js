import React, { Component } from 'react';
import Subfeature from './Subfeature';
import '../styles/Feature.css';

class Feature extends Component {
  constructor(){
    super();
    this.state = {
      showSubfeatures: false
    };

    this.renderSubfeatures = this.renderSubfeatures.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderSubfeatures(){
    const {showSubfeatures} = this.state;
    if(this.props.details.subfeatures.length>0){
      this.setState({
        showSubfeatures: !showSubfeatures
      });
    }
  }

  handleClick(){

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
        <li className="feature-title" onClick={() =>this.renderSubfeatures()}>{details.title}</li>
        {this.state.showSubfeatures ? <Subfeature /> : null}
        <button className="delete-button" onClick={() => this.props.removeFeature(index)}> x </button> 
      </div>
      )   
  }

}

export default Feature;