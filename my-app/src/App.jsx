import './App.css'

import { Fragment } from "react";

import States from "./components/States/States";

import Counter from "./components/States/Counter";
import CbcStates from './components/States/CbcStates';

const App = () => {
  return (
    <Fragment>
      <h1></h1>
      <States/>
      <h4><Counter/></h4>
      <Counter/>
      <CbcStates/>
    </Fragment>
    
  );
};


export default App;









