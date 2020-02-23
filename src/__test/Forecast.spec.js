import React from 'react';
import {shallow} from 'enzyme';
import Forecast from '../components/forecast/Forecast.js'
import forecastMock from './forecast_mock'


it('see forecast days and hours', () => {
    const forecast = shallow(<Forecast forecast={forecastMock}/>);

    expect(forecast.find('.forecast-wrapper').children().length).toBe(2);
});

it('see forecast for five hours', () => {
    const forecast = shallow(<Forecast forecast={forecastMock}/>);

    expect(forecast.find('.forecast-hour').children().length).toBe(5);
    expect(forecast.find('.forecast-hour').text()).toEqual("17:00<ReactSkycons />5°52%18:00<ReactSkycons />4°64%19:00<ReactSkycons />4°73%20:00<ReactSkycons />4°77%21:00<ReactSkycons />4°78%");

});

it('see forecast for five days', () => {
    const forecast = shallow(<Forecast forecast={forecastMock}/>);

    expect(forecast.find('.forecast-day').children().length).toBe(5);
    expect(forecast.find('.forecast-day').text()).toEqual("Sun<ReactSkycons />7°2°95%Mon<ReactSkycons />7°1°92%Tue<ReactSkycons />10°3°90%Wed<ReactSkycons />8°0°34%Thu<ReactSkycons />5°0°46%");

});
