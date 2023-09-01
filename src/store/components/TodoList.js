
// Ignore 









// // components/TodoList.js
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTodo, deleteTodo } from '../todoSlice';
// import { useState } from 'react';
// function TodoList() {
//   const todos = useSelector(state => state.todo);
//   const dispatch = useDispatch();

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => dispatch(toggleTodo(todo.id))}
//           />
//           <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
//           <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
