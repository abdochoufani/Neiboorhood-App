import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
      const {  updateQuery } =this.props
    return (
   <div> 
         <div className="container">
         <br/>
	    <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                <form className="card card-sm" role="search form" aria-labelledby="search list">
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>                    
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search" onChange={(event)=> updateQuery(event.target.value)}></input>
                        </div> 
                        <div className="col-auto">
                            <button className="btn btn-lg list" type="submit" aria-labelledby="search" >Search</button>
                        </div>            
                    </div>
                </form>
            </div>             
        </div>
    </div>
       <div>
       </div>
  </div>  
    )
  }
}
