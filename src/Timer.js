import React from 'react';

class Timer extends React.Component {
  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  render() {
    return (
      <h2 style={{position: 'absolute', left: 'calc(100vw - 60%)'}}>{this.state.time}</h2>
    )
  }
}

export default Timer;