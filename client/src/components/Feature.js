import React, { Component } from 'react';
import SubfeatureList from './SubfeatureList';
import AddRemoveButton from './AddRemoveButton';

import '../styles/Feature.css';

class Feature extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: this.props.details,
      showSubfeatures: false,
      available: this.props.details.presence
    };

    this.editAvailability = this.editAvailability.bind(this);
    this.renderSubfeatures = this.renderSubfeatures.bind(this);
  }

  editAvailability(index, presence){
    const updated_details = this.state.details
    updated_details.presence = !this.state.details.presence
    this.setState({details: updated_details})

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
    const availbility = details.presence ? 'active' : 'unavailable'
    return (
      <div className="feature-container">
        <div className="feature-icon">
          <img  src={images[details.title]}/>
        </div>
         <AddRemoveButton index={index} presence={details.presence} editAvailability={this.editAvailability}/>
        <li className={`feature-title ${availbility}`} onClick={() =>this.renderSubfeatures()}>{details.title}</li>
        {this.state.showSubfeatures ? <div className="subfeatures"><SubfeatureList subfeatures={details.subfeatures}/></div> : null}
      </div>
      )   
  }

}

export default Feature;