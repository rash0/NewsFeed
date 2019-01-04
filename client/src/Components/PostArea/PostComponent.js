import React from 'react'
import './PostComponent.css'
import moment from 'moment'

function PostComponent(props) {
  const value = props.res

  const cardList = value.map((props, index) =>
        <div className="card" key={index} style={{width: '18rem'}}>
          <img src={props.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title"><a href={props.url} className="text-decoration-none text-dark">{props.title.slice(0, 71)}</a></h6>
            <p className="text-capitalize"><small>{(props.author===null || props.author.indexOf("http") !==-1)? props.source.name : props.author.toLowerCase()} | {moment(props.publishedAt).format('MMM. DD')}</small></p>
            <p className="card-text">{props.description.slice(0, 100)}...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src="https://img.icons8.com/ios/23/000000/like.png" />
              <img className="pl-3" src="https://img.icons8.com/ios/23/000000/facebook.png" />
              <img className="pl-3" src="https://img.icons8.com/ios/23/000000/twitter.png" />
              <img className="pl-3" src="https://img.icons8.com/ios/23/000000/link.png" />
            </li>
          </ul>
        </div>
  )

  return(
    <div>
      <h5 className="pl-3">
        <img className="mb-2 mr-1 mt-2" src={require('./n.svg')} width="28" height="28" alt="posts" />
        Articles
      </h5>

      <div className="row">
        {cardList}
      </div>

    </div>
  )

}



export default PostComponent;


// <hr style={{ width: '98px', marginRight: '55.7rem', borderWidth:'2px'}}/>
