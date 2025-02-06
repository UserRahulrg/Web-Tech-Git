import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoWrapper = () => {
  let [todos, setTodos] = useState("")
  let [allTodos, setAllTodos] = useState([])

  let addTodo = (e) => {
    e.preventDefault()
    console.log(todos);

    if (todos.trim() !== "") {
      setAllTodos([...allTodos, { id: Date.now(), text: todos }])
      setTodos("") // clearing input field
    } else {
      alert("empty input field")
    }
  }

  let deleteTodo = (id) =>{
    console.log("todo deleted",id);
    let filteredTodo = allTodos.filter((ele)=>{
      return ele.id !== id
    })
    setAllTodos(filteredTodo)
    
  }

  let editTodo = (id)=>{
    console.log("edit todo",id);

    let editedTodo = allTodos.find((ele)=>{
      return ele.id === id
    })
    console.log(editedTodo);

    let filteredTodo = allTodos.filter((ele)=>{
      return ele.id !== id
    })

    setTodos(editedTodo.text)
    setAllTodos(filteredTodo)
    
  }

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} addTodo={addTodo} />
      <TodoList allTodos={allTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}

export default TodoWrapper
