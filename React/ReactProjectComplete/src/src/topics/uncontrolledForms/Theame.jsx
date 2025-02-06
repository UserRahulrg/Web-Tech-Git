import React, { useRef } from "react";

const Theame = () => {
  let theameRef = useRef();
  let light = () => {
    // document.body.style.backgroundColor = "gainsboro";
    // document.body.style.color = "brown";

    theameRef.current.style.backgroundColor = "gainsboro";
    theameRef.current.style.color = "brown";
  };
  let dark = () => {
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "gainsboro";

    theameRef.current.style.backgroundColor = "black";
    theameRef.current.style.color = "gainsboro";
  };
  return (
    <div ref={theameRef} style={{height:"100vh"}}>
      <h1>Hello World</h1>
      <span>light</span>
      <input type="radio" name="color" onClick={light} />
      <br />
      <br />
      <span>dark</span>
      <input type="radio" name="color" onClick={dark} />
    </div>
  );
};

export default Theame;
