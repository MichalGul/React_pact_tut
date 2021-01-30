import React, {Component} from 'react'
import "./Card.css"

class Card extends Component{
    constructor(props) {
        super(props);
        //Stan komponentu
        this.state = {
            firstName: "Death Knight",
            initials: "DK",
            info: [
                {title: "Birth" , text: ""   },
                {title: "Addres" , text: "sdasd"   },
                {title: "Phone" , text: "sda"   }
            ]

        }
    }


    render() {
        const {
            firstName,
            initials,
            info
        } = this.state

        return (
            <React.Fragment>
                <section className="card-container">
                    <header>
                        <span initial={initials}></span>
                        <h2>{firstName}</h2>
                    </header>

                    <main>
                        <ul>
                            {info.map((row, index) => {
                                return (
                                    <li key={index}>
                                        <span>{row.title}</span>
                                        {row.text ? row.text : "N/A"}
                                    </li>
                                )
                            })}
                        </ul>
                    </main>

                </section>
            </React.Fragment>


        )
    }
}
export default Card;

