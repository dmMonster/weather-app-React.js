import React, {Component} from 'react';
import Pin from '../icons/pin.svg';
import './App.scss';
import Forecast from "./forecast/Forecast";
import Spinner from "./spinner/Spinner";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude: 52.237049,
                longitude: 21.017532
            },
            city: "",
            isLoaded: false,
            forecast: {
                currently: {
                    summary: "unknown",
                    temperature: 0
                }
            },
        };
    }

    componentDidMount() {
        this.getIpLocalization();
        this.getForecast();
        this.getGeolocation();
    }

    getGeolocation= () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                this.setState({
                    isLoaded: false,
                });
                this.setState(
                    {
                        location: {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }
                    }, this.getForecast
                );
            });
        } else {
            console.log("Location is set default")
        }
    };

    getForecast = () => {
        fetch("https://apiweathertest.000webhostapp.com/?latitude=" + this.state.location.latitude + "&longitude=" + this.state.location.longitude, {})
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        forecast: res,
                    }, () => {
                        this.setState({isLoaded: true});
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log("error localization");
                }
            )
    };

    getIpLocalization() {
        fetch("https://apiweathertest.000webhostapp.com/?ip")
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        location: {
                            longitude: res.lon,
                            latitude: res.lat
                        },
                        city: res.city
                    }, () => {
                        this.setState({isLoaded: true});
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log("error localization");
                }
            )
    }

    render() {

        if (!this.state.isLoaded) {
            return (
                <Spinner isLoaded={this.state.isLoaded}/>
            );
        }
        return (
            <div className="App container fade-in">
                <div className="row">
                    <div className="col-12 pt-3 text-center">
                        <h5 className={"current-location"}>
                            <img onClick={this.getGeolocation} className={"pin-icon"} src={Pin} alt="Pin"/>
                            {this.state.city}
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pt-3 text-center">
                        <h5 className={"current-date"}>{new Date().toLocaleDateString("en-US", {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</h5>
                    </div>
                </div>


                <div className="row current-weather">
                    <div className="col-12 pt-3 text-center">
                        <span>{this.state.forecast.currently.summary}</span>
                    </div>
                </div>

                <div className="row current-temperature">
                    <div className="col-12 text-center">
                        <span className="temperature">
                            {parseInt((this.state.forecast.currently.temperature - 38) / 1.8)}
                            <sup>&deg;c</sup></span>
                    </div>
                </div>

                <Forecast forecast={this.state.forecast}/>

            </div>


        );
    }
}

export default App;
