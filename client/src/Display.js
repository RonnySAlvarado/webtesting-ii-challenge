import React from "react";

function Display(props) {
  return (
    <>
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes:</h2>
      {props.strikes}
    </>
  );
}

export default Display;
