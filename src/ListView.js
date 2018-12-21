import React, { Component } from 'react'

export default class ListView extends Component {
  render() {
      const {query, showingPlaces}=this.props
    return (
      <div className="App">
          <ul className="list-group">
              { query && (
                  showingPlaces.map( place =>(
                      <li className="list-group-item list">{place.venue.name}</li>
                  ))
              ) }
          </ul>
        
      </div>
    )
  }
}
