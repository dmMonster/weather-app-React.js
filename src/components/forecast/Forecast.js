import React, {Component, createRef} from 'react';
import './Forecast.scss';
import Skycons from 'react-skycons'
import RainDrop from '../../icons/rain-drop.png';
import PropTypes from 'prop-types';

class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0, //0 -forecast hour 1-forecast day
            mouseDown: false
        };

        this.touchX = 0;

        this.forecastHourRef = createRef();
    }

    mouseDown = () => {
        document.addEventListener("mousemove", this.mouseSpy);
        document.addEventListener("mouseup", this.endSlideChang);
        this.forecastHourRef.current.classList.remove("forecast-anim");
    };

    touchStart = (e) => {
        this.touchX = e.touches[0].clientX;
        document.addEventListener("touchmove", this.touchSpy);
        document.addEventListener("touchend", this.endSlideChang);
    };

    endSlideChang = () => {
        this.forecastHourRef.current.classList.add("forecast-anim");
        let forecastHourMargin = parseInt(this.forecastHourRef.current.style.marginLeft);
        if (forecastHourMargin > -30 || (forecastHourMargin > -80 && this.state.currentSlide === 1)) {
            this.setSlideMargin(0);
            this.setState({currentSlide: 0});
        } else {
            this.setSlideMargin(-120);
            this.setState({currentSlide: 1});
        }
        document.removeEventListener("mousemove", this.mouseSpy);
        document.removeEventListener("touchmove", this.mouseSpy);
    };

    mouseSpy = (e) => {
        let marginLeft;
        let forecastHourSlide = this.forecastHourRef.current.style;
        forecastHourSlide.marginLeft ? marginLeft = forecastHourSlide.marginLeft : marginLeft = 0;
        if (parseInt(marginLeft) < 40 && parseInt(marginLeft) > -140) {
            forecastHourSlide.marginLeft = parseInt(marginLeft) + parseInt(e.movementX / 3) + "%";
            console.log(e.clientX);
        }
    };

    touchSpy = (e) => {
        let marginLeft;
        let forecastHourSlide = this.forecastHourRef.current.style;
        forecastHourSlide.marginLeft ? marginLeft = forecastHourSlide.marginLeft : marginLeft = 0;
        if (parseInt(marginLeft) < 40 && parseInt(marginLeft) > -140) {
            forecastHourSlide.marginLeft = parseInt(marginLeft) + parseFloat((e.touches[0].clientX - this.touchX)/2) + "%";
            this.touchX = e.touches[0].clientX;
        }

    };

    setSlideMargin = (marginL) => {
        let forecastHourSlide = this.forecastHourRef.current;
        forecastHourSlide.style.marginLeft = parseInt(marginL) + "%";
    };


    render() {

        let hourForecast = "";
        if (this.props.forecast.hasOwnProperty("hourly")) {
            let hours = 0;
            hourForecast = this.props.forecast.hourly.data.map((item) => {
                hours++;
                if (hours > 5) {
                    return "";
                }
                return <div className="forecast-card p-md-3" key={item.time}>
                    <div>{new Date((item.time * 1000)).getHours()}:00</div>
                    <div className={"weather-icon"}>
                        <Skycons
                            color='white'
                            icon={item.icon.replace(/-/g, "_").toUpperCase()}
                            autoplay={true}
                        />
                    </div>
                    <div>{parseInt((item.temperature - 32) / 1.8)}&deg;</div>
                    <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/>
                        {parseInt(item.precipProbability * 100)}%
                    </div>
                </div>
            });
        }

        let dayForecast = "";
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        if (this.props.forecast.hasOwnProperty("daily")) {
            let maxDay = 0;
            dayForecast = this.props.forecast.daily.data.map((item) => {
                maxDay++;
                if (maxDay > 5) {
                    return "";
                }
                return <div className="forecast-card p-md-3" key={item.time}>
                    <div>{days[new Date((item.time * 1000)).getDay()]}</div>
                    <div className={"weather-icon"}>
                        <Skycons
                            color='white'
                            icon={item.icon.replace(/-/g, "_").toUpperCase()}
                            autoplay={true}
                        />
                    </div>
                    <div>{parseInt((item.temperatureHigh - 32) / 1.8)}&deg;</div>
                    <div>{parseInt((item.temperatureLow - 32) / 1.8)}&deg;</div>
                    <div className={"rain-drop"}><img src={RainDrop} alt="rain_drop"/>
                        {parseInt(item.precipProbability * 100)}%
                    </div>
                </div>
            });
        }


        return (
            <div className="forecast">
                <div className="slide-dots">
                    <div className={"slide1-dot" + (!this.state.currentSlide ? " selected" : "")}></div>
                    <div className={"slide2-dot" + (this.state.currentSlide ? " selected" : "")}></div>
                </div>
                <div className="forecast-wrapper" onMouseDown={this.mouseDown} onTouchStart={this.touchStart}>
                    <div className="forecast-hour" ref={this.forecastHourRef} style={{"marginLeft": 0}}>
                        {Object.keys(this.props.forecast).length > 0 && hourForecast}
                    </div>
                    <div className="forecast-day">
                        {Object.keys(this.props.forecast).length > 0 && dayForecast}
                    </div>
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    forecast: PropTypes.object.isRequired,

};

export default Forecast;