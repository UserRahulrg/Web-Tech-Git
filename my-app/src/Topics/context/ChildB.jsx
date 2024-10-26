import react, { useContext } from 'react'
import { Global } from './Parent';
//import Cont

const ChildB = ()=>{
    let{data,products} = useContext()



// const ChildB = ()=>{
    
//      let val = useContext(Global);
//      console.log(val);

    return(
        <div>
            {products.map((ele) =>{
                console.log(ele);
                return <h1 key={ele.id}>{ele.title}</h1>

            }

            )}
            <h1>I am Child B.</h1>
        </div>
    );
};


export default ChildB;

