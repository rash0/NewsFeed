import React from 'react'
import moment from 'moment'


function Weather(props){
  const value = props.res
  return(
    <div>
    <div className="card mt-3" style={{width: '18rem'}}>
      <div className="card-header">
        {value.city}, {value.country}
      </div>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between mb-3">
          <div>
            <h6 className="text-capitalize">{value.des}</h6>
            <div className="d-flex"><h4>{Math.floor(value.tempNow)}°C</h4>&nbsp;&nbsp;<p>{value.maxTemp}°C</p></div>
          </div>
          <img className="mt-4" src={value.logo} height="70" alt="w.ico"/>
        </div>
        <div className="row text-muted">
          <div className="col">
            <h6>{value.humidity} %</h6>
            <p>Humidity</p>
          </div>
          <div className="col">
            <h6>{value.pressure}</h6>
            <p>Pressure</p>
          </div>
          <div className="col">
            <h6>{value.wind} m/s</h6>
            <p>Wind</p>
          </div>
        </div>
        <div className="row text-muted mb-0">
          <div className="col">
            <h6>{value.clouds} %</h6>
            <p>Clouds</p>
          </div>
          <div className="col">
            <h6>{moment.unix(value.sunrise).format('hh:mm')}</h6>
            <p>Sunrise</p>
          </div>
          <div className="col">
            <h6>{moment.unix(value.sunset).format('HH:mm')}</h6>
            <p>Sunset</p>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted text-center">
        {moment().format('dddd | MMM DD | hh:mm')}
      </div>
    </div>
    </div>
  )
}

export default Weather
