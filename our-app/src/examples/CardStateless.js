import React from "react";

const styles = {
    border:"1px solid black",
    margin:"20px",
    textAlign:"center"
}

const CardStateless = (props) => {
    const fullName = "Card Stateless component - functional component"


    return (
        <section style = {styles}>
            <h1>Hello , {fullName}</h1>
            <p>Some props parameters {props.food}</p>
        </section>
    )

}

export default CardStateless;