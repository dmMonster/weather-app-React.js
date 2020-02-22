import React, {Component} from 'react';
import './Forecast.scss';
import Skycons from 'react-skycons'
import RainDrop from '../../icons/rain-drop.png';

class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        let forecastHourMargin = parseInt(document.querySelector(".forecast-hour").style.marginLeft);
        if (forecastHourMargin > -30 || (forecastHourMargin > -80 && this.state.currentSlide === 1)) {
            this.setSlideMargin(0);
            this.setState({currentSlide: 0});
        } else {
            this.setSlideMargin(-120);
            this.setState({currentSlide: 1});
        }
        document.removeEventListener("mousemove", this.mouseSpy);
    };

    mouseSpy = (e) => {
        let marginLeft;
        let forecastHourSlide = document.querySelector(".forecast-hour").style;
        forecastHourSlide.marginLeft ? marginLeft = forecastHourSlide.marginLeft : marginLeft = 0;
        if (parseInt(marginLeft) < 40 && parseInt(marginLeft) > -140) {
            forecastHourSlide.marginLeft = parseInt(marginLeft) + parseInt(e.movementX / 3) + "%";
        }
    };

    setSlideMargin = (marginL) => {
        let forecastHourSlide = document.querySelector(".forecast-hour");
        forecastHourSlide.style.marginLeft = parseInt(marginL) + "%";
    };

    render() {
        return (
            <div className="forecast">
                <div className="slide-dots">
                    <div className={"slide1-dot" + (!this.state.currentSlide ? " selected" : "")}> </div>
                    <div className={"slide2-dot" + (this.state.currentSlide ? " selected" : "")}> </div>
                </div>
                <div className="forecast-wrapper" onMouseDown={this.mouseDown}>
                    <div className="forecast-hour">
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
                    <div className="forecast-day">
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