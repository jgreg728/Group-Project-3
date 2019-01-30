import React from "react";
import "./style.css";

function SearchCard(props) {
  return (
    <div className="card">
      <img alt={props.name} src={props.image}
        onClick={() => {
          props.clickedCard(props.id)
        }}
      />

      <div className="content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
}

export default SearchCard;