import { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const TodoWrapper = () => {
  let [allTodos, setAllTodos] = useState([{ id: 1, text: "hello world" }]);
  let [text, setText] = useState("");

  return (
    <div>
      <CreateTodo  setAllTodos={setAllTodos} allTodos={allTodos} 
      text={text}
      setText={setText}
      />
      <DisplayTodo allTodos={allTodos} setAllTodos={setAllTodos}
      text={text}
      setText={setText}
      />
    </div>
  );
};

export default TodoWrapper;
