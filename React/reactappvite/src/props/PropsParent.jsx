import PropsChild from "./PropsChild";

const PropsParent = ()=>{
    let value = "Parent data"


    return(
        <div>
            {/* <PropsChild/> */}
            <PropsChild data = {value}/>
        </div>
    )
}

export default PropsParent;

