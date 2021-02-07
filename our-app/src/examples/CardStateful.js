import React, {Component} from "react";


const styles = {
    border:"1px solid black",
    margin:"20px",
    textAlign:"center"
}

class CardStateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName:"Component Statefull - Class component"
        }
    }

    //its can have life cycle methods
    //componentDidMount() {}

    render() {
        return (
            <section style = {styles}>
                <h1>Hello, {this.state.fullName}</h1>
                <p>Some props parameters: {this.props.food}</p>
            </section>
        )
    }
}

export default CardStateful