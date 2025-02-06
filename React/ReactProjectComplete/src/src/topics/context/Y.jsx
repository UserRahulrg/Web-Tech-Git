import { useContext } from "react";
import { StoreRoom } from "./ContextApi";
const Y = () => {
  let val = useContext(StoreRoom);
  return (
    <div>
      <h1>Y Component {val}</h1>
    </div>
  );
};

export default Y;
