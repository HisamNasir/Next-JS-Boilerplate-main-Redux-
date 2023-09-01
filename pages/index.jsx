import { useState } from "react";

// import "./App.css";

import TodoItem from "@/src/store/components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo, editTodo } from "@/src/store/features/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  const handleTodoEdit = (id) => {
    dispatch(editTodo(id));
  };

  const [edit, setEdit] = useState(false)
  const [newItem, setNewItem] = useState(todos.text)

  if(edit){ 
    return (
      <form onSubmit={(event) => handleSubmit(event)}>
          <input
              className="input"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Edit your list"
           />
      </form>
   )
  }
  return (
    <div className="w-full h-screen  bg-slate-500">
      <div className="flex items-center justify-center h-full w-full">
        <div className=" bg-white p-10 rounded-2xl space-y-4">
          <h1 className=" font-semibold">TODO List</h1>
          <form className="App-form flex border h-10 w-96 rounded-lg" onSubmit={handleAddTodo}>
            <input className="focus:outline-none w-full h-full ml-2" type="text" onInput={(e) => setInput(e.target.value)} />
            <button className="h-full hover:bg-gray-200 w-20 border" type="submit">+</button>
          </form>
          <div className="Todos cursor-pointer outline outline-1 outline-slate-500 rounded-xl divide-y">
            {count > 0 &&
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  onCheck={handleTodoDone}
                />
              ))}
            {count === 0 && <p>No todos</p>}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
