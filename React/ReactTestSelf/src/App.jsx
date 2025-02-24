import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from "./register/Register"
import SignIn from "./signIn/SignIn"
import Nav from "./navigation/Nav"
import DeleteUser from "./deleteUser/DeleteUser"
import UpdateUser from "./updateUser/UpdateUser"

const App = ()=>{


    return(
    <div>
        
        <div>
        <BrowserRouter>
                <Nav></Nav>
                <h2>AppFile</h2>
                <Routes>
                    <Route path="/" element={<Nav/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/signIn" element={<SignIn/>}></Route>
                    <Route path="/deleteUser" element={<DeleteUser/>}></Route>
                    <Route path="/updateUser" element={<UpdateUser/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        

    </div>
    )
}

export default App;