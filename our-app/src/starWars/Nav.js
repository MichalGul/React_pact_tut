import React, {Component, Fragment} from "react";
import {
    BrowserRouter as Router,
    Link, NavLink
} from "react-router-dom";





class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        const savedVehicleCollection = localStorage.getItem(`vehicles`)
        if(savedVehicleCollection) { //prevent  unnecessary fetch
            this.setState({
                vehicles: JSON.parse(savedVehicleCollection)
            })
        } else {
            fetch(`https://swapi.dev/api/vehicles/`)
                .then(response => response.json())
                .then(data => {
                    this.setState({vehicles: data.results})
                    localStorage.setItem('vehicles', JSON.stringify(data.results))
                })

        }


    }

    render () {
      return (
            <ul>
                {this.state.vehicles.map((vehicle, index) => {
                    const id = vehicle.url.split('/')[5] //"http://swapi.dev/api/vehicles/6/
                    return (
                        <li key={index}>
                            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/vehicle/${id}`}>
                                {vehicle.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
          );
    }
}

export default Nav;
