const DisplayTodo = ({setAllTodos},{allTodos},{text},{setText}) => {
  
  function deleteToDo(id){

    let filteredTodos = allTodos.filter((ele)=>{

      return ele.id != id;
    });

    setAllTodos(filteredTodos);
    console.log(id)

  

  }

  function editToDo(id){
  
  console.log(id,"edit id")

      let filteredTodos = allTodos.filter((ele)=>{

      return ele.id != id;
    });

    let val = allTodos.find((ele)=>{
      return ele.id == id;
    })
    console.log(val);
    setText(val.text);
  }

  return (
    <div>
      <ul>
        {allTodos.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.text}
              <button onClick={()=>editToDo(key)}>edit</button>
              <button onClick={()=>deleteToDo}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTodo;
