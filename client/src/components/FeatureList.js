import React, { Component } from 'react';
import Feature from './Feature';

import '../styles/Feature.css';

class FeatureList extends Component{
  render(){
    const displayFeatures = this.props.features.map((feature, index)=>{ return <div className="main-feature-container"><Feature key={index} index={index} details={this.props.features[index]} removeFeature={this.props.removeFeature}/></div>})

    return(
      <ul className="feature-list">
        { displayFeatures }
      </ul>
      )
  }
}

export default FeatureList;