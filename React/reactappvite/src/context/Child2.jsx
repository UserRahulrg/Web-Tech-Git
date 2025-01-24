import Hoc from "../hoc/Hoc";


const Child2 = (x)=>{

    console.log(x)
    
    return(
        <div>
            <h2>Child2</h2>
        </div>
    )
}

export default Hoc(Child2);
