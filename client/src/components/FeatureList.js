import React, { Component } from 'react';
import Feature from './Feature';

class FeatureList extends Component{
  render(){
    const displayFeatures = this.props.features.map((feature, index)=>{ return <Feature key={index} details={this.props.features[index]} removeFeature={this.props.removeFeature}/>})

    return(
      <ul className="feature-list">
        { displayFeatures }
      </ul>
      )
  }
}

export default FeatureList;