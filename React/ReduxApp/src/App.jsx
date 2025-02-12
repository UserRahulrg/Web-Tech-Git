import Counter from "./counter/Counter";
// import {useDispatch} from "react-redux"
import { Provider } from "react-redux";
import {configureStore,createSlice} from '@reduxjs/toolkit'
import { counterSlice } from "./counter/counterSlice";

// import Counter from "./counter/Counter";

// let counterSlice = createSlice()
// let dispatch = useDispatch()




let myStore = configureStore({
    reducer:{counter: counterSlice.reducer,

    }
})

export let {increment,decrement,reset} = counterSlice.actions;

const App =()=>{


    return(
        <div>
            <h2>App File</h2>

            <Provider store={myStore}>
                <Counter/>
            </Provider>
            {/* <Provider> */}
                {/* <Counter/> */}
            
        </div>
    )
}

export default App;