import React from 'react'
import Child from './Child'

const Parent = () => {
const dbData = "Hello World";


    return(
        <div>
            <h1>Parent</h1>
            <hr/>
            <Child props ={dbData}/>
        </div>
    )
}

export default Parent;






