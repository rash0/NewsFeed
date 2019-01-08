import React from 'react'
import './Navbar.css'

function Navbar(props) {

  return (
    <div className="mb-3">
      <nav className="navbar navbar-light mb-4">
        <img className="" src={require('./set.svg')} width="20" height="20" data-toggle="collapse" data-target="#CollapseContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" alt="filter-Menu" />

        <img className="navbar-brand mx-auto" src={require('./N-Logo.png')} width="140" alt="Logo" />
      </nav>
      <div className="collapse navbar-collapse mx-auto p-2" id="CollapseContent">
        <form>
          <div className="row no-gutters">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <input className="form-control w-100" type="search" onChange={props.inputKeyword} placeholder="e.g 'France'" aria-label="Search" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2 my-sm-0 my-md-0 d-flex justify-content-start">
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
                  <span className="dropdown-item" onClick={() => props.sortSelection('Relevancy')}>Relevancy</span>
                  <span className="dropdown-item" onClick={() => props.sortSelection('Popularity')}>Popularity</span>
                  <span className="dropdown-item" onClick={() => props.sortSelection('PublishedAt')}>Published at</span>
                </div>
              </div>
            </div>
            <div className="col-12  col-sm-12 col-md-4 col-lg-5">
              <button className="btn btn-outline-success bg-white btn-block" onClick={props.submitFilter}>Filter</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Navbar;
