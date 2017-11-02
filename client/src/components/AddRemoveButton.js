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
  }

  toggleState(){
    const { isAvailable } = this.state;
    this.setState({
      isAvailable: !isAvailable
    })
  }

  renderDeleteButton(){
    return(
      <button className="button" id="delete-button"> x </button>
      )
  }

  renderAddButton(){
    return(
    <button className="button" id="add-button"> + </button>
    )
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