import React, { useState, useEffect, useRef } from 'react';
import { getWeather } from './getWeather';
import InputModal from './inputModal'
import '../CSS/Weather.css'

const WeatherForcast = ()=>{
      const [city, setCity] = useState('Bangalore');
      const [weather, setWeather] = useState(null);
      
    
      const hasRunRef = useRef(false);
        const handleGetWeather = async (newCity = city) => {
          const trimmedCity = newCity.trim();
          if (!trimmedCity) {
            alert('Please enter a valid city');
            return;
          }
          const data = await getWeather(trimmedCity);
          if (data) {
            setCity(trimmedCity);
            setWeather(data);
          } else {
            alert('City not found or error fetching data.');
          }
        };
      
       useEffect(() => {
          const fetchDefaultWeather = async () => {
            if(hasRunRef.current) return;
                hasRunRef.current = true;
            const data = await getWeather('Bangalore');
            setCity('Bangalore');
            setWeather(data);
          };
      
          fetchDefaultWeather();
        }, []);
    
        function getWeatherIcon(conditionText) {
            var iconVal = ''
            switch (conditionText.toLowerCase()) {
              case 'sunny':
              case 'clear':
              case 'fair':
                iconVal = 'fas fa-sun text-warning'
                break;
              case 'cloudy':
              case 'clouds':
              case 'mostly cloudy':
              case 'partly cloudy':
                iconVal = 'fas fa-cloud text-secondary'
                break;
          
              case 'rain':
              case 'showers':
              case 'scattered showers':
              case 'thunderstorms':
                iconVal = 'fas fa-cloud-showers-heavy text-primary'
                break;
          
              case 'snow':
              case 'flurries':
              case 'scattered snow showers':
                iconVal = 'fas fa-snowflake text-info'
                break;
          
              case 'windy':
                iconVal = 'fas fa-wind text-muted'
                break;
          
              case 'fog':
              case 'haze':
              case 'mist':
                iconVal = 'fas fa-smog text-muted'
                break;
          
              default:
                iconVal = 'fas fa-question-circle text-dark'
                break;
            }
            iconVal += ' me-2'
            return <i className={iconVal}></i>;
          }
          const getCardBg = (condition) => {
            switch (condition) {
              case 'Clear': return 'linear-gradient(145deg, #4D6694DA, #9DB4E0DA)';
              case 'Rain': return 'linear-gradient(to bottom left, #00c6fb, #005bea)';
              case 'Clouds': return 'linear-gradient(to bottom left, #757f9a,rgb(146, 167, 205))';
              default: return 'linear-gradient(to bottom left, #9db4e0, #4d6694)';
            }
          };
          
          const formatTime = (timestamp) => {
            const date = new Date(timestamp * 1000); // Convert to milliseconds
            return date.toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
            });
          };
          
          const formatTimezone = (offsetInSeconds) => {
            const hours = Math.floor(offsetInSeconds / 3600);
            const minutes = Math.abs((offsetInSeconds % 3600) / 60);
            const sign = hours >= 0 ? '+' : '-';
            return `UTC${sign}${Math.abs(hours).toString().padStart(2, '0')}:${minutes === 0 ? '00' : '30'}`;
          };
    return(
        <div className="wfContainer">
                <div className="row wfContainer" >
                <div className="col-md-12 col-lg-12 col-xs-12">
                    <div className="outer-layer d-none">
                      <h2>Weather</h2>
                      <div className="row" >
                          <div className="col-md-12 col-lg-12 col-xs-12 displayInput">
                              {/*<input type="text" className="form-control inputPlc" value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
                              <button className="btn btn-primary ml-10" onClick={() => handleGetWeather(cityInput)}> Get Wather</button>*/}
                          </div>
                      </div>
                    </div>
                    <div className='row'>
                            <div className='col-md-12'>
                            {weather && (
                              <div className="card weather-card mx-auto p-3" style={{ background: getCardBg(weather.weather[0].main), width: '260px' }}>
                                <div className='row'>
                                  <div className='col-md-12 col-lg-12 col-xs'>
                                    <img src='/Skycast_tagline_white.png' alt="SkyCast Logo" className="img img-responsive skycast-logo"></img>
                                  </div>
                                </div>
                                <hr/>
                                <div className="d-flex flex-column gap-2">
                                  {/* City and search icon */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <p className="m-0 location" title='Location'>
                                      <i className="fas fa-map-marker-alt me-2"></i>
                                      {weather.name}, {weather.sys.country}
                                    </p>
                                    <i title="Search Location" data-bs-toggle="modal" data-bs-target="#inputModal" className="fas fa-search hand"></i>
                                  </div>
                                    {/* Temp & Description in one row, left-aligned */}
                                    <div className='row'>
                                      <div className='col-md-12 col-lg-12'>
                                        <p className="m-0" title='Temperature'><i className="fas fa-thermometer-half me-2"></i>{weather.main.temp}°C</p>
                                        <p className="m-0 text-capitalize" title='Weather Description'> {getWeatherIcon(weather.weather[0].main)} {weather.weather[0].description}</p>
                                      </div>
                                    </div>
                                    <hr/>
                                    {/* Humidity & Wind speed in one row, left-aligned */}
                                    <div className="row">
                                      <div className="col text-start" title='Humidity'>
                                        <p className="m-0"> <i className="fas fa-tint me-2"></i>{weather.main.humidity}%</p>
                                      </div>
                                      <div className="col text-start" title='Wind Speed'>
                                        <p className="m-0"><i className="fas fa-wind me-2"></i>{weather.wind.speed} m/s</p>
                                      </div>
                                    </div>

                                    {/* Sunrise & Sunset in one row, left-aligned */}
                                    <div className="row">
                                      <div className="col text-start" title='Sunrise'>
                                        <p className="m-0"><i className="fas fa-sun me-2"></i>{formatTime(weather.sys.sunrise)}</p>
                                      </div>
                                      <div className="col text-start" title='Sunset'>
                                        <p className="m-0"><i className="fas fa-moon me-2"></i>{formatTime(weather.sys.sunset)}</p>
                                      </div>
                                    </div>
                                    <div className='row'>
                                      <div className='col-md-12 col-lg-12 timezone'>
                                        <p className="m-0">  <i className="fas fa-clock me-2"></i> Timezone: {formatTimezone(weather.timezone)} </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='row'>
                                  <div className='col-md-12 col-lg-12'> 
                                  <p className="text-center text-muted mt-2 mb-0 poweredBy"> Powered by: <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></p>
                                  </div>
                                </div>
                              </div>
                            )}
                            <InputModal onCitySubmit={handleGetWeather} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherForcast