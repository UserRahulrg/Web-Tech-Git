import react, { useContext } from 'react'
import ChildB from './ChildB';
//import { useContext } from 'react';


// let val = useContext(Global);
//  console.log(val);



const ChildA = ()=>{
//    let val = useContext(Global);
//         console.log(val);

    return(
        <div>
            <h1>I am Child A.</h1>
            <ChildB/>
        </div>
        
    );
};

export default ChildA;





