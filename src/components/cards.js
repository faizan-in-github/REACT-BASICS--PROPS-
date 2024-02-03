import React from "react"
import "./card.css"

function Card(props){
    return ( 
        <div className="container">
        <div className="card">
            <div className="image">
                <img src={props.src} height="300px"
                    width="280px" alt="Biriyani" />

            </div>
            <div className="name">
                <div className="div">
                    <p>{props.name}</p>
                </div>

            </div>
            <div className="description">
                <div className="div">

                    <p>{props.description}

                    </p>
                    
                </div>
            </div>


        </div>
    </div>
    );

 }

 export default Card;