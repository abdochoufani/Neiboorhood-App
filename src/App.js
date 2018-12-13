import React, { Component } from 'react';
import './App.css';

class App extends Component {


  componentDidMount(){
    this.renderMap()
  }

  renderMap=()=>{
  loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCjv-FGIJvul6AZgtTJocMdfmJ38LiKBkQ&callback=initMap")
  window.initMap=this.initMap
  }

  initMap=()=> {
   const  map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }


  render() {
    return (
      <div className="App">
        <div id="map"></div>
      </div>
    );
  }
}

function loadScript(src){
  var index=window.document.getElementsByTagName('script')[0]
  var script=window.document.createElement('script')
  script.src=src
  script.async=true
  script.defer=true
  index.parentNode.insertBefore(script,index)
}

export default App;
