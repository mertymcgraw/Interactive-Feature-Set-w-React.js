import React, { Component } from 'react';
import SubfeatureList from './SubfeatureList';
import AddRemoveButton from './AddRemoveButton';
import '../styles/Feature.css';

class Feature extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSubfeatures: false,
      available: this.props.details.presence
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
         <AddRemoveButton presence={details.presence}/>
        <li className="unavailable" className="feature-title" onClick={() =>this.renderSubfeatures()}>{details.title}</li>
        {this.state.showSubfeatures ? <div className="subfeatures"><SubfeatureList subfeatures={details.subfeatures}/></div> : null}
      </div>
      )   
  }

}

export default Feature;