import React from 'react'


class ListView extends React.Component{
    


    ListView=()=>{
        if (this.props.showingPlaces.length>0){
           return  ( <div>
                    <ul className="list-group">
                    {this.props.showingPlaces.map(place=>(
                        <li className="list-group-item" key={place.venue.id}><a href="#">{place.venue.name}</a></li>
                    ))}
                    </ul>
                </div>
           )                
        } else{
            return (
                <div>
                <ul className="list-group">
                {this.props.places.map(place=>(
                    <li className="list-group-item" key={place.venue.id}><a href="#">{place.venue.name}</a></li>
                ))}
                </ul>
            </div>
            )
        }
    }
    


    render(){
        const {places,query,updateQuery,clearQuery,showingPlaces}=this.props
  
        return (
            <div>
                <div>
                     <div className="input-group">
                        <input  type='text'
                                className="form-control input-lg"
                                placeholder='Search place'
                                value={query}
                                onChange={(event)=> updateQuery(event.target.value)}/>

                        </div>
                    <div>
            {showingPlaces.length!== places.length && (
                <div>
                    <span> Now showing {showingPlaces.length} of {places.length} contacts </span>
                    <button onClick={(event)=>clearQuery()}> Show all</button>
                </div>
            )}
            </div>
            { this.ListView()}
            </div>
           </div> 
        )
    }
}
export default ListView