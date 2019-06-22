import React from "react";

function Display(props) {
  return (
    <>
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes: {props.strikes}</h2>
    </>
  );
}

export default Display;
