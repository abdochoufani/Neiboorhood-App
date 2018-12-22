import React, { Component } from 'react'

export default class List extends Component {
        
        state = {
          toggle: false,
        };
        
      
    
      toggle=()=>{
        this.setState({ toggle: !this.state.toggle })
      }




  render() {
    const show = (this.state.toggle) ? "show" : "" 
      const {place,updateQuery, toogleReset}=this.props
    return (
                <div>
                    <button key={place.venue.id} className="list-group-item list" onClick={this.toggle}><i>{place.venue.name}</i></button>
                    
                    <div className={"collapse " + show}>  
                        <div className="card card-body"> 
                            <h2>{place.venue.name}</h2>
                            <p> Address: {place.venue.location.address}</p>
                            <p> {place.venue.categories[0].name}</p> 
                            <a href="#map" onClick={()=>{
                              updateQuery(place.venue.name)
                              toogleReset()
                            }}>Show on map</a>
                           
                        </div>
                    </div>
                </div>
    
    )
  }
}
