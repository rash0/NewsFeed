import React, { Component } from 'react';
import PostComponent from './Components/PostArea/PostComponent'
import LiveColumn from './Components/LiveSidebar/LiveColumn'
import Menu from './Components/Menu/Menu'
import Navbar from './Components/Navbar/Navbar'
import Load from './Components/LoadComponent/Load'
import Weather from './Components/Weather/Weather'

import moment from 'moment'

import './App.css';

class App extends Component {
  state = {
    articleResponse: [],
    liveColResponse: [],
    weatherRequest: [],
    livemenu: false,
    modalstatus: "modal off",
    pageNumber: 1,
    articleisLoading: true,
    liveisLoading: true,
    navSortBy: 'Sort by',
    navPublishTime: 'Published',
    childinputKeyword: '',
    alertStatus: false
  }


  componentDidMount() {
    this.weatherRequest()
    this.liveColRequest()
    this.articleRequest()
   }

  async articleRequest() {
     try{
       const { childinputKeyword, navPublishTime, navSortBy, pageNumber } = this.state
       const keyword = (childinputKeyword !== '')? childinputKeyword : 'Germany'
       const from = (navPublishTime==='7 days ago')?
       moment().subtract(7, 'days').format('YYYY-MM-DD') :(navPublishTime==='15 days ago')?
       moment().subtract(16, 'days').format('YYYY-MM-DD') : (navPublishTime==='a month ago' || navPublishTime==='Published')?
       moment().subtract(1, 'months').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
       const to = moment().format('YYYY-MM-DD')
       const sort = (navSortBy !== 'Sort by')? navSortBy : 'relevancy'

       const response = await fetch(`/ar/${keyword}/${pageNumber}/${from}/${to}/${sort}`);
       const res = await response.json();
       await this.setState(prevState => ({
           articleResponse: (prevState.articleResponse.length===0)? res.articles : [...prevState.articleResponse, ...res.articles],
           articleisLoading: false
       }))
     } catch (error) {
     console.log('articleRequest error is' + error );
     }
   }
  async liveColRequest() {
    try{
      const response = await fetch('/lr');
      const res = await response.json();
      await this.setState({
          liveColResponse: res.articles,
          liveisLoading: false
      })
    } catch (error) {
    console.log('liveColRequest error is' + error );
    }
  }
  async weatherRequest() {
    try{
      const response = await fetch('/w');
      const res = await response.json();
      await this.setState({
          weatherRequest: res,
      })
    } catch (error) {
    console.log('weatherRequest error is' + error );
    }
  }

  childMenuClick = () => {
    const { livemenu } = this.state
      if(!livemenu){
        this.setState({
          livemenu: true,
          modalstatus: "modal",
        })
      }else{
        this.setState({
          livemenu: false,
          modalstatus: "modal off"
        })
      }
    }

  incPageNumber = (e) => {
    const { pageNumber } = this.state
    e.preventDefault();
    this.setState({
      pageNumber: pageNumber + 1
    }, () => this.articleRequest())
  }

  LoadingButtonIfnoResult = () => {
    const { articleisLoading, articleResponse } = this.state

    if(articleResponse.length===0 && !articleisLoading){
      return <h4 className="text-center my-5 py-5">Sorry, there is no results that matches your query :( </h4>
    }else{
      return <button type="button" onClick={(e) => this.incPageNumber(e)} className="btn btn-outline-secondary btn-lg btn-block">Load More</button>
    }
  }

  pageLoading = () => {
    const { articleisLoading } = this.state
    if(articleisLoading){
      return <Load />
    }
  }

  childsortSelection = (e) => {
    this.setState({
      navSortBy: e
    })
  }

  childpublishSelection = (e) => {
    this.setState({
      navPublishTime: e
    })
  }

  childinputKeyword = (e) => {
    this.setState({
      childinputKeyword: e.target.value
    })
  }

  render() {
    const { navSortBy, navPublishTime, articleResponse, weatherRequest, liveColResponse, livemenu } = this.state
    return (
      <div className="App">
        {this.pageLoading()}
        <Navbar
            sortByStatus={navSortBy}
            publishTimeStatus={navPublishTime}
            sortSelection={this.childsortSelection}
            publishSelection={this.childpublishSelection}
            inputKeyword={this.childinputKeyword}
            submitFilter={() => this.articleRequest()}
        />
        <div className="container-fluid">
          <Menu
            toggleLiveMenu={this.childMenuClick}
          />
          <div className={this.state.modalstatus} />
          <div className="row">
            <main className="col-12 col-xl-9 col-lg-8">
              <PostComponent
                res={articleResponse}/>
              {this.LoadingButtonIfnoResult()}
            </main>
            <aside className="col-3 col-xl-3 col-lg-4 d-none d-lg-block">
              <Weather res={weatherRequest}/>
              <LiveColumn
                response={liveColResponse}
                menustate={livemenu} />
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
