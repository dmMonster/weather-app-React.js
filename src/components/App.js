import React, {Component} from 'react';
import Pin from '../icons/pin.svg';

import './App.scss';
import Forecast from "./forecast/Forecast";

class App extends Component {
  render() {
    return (
        <div className="App container">
            <div className="row">
                <div className="col-12 pt-3 text-center">
                    <h5 className={"current-location"}>
                        <img className={"pin-icon"} src={Pin} alt="Pin" />
                        Sau Paulo
                    </h5>
                </div>
            </div>

            <div className="row">
                <div className="col-12 pt-3 text-center">
                    <h5 className={"current-date"}>Thursday, February 1, 2020</h5>
                </div>
            </div>


            <div className="row current-weather">
                <div className="col-12 pt-3 text-center">
                    <span className={""}>Clear</span>
                </div>
            </div>

            <div className="row current-temperature">
                <div className="col-12 text-center">
                    <span className="temperature">19<sup>&deg;c</sup></span>
                </div>
            </div>

            <Forecast/>

        </div>


    );
  }
}

export default App;
