import React, { Component } from 'react'

export default class ListView extends Component {
  render() {
      const {query, showingPlaces, reset, markers, toogleReset, showList}=this.props
    return (
      <div className="App">
          <ul className="list-group">
              { query && (
                  showingPlaces.map( place =>(
                      <li key={place.venue.name} className="list-group-item list"><a href="#map" onClick={()=>this.props.animate()}>{place.venue.name}</a></li>
                      
                  ))
              ) }
              { reset===true && (
                              <a  href="#" onClick={()=>{
                                  markers.map(marker => marker.setVisible(true))
                                  toogleReset()
                                  showList()
                              }}>Reset List</a>
                            )}
          </ul>
        
      </div>
    )
  }
}
