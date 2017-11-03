import React, { Component } from 'react';
import axios from 'axios';
import FeatureList from './FeatureList';

import '../styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      features: []
    }
  };

  componentWillMount(){
    axios.get('http://localhost:3001/')
      .then((response) => {
        this.setState({features: response.data})
      })
      .catch(e => console.log(e))
  }

  render() {
    
    return (
      <div className="App">
        <FeatureList features={this.state.features} removeFeature={this.removeFeature}/>
      </div>
    );
  }
}

export default App;
