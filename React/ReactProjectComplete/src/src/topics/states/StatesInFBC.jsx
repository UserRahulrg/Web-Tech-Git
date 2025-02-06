import { useState } from "react";

const StatesInFBC = () => {
  let [state, setState] = useState("hello");
  function change() {
    setState("Byee");
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={change}>change</button>
    </div>
  );
};

export default StatesInFBC;
