const Hoc = (WrappedComp)=>{

    let data = "Hello Child 2"

    return()=>{

        return <WrappedComp data={data}/>
    }          

}

export default Hoc;