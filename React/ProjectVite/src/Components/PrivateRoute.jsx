import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children})=>{
    let userId = localStorage.getItem("userId");
    return(
        <div>
            {userId ? (
                <>
                {Children}
                
                </>
                
            )
            :(
                <>
                    <Navigate to={"/login"}/>
                </>
            )
        }
        </div>
    )
}

export default PrivateRoute;




