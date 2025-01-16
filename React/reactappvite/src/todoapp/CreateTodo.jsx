//import { useState } from "react";
//import {setAllTodos,allTodos,text,setText} from "./TodoWrapper";

const CreateTodo = ({ setAllTodos, allTodos,text,setText }) => {
  //let [text, setText] = useState("");

  let formSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      let newTodo = {
        id: Date.now(),
        text: text.trim(),
      };
      setAllTodos([...allTodos, newTodo]),
      setText()
    } else {
      alert("please enter todo");
    }
  };
//   console.log(allTodos);
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter todo.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
