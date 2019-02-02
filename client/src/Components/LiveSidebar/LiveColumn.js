import React from 'react'
import LiveComponent from './LiveComponent'
import './LiveComponent.css'


function LiveColumn(props) {
  const res = props.response;
  const listItems = res.map((res, index) =>
    <LiveComponent
      key={index}
      title={res.title}
      author={res.author}
      url={res.url}
      time={res.publishedAt}/>

  )
  return (
    <div className={ (!props.menustate) ? "bg-dark LiveColumn" : "bg-dark LiveColumn on"}>
      <div className="row bg-dark pt-2 pl-3">
        <div className="col-12">
          <span className="mr-2" />
          <h5 className="navbar-brand text-white">Headlines</h5>
        </div>
      </div>
      <hr />

      {listItems}

    </div>
  );
}

export default LiveColumn;
