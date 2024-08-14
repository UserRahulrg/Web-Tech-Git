import React from 'react'

const Child = ({props}) => {
    console.log(props);

    return(
        <div>
            <h1>Child Comp {props}</h1>
        </div>
    );
};


export default Child;
