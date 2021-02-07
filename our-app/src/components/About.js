import React from "react";

const About = ({match}) => {
    let url_param = match.params.userId || 'page'
    return (
        <h2>About {url_param}</h2>
    )
}

export default About