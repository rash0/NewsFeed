import React from 'react'
import './PostComponent.css'
import moment from 'moment'

function copyLink(str){
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  alert("Copied!")
}

function PostComponent(props) {
  const value = props.res

  const cardList = value.map((props, index) =>
      <div className="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 mx-auto" key={index}>
        <div className="Postcard card mb-3">
          <img src={props.urlToImage} className="img-fluid h-50" alt="..." />
          <div className="card-body">
            <h6 className="card-title"><a href={props.url} className="text-decoration-none text-dark" style={{letterSpacing: '-1px'}}>{props.title.slice(0, 54)}</a></h6>
            <p className="text-capitalize text-muted" style={{marginBottom: '-0.1px'}}><small>{(props.author===null || props.author.indexOf("http") !==-1)? props.source.name : props.author.toLowerCase()} | {moment(props.publishedAt).format('MMM. DD')}</small></p>
            <p className="card-text">{props.description.slice(0, 35)}...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={require('./like.png')} alt='So.icon'/>
              <img className="pl-3" src={require('./face.png')} alt='So.icon' onClick={props.shareButtonAlert}/>
              <img className="pl-3" src={require('./twit.png')} alt='So.icon' onClick={props.shareButtonAlert}/>
              <img className="pl-3" src={require('./link.png')} alt='So.icon' onClick={() => copyLink(props.url)} />
            </li>
          </ul>
        </div>
      </div>
  )

  return(
    <div>
      <h5 className="">
        <img className="mb-2 mr-1 mt-2" src={require('./ArticleLogo.svg')} width="28" height="28" alt="posts" />
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
