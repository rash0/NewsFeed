import React from 'react'
import moment from 'moment';

const splitAuthorfromTitle = (value) => {
  var title = value
  var parts = title.split('-');

  var author = parts.pop();
  var authorLimited = author.slice(0, 19)

  var restofTitle = parts.join('-');

  var final = [restofTitle, authorLimited]
  return final
}

const LiveComponent = (props) => (
    <div>
      <div className="row pl-3 pr-2">
        <div className="col-12">
          <p><a className="text-white" style={{fontSize: '15px'}} href={props.url}>{splitAuthorfromTitle(props.title)[0]}</a></p>
        </div>
        <div className="col-6 my-0">
          <p className="text-muted">{splitAuthorfromTitle(props.title)[1]}</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="text-muted">{moment(props.time).fromNow()}</p>
        </div>
      </div>
      <hr />
    </div>
  )

export default LiveComponent;
