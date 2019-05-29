import React from "react";
import { Link, Redirect } from "react-router-dom";

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          count: true
        }
        this.handleStartStop = this.handleStartStop.bind(this);
        setTimeout(this.handleStartStop, 2000)
      }
    
      handleStartStop() {
          this.setState({
            count: false
          })
          //esta funcion se ejecuta cada 2 seg.
    
      }
    
      render() {
        return (
          <div>
    
            <div>
              <h1 id="timer-label">FOODMAP</h1>
              <p id="time-left">
                {this.state.count ?(
                  <img src='https://vignette.wikia.nocookie.net/plantsvszombies/images/5/56/Pizza_loading.gif/revision/latest?cb=20170408195505' />
                ) : (
                  <Redirect to="/Home"/>
                )
                 
                } 
                </p>
            </div>
          </div>
        )
      }
    
}

export default SplashPage;