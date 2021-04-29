import React from "react";
import "./wrapper.css";

function Wrapper(props) {
  return <main style={{margin:"4% auto", alignItems:"center"}}>{props.children}</main>;
}

export default Wrapper;