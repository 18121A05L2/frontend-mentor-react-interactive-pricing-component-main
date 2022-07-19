import React from "react";
import TopBox from "./TopBox";
import BottomBox from "./BottomBox"

export default function App(){
  return (
    <div>
      <header>
      <h1>Simple, traffic-based pricing</h1>
      <h4>Sign-up for our 30-day trial. No credit card required.</h4>
      </header>

      <div className="box">
        <TopBox />
        <BottomBox/>
      </div>

    </div>);
}
