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
    
    
    
    <button onClick={()=> {props.deleteHouse(props.i.id)}}>Delete</button>
  </div>
  );
}

export default House;



//// need to pass delete house method as props use onclick in the delete button to invoke the method
