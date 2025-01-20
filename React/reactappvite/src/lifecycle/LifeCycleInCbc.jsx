import React,{Component} from "react";

export default class LifeCycleInCbc extends Component  {

    state = {value:0}
    componentDidMount(){

        console.log("Mounting Phase!!")
    }

    componentDidUpdate(){

        console.log("Updating Phase!!")
    }

    componentWillUnmount(){

        console.log("Unmounting Phase!!")
    }

    increment(){
        this.setState({value: this.state.value + 1})
        console.log("btn-Clicked!!")
    }

    render(){
    return (
        <div>
            <h2>LifeCycleInCbc!!  {this.state.value}</h2>
            <button onClick={this.increment}>Increment</button>
        </div>

    )
}
} 


