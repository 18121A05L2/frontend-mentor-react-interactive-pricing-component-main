import React from "react";

export default function TopBox(){

  function handleSlider(){

  }
  return (
    <div className="topbox">
        <div className="toptop">
            <h3> 100 Pageviews</h3>
            <p className="price"> <h1> $ 20  </h1>/month</p>
        </div>
        <input id="slider" type="range" min="1" max="100" step="10" value="60" onchange={handleSlider}></input>
        <div className="topbottom">
            <p>Monthly Billing</p>
            <p>Yearly Billing</p>
            <p className="discount">25% discount</p>
        </div>
    </div>
  );
}
