import React, {Component} from 'react';
import './Forecast.scss';
import Skycons from 'react-skycons'
import RainDrop from '../../icons/rain-drop.png';

class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecastHourLeft: 0,
            forecastDayLeft: 20,
            currentSlide: 0 //0 -forecast hour 1-forecast day
        };
    }

    mouseDown = () => {
        document.addEventListener("mousemove", this.mouseSpy);
        document.addEventListener("mouseup", this.mouseUp);
        document.querySelector(".forecast-hour").classList.remove("forecast-anim");
    };

    mouseUp = () => {
        document.querySelector(".forecast-hour").classList.add("forecast-anim");
        if (this.state.forecastHourLeft > -30 || (this.state.forecastHourLeft > -80 && this.state.currentSlide === 1)) {
            this.setState({forecastHourLeft: 0});
            this.setState({currentSlide: 0});
        } else {
            this.setState({forecastHourLeft: -120});
            this.setState({currentSlide: 1});
        }
        document.removeEventListener("mousemove", this.mouseSpy);
    };

    mouseSpy = (e) => {
        if(this.state.forecastHourLeft < 40 && this.state.forecastHourLeft > -140) {
            this.setState({forecastHourLeft: this.state.forecastHourLeft + e.movementX/3});
        }
    };

    render() {

        let forecastHour = {
            marginLeft: this.state.forecastHourLeft + "%",
        };

        let forecastDay = {
            marginLeft: this.state.forecastDayLeft + "%",
        };

        return (
            <div className="forecast">
                <div className="slide-dots">
                    <span>*</span><span>*</span>
                </div>
                <div className="forecast-wrapper" onMouseDown={this.mouseDown}>
                    <div className="forecast-hour" style={forecastHour}>
                        <div className="forecast-card p-md-3">
                            <div>18:00 1</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 7%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>18:00</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 7%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>18:00</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 7%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>18:00</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 7%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>18:00</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 7%</div>
                        </div>
                    </div>
                    <div className="forecast-day" style={forecastDay}>
                        <div className="forecast-card p-md-3">
                            <div>Mon</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>7&deg;</div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 87%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>Mon</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>7&deg;</div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 87%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>Mon</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>7&deg;</div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 87%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>Mon</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>7&deg;</div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 87%</div>
                        </div>
                        <div className="forecast-card p-md-3">
                            <div>Mon</div>
                            <div className={"weather-icon"}>
                                <Skycons
                                    color='white'
                                    icon='RAIN'
                                    autoplay={true}
                                />
                            </div>
                            <div>7&deg;</div>
                            <div>3&deg;</div>
                            <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/> 87%</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {};

export default Forecast;