import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggle: false
        };
        this.toggle = this.toggle.bind(this);
      }
    
      toggle(){
        this.setState({ toggle: !this.state.toggle })
      }


  render() {
    const show = (this.state.menu) ? "show" : "" 
      const {places}=this.props
    return (
      <div className="container-fluid">
        <ol className="lsit-group">
            {places.map(place =>(
                <div>
                    <button key={place.venue.id} className="list-group-item list" onClick={this.toggle}><i>{place.venue.name}</i></button>
                    <div className={"collapse " + show}>  
                        <div className="card card-body"> 
                     <h2>${place.venue.name}</h2>
                     <p> Address: ${place.venue.location.address}</p>
                     <p> ${place.venue.categories[0].name}'</p> 
                    </div>
                </div>
            </div>
            ))}
        </ol>
      </div>
    )
  }
}
