import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";

export let ContextData = createContext();

const Parent = () => {
  let data = "Hello World";
  let products = [
    { id: 1, title: "Mobile" },
    { id: 2, title: "Laptop" },
  ];

  return (
    <div>
      <ContextData.Provider value={{ data, products }}>
        <ChildA />
      </ContextData.Provider>
    </div>
  );
};

export default Parent;
