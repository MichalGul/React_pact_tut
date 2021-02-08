import React, {Component} from 'react';

class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: {}
        }
    }

    componentDidMount() {
        const vehicleId = this.props.match.params.vehicleId
        const savedVehicle = localStorage.getItem(`vehicle-${vehicleId}`)

        if(savedVehicle) { //prevent  unnecessary fetch
            this.setState({
                vehicle: JSON.parse(savedVehicle)
            })
            return
        }

        console.log(vehicleId)
        fetch(`https://swapi.dev/api/vehicles/${vehicleId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({vehicle: data})
                localStorage.setItem(`vehicle-${vehicleId}`, JSON.stringify(data))
                })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevStateSting = JSON.stringify(prevProps.match.params.vehicleId)
        const updatedStateString = JSON.stringify(this.props.match.params.vehicleId)
        //Compare props if not the same perform getch
        if (prevStateSting !== updatedStateString) {
            const vehicleId = this.props.match.params.vehicleId
            const savedVehicle = localStorage.getItem(`vehicle-${vehicleId}`)
            if(savedVehicle) {
                this.setState({
                    vehicle: JSON.parse(savedVehicle)
                })
                return
            }

            fetch(`https://swapi.dev/api/vehicles/${vehicleId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({vehicle: data})
                    localStorage.setItem(`vehicle-${vehicleId}`, JSON.stringify(data))
                })
        }
    }

    render() {
        const {vehicle} = this.state
        return (
            <>
                <h2>Name: {vehicle.name}</h2>
                <p>Model {vehicle.model}</p>
                <p>Manu: {vehicle.manufacturer}</p>
                <p>URL: {vehicle.url}</p>
            </>
        );
    }
}

export default Vehicle;