import React, { Component } from 'react';
import './App.css';
const s = 'S';
const p = 'P';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec : 0,
      isPaused : s
    }
  }
  chose() {
    if(this.state.isPaused === s) {
      this.timer = setInterval(this.tick.bind(this), 1000);
      /*var newIsPaused = this.state.isPaused === s ? p : s;*/
      this.setState( {isPaused : p} )
    }
    if(this.state.isPaused === p) {
      clearInterval(this.timer);
      this.setState( {isPaused : s} )
    }
    if(this.state.isPaused === 12) {
      console.log('12');
    }
  }
  restart() {
    this.setState( {sec : 0} );
  }
  tick() {
    this.setState( {sec : this.state.sec + 1} );
  }
  render() {
    var seconds = this.state.sec % 60
    var minutes = parseInt(this.state.sec / 60, 10)
    return (
      <div className='timer'>
        <button className='start-pause' onClick={this.chose.bind(this)}>{this.state.isPaused}</button>
        <h1 className='numbers'>{minutes}:{seconds}</h1>
        <button className='restart' onClick={this.restart.bind(this)}>R</button>
      </div>
    );
  }
}

export default App;
