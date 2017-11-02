import React, { Component } from 'react';
import SubfeatureList from './SubfeatureList';
import '../styles/Feature.css';

class Feature extends Component {
  constructor(){
    super();
    this.state = {
      showSubfeatures: false
    };

    this.renderSubfeatures = this.renderSubfeatures.bind(this);
  }

  renderSubfeatures(){
    const {showSubfeatures} = this.state;
    if(this.props.details.subfeatures.length>0){
      this.setState({
        showSubfeatures: !showSubfeatures
      });
    }
  }

  render(){
    
    const images = {
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
         <button className="delete-button" onClick={() => this.props.removeFeature(index)}> x </button> 
        <li className="feature-title" onClick={() =>this.renderSubfeatures()}>{details.title}</li>
        {this.state.showSubfeatures ? <SubfeatureList subfeatures={details.subfeatures}/> : null}
      </div>
      )   
  }

}

export default Feature;