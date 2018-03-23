import React, { Component } from "react";
function House(props) {
  return (
  <div>
    <h2>{props.house}</h2>
    <span>{props.address}</span>
    <span>{props.city}</span>
    <span>{props.img}</span>
    <span>{props.state}</span>
    <span>{props.zipcode}</span>
    <span>{props.mortgage}</span>
    <span>{props.rent}</span>
    
    
    <button>Delete</button>
  </div>
  );
}

export default House;