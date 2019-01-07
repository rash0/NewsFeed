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
    childinputKeyword: ''
  }


  componentDidMount() {
    this.weatherRequest()
    // this.liveColRequest()
    this.articleRequest()
    // if(window.innerWidth < 991){
    //   this.setState({
    //     livemenu:false
    //   })
    // }
    // this.checkWidth = () => {
    //    const match = window.matchMedia(`(max-width: 991.98px)`);
    //    (match.matches) ? this.setState({livemenu: false}) : this.setState({livemenu: true})
    //    return match.matches
    //  }
    // window.addEventListener("resize", this.checkWidth);
   }

  componentWillUnmount() {
     // window.removeEventListener("resize", this.checkWidth);
  }

  async articleRequest() {
    try{
      const s = this.state
      const keyword = (s.childinputKeyword !== '')? s.childinputKeyword : 'Germany'
      const from = (s.navPublishTime==='7 days ago')?
      moment().subtract(7, 'days').format('YYYY-MM-DD') :(s.navPublishTime==='15 days ago')?
      moment().subtract(16, 'days').format('YYYY-MM-DD') : (s.navPublishTime==='a month ago' || s.navPublishTime==='Published')?
      moment().subtract(1, 'months').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
      const to = moment().format('YYYY-MM-DD')
      const sort = (s.navSortBy !== 'Sort by')? s.navSortBy : 'relevancy'

      const response = await fetch(`/ar/${keyword}/${this.state.pageNumber}/${from}/${to}/${sort}`);
      const res = await response.json();
      await this.setState({
          articleResponse: res.articles,
          articleisLoading: false
      })
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
    if(window.innerWidth < 991){
      if(this.state.livemenu){
        this.setState({
          livemenu: false,
          modalstatus: "modal off",
        })
      }else{
        this.setState({
          livemenu: true,
          modalstatus: "modal"
        })
      }
    }
  }

  incPageNumber = (e) => {
    e.preventDefault();
    this.setState({
      pageNumber: this.state.pageNumber+1
    }, () => this.articleRequest())
  }

  LoadingButtonIfnoResult = () => {
    if(this.state.articleResponse.length===0 && this.state.articleisLoading===false){
      return <h4 className="text-center my-5 py-5">Sorry, there is no results that matches your query :( </h4>
    }else{
      return <button type="button" onClick={(e) => this.incPageNumber(e)} className="btn btn-outline-secondary btn-lg btn-block">Load More</button>
    }
  }

  pageLoading = () => {
    if(this.state.articleisLoading===true){
      return <Load />
    }else{
      return null
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
    return (
      <div className="App">
        {/*{this.pageLoading()}*/}
        <Navbar
            sortByStatus={this.state.navSortBy}
            publishTimeStatus={this.state.navPublishTime}
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
              <PostComponent res={this.state.articleResponse} />
              {this.LoadingButtonIfnoResult()}
            </main>
            <aside className="col-3 col-xl-3 col-lg-4 d-none d-lg-block">
              <Weather res={this.state.weatherRequest}/>
              <LiveColumn
                response={this.state.liveColResponse}
                menustate={this.state.livemenu} />
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
