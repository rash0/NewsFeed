import React from 'react'
import './PostComponent.css'
import moment from 'moment'

function classItt(index) {

  switch (index) {
    case 0:
      return "col-12 col-md-9 col-xl-6 col-lg-6 pb-3"
    case 1:
      return "col-6 col-md-3 col-xl-3 col-lg-3"
    case 2:
      return "col-6 col-md-3 col-xl-3 col-lg-3 pb-3"
    case 3:
      return "col-6 col-md-3 col-xl-3 col-lg-3 order-md-1"
    case 4:
      return "col-6 col-md-3 col-xl-3 col-lg-3 order-md-1 pb-3"
    case 5:
      return "col-12 col-md-9 col-xl-6 col-lg-6 order-xl-1 pb-3"
    case 6:
      return "col-12 col-md-9 col-xl-6 col-lg-6 order-xl-1 pb-3"
    case 7:
      return "col-6 col-md-3 col-xl-3 col-lg-3"
    case 8:
      return "col-6 col-md-3 col-xl-3 col-lg-3 pb-3"
    case 9:
      return "col-6 col-md-3 col-xl-3 col-lg-3 order-md-1"
    case 10:
      return "col-6 col-md-3 col-xl-3 col-lg-3 order-md-1 pb-3"
    case 11:
      return "col-12 col-md-9 col-xl-6 col-lg-6 pb-3"
    default:
      return null
  }
}

function PostComponent(props) {
  const value = props.res

  const cardList = value.map((props, index) =>
      <div className={classItt(index)} key={index}>
        <a className="no-deco" href={props.url}>
          <div className="card card-image text-white" style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.79) 0%, rgba(255,255,255,0.18) 100%, rgba(255,255,255,0.17) 100%), url(${props.urlToImage})`,backgroundOrigin: 'border-box', backgroundSize: (classItt(index).slice(0,5)==="col-6")?'150% 100%':'120% 130%', backgroundPosition:(classItt(index).slice(0,5)==="col-6")?'50% 95%':'0' }}>
          <div className="card-body">
            <p className="font-italic text-capitalize"><small>{(props.author===null || props.author.indexOf("http") !==-1)? props.source.name : props.author.toLowerCase()}</small></p>
            <h6 className="card-title">{props.title.slice(0, 71)}</h6>
          </div>
          <div className="card-link d-flex justify-content-end">
            <p className="pr-3"><small>{moment(props.publishedAt).format('MMM. DD')}</small></p>
          </div>
        </div>
        </a>
      </div>
  )

  return(
    <div>
      <h5 className="pl-3">
        <img className="mb-2 mr-1 mt-2" src={require('./n.svg')} width="28" height="28" alt="posts" />
        Articles
      </h5>

      <div className="row no-gutters Postbody-size">
        {cardList}
      </div>

    </div>
  )

}



export default PostComponent;


// <hr style={{ width: '98px', marginRight: '55.7rem', borderWidth:'2px'}}/>
