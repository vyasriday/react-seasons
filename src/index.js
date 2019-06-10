import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Timer from './Timer';


class App extends React.Component {

  state = {
    lat: null,
    errorMessage: ''
  }

  options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  }

  success(position) {
    this.setState({
        lat : position.coords.latitude,
        errorMessage: ''
    })
  }
  
  error(err) {
    this.setState({
      errorMessage: err.message
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this), this.options);
  }

  render() {
    return (
      <div>
        <Timer />
        <SeasonDisplay lat = {this.state.lat} />     
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));