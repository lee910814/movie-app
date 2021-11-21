
import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  state = {
    isLoading : true,
    movies :[]
  };

  getMovies = async() => {
    const movies = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff0a4d986db525f6d3fa4581401e1218&targetDt=20210101")
  }
  componentDidCatch(){
   this.getMovies();

  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "haha"}</div>
  }

}
export default App;
