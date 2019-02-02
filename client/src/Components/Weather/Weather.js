import React from 'react'
import moment from 'moment'


function Weather(props){
  const value = props.res
  return(
    <div style={{marginTop: '50px'}}>
      <div className="card" style={{width: '18rem', borderRadius: '7px'}}>
      <div className="px-3 mt-3">
        <h5 className="font-weight-normal">{value.city}</h5>
        <hr className="mt-2"/>
      </div>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between mb-3">
          <div>
            <h6 className="text-capitalize font-weight-normal">{value.des}</h6>
            <div className="d-flex"><h4>{Math.floor(value.tempNow)}°C</h4>&nbsp;&nbsp;<p>{value.maxTemp}°C</p></div>
          </div>
          <img className="mt-4" src={value.logo} height="70" alt="w.ico"/>
        </div>
        <div className="row">
          <div className="col">
            <h6>{value.humidity} %</h6>
            <p className="text-muted">Humidity</p>
          </div>
          <div className="col">
            <h6>{value.pressure}</h6>
            <p className="text-muted">Pressure</p>
          </div>
          <div className="col">
            <h6>{value.wind} m/s</h6>
            <p className="text-muted">Wind</p>
          </div>
        </div>
        <div className="row mb-0">
          <div className="col">
            <h6>{value.clouds} %</h6>
            <p className="text-muted">Clouds</p>
          </div>
          <div className="col">
            <h6>{moment.unix(value.sunrise).format('hh:mm')}</h6>
            <p className="text-muted">Sunrise</p>
          </div>
          <div className="col">
            <h6>{moment.unix(value.sunset).format('HH:mm')}</h6>
            <p className="text-muted">Sunset</p>
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        {moment().format('dddd | MMM DD | hh:mm')}
      </div>
    </div>
    </div>
  )
}

export default Weather
