// Ignore 














// // components/AddTodo.js
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../todoSlice';

// function AddTodo() {
//   const [text, setText] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       dispatch(addTodo(text));
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default AddTodo;
