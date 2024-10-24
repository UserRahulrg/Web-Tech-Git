import './App.css'

import { Fragment } from "react";

import States from "./components/States/States";

import Counter from "./components/States/Counter";
import CbcStates from './components/States/CbcStates';
//import InlineCssExample from './react-css/NewInlineCssExample';
//import NewInlineCssExample from './react-css/NewInlineCssExample';
import Parent from './Topics/context/Parent';

import X from "./Topics/context/X";
import Header from './react-css/GenMode';
import ContextApi from "./Topics/context/ContextApi";
import Y from "./Topics/context/Y";

const App = () => {
  return (
    <Fragment>
      <Header/>
      {/* <NewInlineCssExample/> */}
      <Parent/>
      
      <h1></h1>
      <States/>

      <Counter/>
      <CbcStates/>
      <ContextApi>
        <X/>
        <Y/>
      </ContextApi>
    </Fragment>

    
    
  );
};


export default App;






