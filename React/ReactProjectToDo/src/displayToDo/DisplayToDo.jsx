// import {useSelector} from "react-redux"
// import { state } from "../createToDo/CreateToDo"

const DisplayToDo = ()=>{

    // let todos = useSelector((state)=> state)
    // console.log(todos)


    return(
        <div>
            {todos.map((item)=>{
                return(
                    <li>
                        {item.text}
                        <button>remove</button>
                    </li>
                )
            })}
        </div>
    )
}

export default DisplayToDo;