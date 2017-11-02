import React, { Component } from 'react';

import Feature from './Feature';

class SubfeatureList extends Component {
  render(){
    const displaySubfeatures = this.props.subfeatures.map((subfeature, index) => {
      return <Feature key={index} index={index} details={this.props.subfeatures[index]}/>
    })
    return(
      <ul>
        { displaySubfeatures }
      </ul>
      )
  }

}

export default SubfeatureList;