import { useRef } from "react";

const Uncontrolled = () => {
  //   console.log(useRef());//{current: undefined}
  let demoRef = useRef();

  function bgChange() {
    console.log("bg Change");
    console.log(demoRef.current);
    demoRef.current.style.backgroundColor = "red";
  }
  return (
    <div>
      <h1 ref={demoRef}>Controlled Forms</h1>
      <button onClick={bgChange}>click</button>
    </div>
  );
};

export default Uncontrolled;
