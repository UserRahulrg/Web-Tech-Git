
// const PropsChild =()=>{

//     return(
//         <div>
//             <h1>Child Tag</h1>
//         </div>
//     )
// }

// export default PropsChild;




























const PropsChild = (value) => {

    console.log(value)
    console.log(value.data)

    return (
        <h1>propsChild {value.data}</h1>


    )
}

export default PropsChild;