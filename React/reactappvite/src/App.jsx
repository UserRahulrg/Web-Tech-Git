import React from "react";
//import Fbc from "./typesofcomponent/Fbc/Fbc";
//import Cbc from "./typesofcomponent/Fbc/Cbc/Cbc";
//import StatesInFbc from "./states/StatessinFbc";
//import CounterInFbc from "./typesofcomponent/CounterInFbc";
//import CartBtn from "./states/CartBtn";
//import PropsParent from "./props/PropsParent";
//import PropsDemoPage from "./props/PropsDemoPage";
//import Database from "./propsDrilling/propsDrillingChild1.jsx/Database";
import Inline from "./reactCss/Inline";
import MyntraNav from "./reactCss/MyntraNav";
//import ControlledForm from "./controlledForms/ControlledForm1";
import ControlledForm2 from "./controlledForms/ControlledForm2";
//import CreateTodo from "./todoapp/CreateTodo";
import TodoWrapper from "./todoapp/TodoWrapper";
import UncontrolledForms from "./uncontrolledForms/UncontrolledForms";
import Fetch from "./fetchApi/Fetch";
import LifeCycleInCbc from "./lifecycle/LifeCycleInCbc";
//import DisplayTodo from "./todoapp/DisplayTodo";
import { useState } from "react";
import SideEffects from "./sideeffects/SideEffects";
import Parent from "./context/Parent";


const App = () => {

  let [toggle, setToggle] = useState(false)

  return (
    <div>
      <MyntraNav/>
      <h1>
        App File
      </h1>
      {/* <Fbc/>
    <Cbc/> */}
      {/* <StatesInFbc/> */}
      {/* <CounterInFbc/> */}
      {/* <CartBtn /> */}
      {/* <PropsParent /> */}
      {/* <PropsDemoPage/> */}
      {/* <Database/> */}
      <Inline/>
      {/* <ControlledForm/> */}
      <ControlledForm2/>
      {/* <TodoWrapper/> */}
      <UncontrolledForms/>
      <Fetch/>
      
      <button onClick={()=> setToggle(!toggle)}>Click</button>
      {toggle ? <LifeCycleInCbc/> : "No Component"}

      {/* <SideEffects/> */}
      <Parent/>
    </div>
  )

}

export default App;
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/