import React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App';
import Spinner from "../components/spinner/Spinner";


it('it render spinner', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<Spinner/>)).toEqual(true)
});

it('see city and date', () => {
    const app = shallow(<App/>);
    app.setState({
        city: "Test",
        isLoaded: true,
    });
    expect(app.find('.current-location').text()).toEqual('Test');

    expect(app.find('.current-date').text()).toEqual(new Date().toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));
});

it('see current temparature', () => {
    const app = shallow(<App/>);
    app.setState({
        city: "Test",
        isLoaded: true,
        forecast: {
            currently: {
                temperature: 100,
            }
        }
    });

    expect(app.find('.temperature').text()).toEqual("34°c");
});

it('see current weather', () => {
    const app = shallow(<App/>);
    app.setState({
        city: "Test",
        isLoaded: true,
        forecast: {
            currently: {
                summary: "cold",
            }
        }
    });

    expect(app.find('.current-weather>div>span').text()).toEqual("cold");
});
