import { Navigate } from "react-router-dom";

const Privateroutes = ()=>{

let userId = localStorage.getItem("userId");

    return(
        <React.Fragment>
            {userId ? <React.Fragment>{children}</React.Fragment>:<Navigate to="/"></Navigate>}
        </React.Fragment>
    )
}

export default Privateroutes;