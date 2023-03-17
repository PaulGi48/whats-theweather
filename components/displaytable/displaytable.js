import React from 'react';
import PropTypes from 'prop-types';
import { WiThermometer, WiCelsius, WiFahrenheit } from 'react-icons/wi';

function formatTemperature(temp) {
    if (temp > 100) {
      return (
        <span className="text-red-500">
          <WiThermometer className="inline-block align-text-bottom" /> {temp}
          <WiCelsius className="inline-block align-text-bottom" />
        </span>
      );
    } else if (temp >= 1) {
      return (
        <span className="text-green-500">
          <WiThermometer className="inline-block align-text-bottom" /> {temp}
          <WiCelsius className="inline-block align-text-bottom" />
        </span>
      );
    } else {
      return (
        <span className="text-blue-500">
          <WiThermometer className="inline-block align-text-bottom" /> {temp}
          <WiCelsius className="inline-block align-text-bottom" />
        </span>
      );
    }
  }

function DisplayTable({ weather }) {
    return (
      <table className="mt-40 w-full">
      <thead className="text-white">
        <tr>
          <th className="text-left py-2 px-4">Name</th>
          <th className="text-left py-2 px-4">Country ID</th>
          <th className="text-left py-2 px-4">Temperature (°C)</th>
          <th className="text-left py-2 px-4">Weather</th>
        </tr>
      </thead>
      <tbody class="mt-10 w-full">
        {weather.main && (
          <tr class="text-white justify-center hover:text-green-200">
            <td class="py-2 px-4">{weather.name}</td>
            <td class="py-2 px-4">{weather.sys.country}</td>
            <td class="py-2 px-4">{formatTemperature(Math.round(weather.main.temp - 273.15))}</td>
            <td class="py-2 px-4">{weather.weather[0].main}</td>
          </tr>
        )}
      </tbody>
    </table>
    
    
    );
  }
  
  DisplayTable.propTypes = {
    weather: PropTypes.object.isRequired,
  };
  
  export default DisplayTable;
  