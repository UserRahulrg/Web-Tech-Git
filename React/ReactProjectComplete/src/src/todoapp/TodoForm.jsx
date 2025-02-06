import React from 'react'

const TodoForm = ({todos,setTodos,addTodo}) => {
    
  return (
    <div>
      <form>
      <input type='text' value={todos} onChange={(e)=>setTodos(e.target.value)}/>
      <button onClick={addTodo}>add todo</button>
      </form>
    </div>
  )
}

export default TodoForm
