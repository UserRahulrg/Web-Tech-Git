import { Component, Fragment } from "react";



class CbcStates extends Component{
    constructor(){
        super();
        this.state ={ count: 0};
    }
    render()
        
    {
        console.log(this);

        return(
            <div id="cbcStatesDiv">
            <Fragment>
                <h1>CBC States {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>increment</button>
            
            </Fragment>
            </div>
        );
    }
}

export default CbcStates;









