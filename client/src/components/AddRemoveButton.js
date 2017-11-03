import React, { Component } from 'react';

import '../styles/Feature.css';

class AddRemoveButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      isAvailable: this.props.presence
    }

    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.updateAvailability = this.updateAvailability.bind(this);
  }

  toggleState(){
    const { isAvailable } = this.state;
   
    this.setState({
      isAvailable: !isAvailable
    })
   
  }

  renderDeleteButton(){
    return(
      <button className="button delete-button" onClick={() => this.updateAvailability()}> x </button>
      )
  }

  renderAddButton(){
    return(
    <button className="button add-button" onClick={() => this.updateAvailability()}> + </button>
    )
  }

  updateAvailability(){
    this.toggleState();
    this.props.editAvailability(this.props.index)
  }

  render(){
    const { isAvailable } = this.state;
    return(
      <span>
      { isAvailable ? this.renderDeleteButton() : this.renderAddButton() }
      </span>
      )
  }
}

export default AddRemoveButton;