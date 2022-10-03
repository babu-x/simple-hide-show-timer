import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  showHideClock = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.showHideClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock ? <Clock /> : null}
      </div>
    )
  }
}

export default App
