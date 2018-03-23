import React, { Component } from 'react';
import House from './../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            houses: []
         }
    }

    componentDidMount(){    /// this runs the get houses method once the page mounts
this.getHouses();
    }
    componentDidUpdate(){           /// this is just showing me what the houses array in state looks like after the getHouses method was run
        console.log(this.state.houses);
    }


    getHouses() {    /// this is getting the houses information from my endpoint and updating state to show that information
        axios.get( '/api/get_houses' )
            .then( response => {
                console.log( response )
                this.setState({
                    houses: response.data
                })
            } )
    }
    render() { 
        return ( 
            <div>
                 {this.state.houses.map(function(house, i) {        //// this is mapping over the houses array in state and displaying each houses information
                  return <House house={house.propertyname} 
                  img={house.imgurl}
                  address={house.address}
                  city={house.city}
                  state={house.state}
                  zipcode={house.zipcode}
                  mortgage={house.monthlymortgage}
                  rent={house.desiredrent}
                  key={i.id}/>;
                  })}
               <Link to='/Wizard'> <button>Add New Property</button></Link>
            </div>
         )
    }
}
 
export default Dashboard;