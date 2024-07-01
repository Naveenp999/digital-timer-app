import './index.css'

import {Component} from 'react'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, initialTimer: 25, isStart: false}

  startevent = () => {
    this.timerId = setInterval(this.starttimer, 1000)
    this.setState({isStart: true})
  }

  stopevent = () => {
    clearInterval(this.timerId)
    this.setState({isStart: false})
  }

  starttimer = () => {
    const {seconds, minutes} = this.state
    if (seconds === 0) {
      this.setState(prev => ({
        minutes: prev.minutes - 1,
        seconds: 59,
      }))
    } else {
      this.setState(prev => ({seconds: prev.seconds - 1}))
    }
  }

  resetevent = () => {
    clearInterval(this.timerId)
    this.setState(prev => ({
      minutes: prev.initialTimer,
      seconds: 0,
      isStart: false,
    }))
  }

  IncreaseTimer = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.setState(prev => ({
        minutes: prev.initialTimer + 1,
        seconds: 0,
        initialTimer: prev.initialTimer + 1,
      }))
    }
  }

  DecreaseTimer = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.setState(prev => ({
        minutes: prev.initialTimer - 1,
        seconds: 0,
        initialTimer: prev.initialTimer - 1,
      }))
    }
  }


  render() {
    const {initialTimer, minutes, seconds, isStart} = this.state
    const situationText = isStart ? 'Running' : 'Paused'
    const correctMinute = minutes < 10 ? '0' + minutes : minutes
    const correctSecond = seconds < 10 ? '0' + seconds : seconds
    if(minutes === 0 && seconds === 1){
      this.stopevent()
      this.setState({seconds : 0})
    }
    return (
      <div className="timer-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-subcontainer">
          <div className="timer-slot">
            <div className="timer-text">
              <h1 className="time">{`${correctMinute}:${correctSecond}`}</h1>
              <p className="situation-text">{situationText}</p>
            </div>
          </div>
          <div className="button-container">
            <div className="start-container horizantal">
              {isStart ? (
                <div className="start-subcontainer horizantal">
                  <button
                    className="start-btn horizantal"
                    onClick={this.stopevent}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="btn-icon"
                    />
                    <p className="btn-text">Pause</p>
                  </button>
                </div>
              ) : (
                <div className="start-subcontainer horizantal">
                  <button
                    className="start-btn horizantal"
                    onClick={this.startevent}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="btn-icon"
                    />
                    <p className="btn-text">Start</p>
                  </button>
                </div>
              )}
              <div className="start-subcontainer horizantal">
                <button
                  className="start-btn horizantal"
                  onClick={this.resetevent}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="btn-icon"
                  />
                  <p className="btn-text">Reset</p>
                </button>
              </div>
            </div>
            <p className="description">Set Timer limit</p>
            <div className="increase-container">
              <button className="add-btn" onClick={this.DecreaseTimer}>
                -
              </button>
              <p className="initial-timer">{initialTimer}</p>
              <button className="add-btn" onClick={this.IncreaseTimer}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
