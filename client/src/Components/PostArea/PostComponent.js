import React from 'react'
import './PostComponent.css'
import moment from 'moment'

// function classItt(index) {
//
//   switch (index) {
//     case 0:
//       return "col-12 col-md-9 col-xl-6 col-lg-8 pb-3"
//     case 1:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 order-4"
//     case 2:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 pb-3"
//     case 3:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 order-6 order-sm-1 mb-3"
//     case 4:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 pb-3"
//     case 5:
//       return "col-12 col-md-9 col-xl-6 col-lg-8 pb-3 order-6"
//     case 6:
//       return "col-12 col-md-9 col-xl-6 col-lg-8 pb-3"
//     case 7:
//       return "col-6 col-md-3 col-xl-3 col-lg-8"
//     case 8:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 pb-3"
//     case 9:
//       return "col-6 col-md-3 col-xl-3 col-lg-8"
//     case 10:
//       return "col-6 col-md-3 col-xl-3 col-lg-4 pb-3"
//     case 11:
//       return "col-12 col-md-9 col-xl-6 col-lg-8 pb-3"
//     default:
//       return null
//   }
// }

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
              <img className="pl-3" src={require('./face.png')} alt='So.icon'/>
              <img className="pl-3" src={require('./twit.png')} alt='So.icon'/>
              <img className="pl-3" src={require('./link.png')} alt='So.icon'onClick={() => copyLink(props.url)} />
            </li>
          </ul>
        </div>
      </div>
  )

  // const cardList = value.map((props, index) =>
  //     <div className={classItt(index)} key={index}>
  //       <a className="no-deco" href={props.url}>
  //         <div className="card card-image text-white" style={{backgroundImage: `linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 2%, rgba(6,6,6,0.62) 41%, rgba(0,0,0,0) 100%), url(${props.urlToImage})`,backgroundOrigin: 'border-box', backgroundSize: (classItt(index).slice(0,5)==="col-6")?'150% 100%':'120% 130%', backgroundPosition:(classItt(index).slice(0,5)==="col-6")?'50% 95%':'0' }}>
  //         <div className="card-body">
  //           <p className="font-italic text-capitalize"><small>{(props.author===null || props.author.indexOf("http") !==-1)? props.source.name : props.author.toLowerCase()}</small></p>
  //           <h6 className="card-title">{props.title.slice(0, 71)}</h6>
  //         </div>
  //         <div className="card-link d-flex justify-content-end">
  //           <p className="pr-3"><small>{moment(props.publishedAt).format('MMM. DD')}</small></p>
  //         </div>
  //       </div>
  //       </a>
  //     </div>
  // )

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
