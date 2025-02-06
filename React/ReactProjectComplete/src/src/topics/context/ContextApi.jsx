import { createContext } from "react";

export let StoreRoom = createContext();
const ContextApi = (x) => {
  console.log(x);

  let data = "hello world";

  return <StoreRoom.Provider value={data}>{x.children}</StoreRoom.Provider>;
};

export default ContextApi;
