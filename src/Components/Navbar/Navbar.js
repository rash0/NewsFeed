import React from 'react'
import './Navbar.css'

const sti = {
  border: '1px solid red'
}

function Navbar(props) {

  return (
    <nav className="navbar navbar-light">
    <img src="https://img.icons8.com/ios/28/00000/menu.png" data-toggle="collapse" data-target="#CollapseContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" alt="filter-Menu" />

    <img src={require('./N-Logo.png')} width="120" height="35" className="navbar-brand mx-auto" />

    <div className="collapse navbar-collapse mt-3 p-2" id="CollapseContent">
      <div className="row no-gutters">

          <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 d-flex justify-content-end">
            <input className="form-control w-100" type="search" onChange={props.inputKeyword} placeholder="e.g 'France'" aria-label="Search" />
          </div>

          <div className="pl-2 pl-2 d-flex justify-content-center">
            <div className="dropdown">
              <button className="btn btn-outline-success bg-white dropdown-toggle" id="publishTimeButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.publishTimeStatus}
              </button>

              <div className="dropdown-menu" aria-labelledby="publishTimeButton">
                <span className="dropdown-item" onClick={() => props.publishSelection('7 days ago')}>7 days ago</span>
                <span className="dropdown-item" onClick={() => props.publishSelection('15 days ago')}>15 days ago</span>
                <span className="dropdown-item" onClick={() => props.publishSelection('a month ago')}>a month ago</span>
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-outline-success bg-white dropdown-toggle" id="sortBydropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.sortByStatus}
              </button>

              <div className="dropdown-menu" aria-labelledby="sortBydropdown">
                <span className="dropdown-item" onClick={() => props.sortSelection('relevancy')}>relevancy</span>
                <span className="dropdown-item" onClick={() => props.sortSelection('popularity')}>popularity</span>
                <span className="dropdown-item" onClick={() => props.sortSelection('publishedAt')}>publishedAt</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-4">
            <button className="btn btn-outline-success bg-white btn-block" onClick={props.submitFilter}>Filter</button>
          </div>

      </div>
    </div>

    </nav>

  )
}

export default Navbar;
