import React from "react";
import "../App.css";

function Banner(props) {
  return (
    <div className="banner text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Banner;
