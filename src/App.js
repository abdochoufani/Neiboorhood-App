import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  state={
    places:[]
  }

  componentDidMount(){
    this.getPlaces()
  }

  renderMap=()=>{
  loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCjv-FGIJvul6AZgtTJocMdfmJ38LiKBkQ&callback=initMap")
  window.initMap=this.initMap
  }
    //Fetch Places nearBy using Foresquare Places API
  getPlaces =()=>{
    const request="https://api.foursquare.com/v2/venues/explore?"
    const para ={
      client_id:"THNLREOGUI3VBQ2UA0U2GLJTAGBVBP03Z23XV5LQODRUAURI",
      client_secret:"VM4TNNUNB2CRYBOIWL1IZLZLOK2GPRHLBUUECQEIM0RQGZXX",
      query:"food",
      near:"Ottawa",
      v:20181213
    }
    axios.get(request + new URLSearchParams(para))
    .then(r =>{
      this.setState({places:r.data.response.groups[0].items},this.renderMap())
    }).catch(err=>{
      alert(err)
    })
  }

  initMap=()=> {
   const  map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.421532, lng: -75.697189},
      zoom: 13
    });

    this.state.places.map(place => {
      const marker = new window.google.maps.Marker({
        position: {lat:place.venue.location.lat , lng:place.venue.location.lng},
        map: map,
        title: 'Hello World!'
      });

      const contentString= 
      `<div> 
        <h2>${place.venue.name}</h2>
        <p> Address: ${place.venue.location.address}</p>
        <p> ${place.venue.categories[0].name}'</p> 
        <img srcSet=${place.venue.categories[0].icon.prefix} + 'alt="icon">
      </div>`
      

      const infowindow = new window.google.maps.InfoWindow({
        content: contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    })
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
