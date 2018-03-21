import React from "react";
import "./MarvelCard.css";

const MarvelCard = props => (
    <div className="marvel" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} width="200" height="300"/>
        </div>
    </div>
);

export default MarvelCard;
