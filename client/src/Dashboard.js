import React from "react";

function Dashboard(props) {
  return (
    <>
      <button onClick={props.strikesHelper}>Strike</button>
      <button onClick={props.ballsHelper}>Ball</button>
      <button onClick={props.foulsHelper}>Foul</button>
      <button onClick={props.hitHelper}>Hit</button>
    </>
  );
}

export default Dashboard;
