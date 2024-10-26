import './App.css'

import { Fragment } from "react";

import States from "./components/States/States";

import Counter from "./components/States/Counter";
import CbcStates from './components/States/CbcStates';
//import InlineCssExample from './react-css/NewInlineCssExample';
//import NewInlineCssExample from './react-css/NewInlineCssExample';
import Parent from './Topics/context/Parent';

import X from "./Topics/context/X";
import Header from './react-css/Header';
import ContextApi from "./Topics/context/ContextApi";
import Y from "./Topics/context/Y";
import Controlled2 from './Topics/controlledForms/controlled2';
import styles from './global.css';

const App = () => {
  return (
    <div className="body">
        <div className='innerdiv'>
          <Fragment>
          <Header/>
          {/* <NewInlineCssExample/> */}
          <Parent/>
          <Controlled2/>
          <States/>
          <Counter/>
          <CbcStates/>
          <ContextApi>
            <X/>
            <Y/>
          </ContextApi>
    </Fragment>
    </div>
  </div>
    

    
    
  );
};


export default App;






