import React, { useState } from "react";

const App = () => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [body, setBody] = useState("")
  const [todos, setTodos] = useState([])

  const handleInputId = (e) => {
    setId(e.target.value);
  }

  return (
    <>
      <h2>Todo App</h2>
      <form>
        <input
         name="addTodo"
         id="addTodo"
         placeholder="input title"
         value={id}
         onChange={handleInputId}
        />
        <button>Add Todo</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ステータス</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default App;