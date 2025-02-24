import axios from "axios"
import { useState } from "react"

const SignIn =()=>{

    const [usernameEmail, setUsernameEmail] = useState({

        usernameEmail:"",
        password:""
    })

    const [allUsers, setAllUsers] = useState([])

const formSubmit = async (e)=>{

    e.preventDefault()
    try {
        
        let {data}= await axios.get("http://localhost:3000/userData")
        setAllUsers(data)

        console.log(data)
        let authUser = allUsers.find((users) => {
            return (users.username === usernameEmail.usernameEmail || users.email === usernameEmail.usernameEmail) && users.password === usernameEmail.password;
          });
          
          if (authUser) {
            alert("User logged In!");
          } else {
            alert("User Logged Out!");
          }

            console.log(authUser)

    } catch (error) {
        
    }
}

    const handleChange = (e)=>{

        let {name,value} = e.target

        setUsernameEmail({...usernameEmail, [name]:value})
    }



    return(
        <div>
            <h2>SignInPage</h2>
            <div className="form">
                <form onSubmit={formSubmit}>
                    <label htmlFor="">Username/email </label>
                    <input type="text" name="usernameEmail" value={usernameEmail.usernameEmail} onChange={handleChange} /><br /><br />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={usernameEmail.password} onChange={handleChange} /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;