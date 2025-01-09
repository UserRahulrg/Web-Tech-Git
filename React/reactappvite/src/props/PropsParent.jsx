import PropsDrillingChild1 from "../propsDrilling/propsDrillingChild1.jsx/PropsDrillingChild1";
import PropsChild from "./PropsChild";
import PropsDemoPage from "./PropsDemoPage";

const PropsParent = ()=>{
    let value = "Parent data"

    let dbdata = {"id":12,"username":"Ajit","email":"ajit@gmail.com"}
    let str1 = {"id":2,"username":"name","email":"name@gmail.com"}

    return(
        <div>
            {/* <PropsChild/> */}
            <PropsChild data = {value}/>
            
            <PropsDemoPage/>
            <PropsDrillingChild1 str={str1}/>
        </div>
    )
}

export default PropsParent;

