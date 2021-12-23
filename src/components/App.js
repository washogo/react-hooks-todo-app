import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState(() => {
    const initialState = localStorage.getItem("todos");
    return JSON.parse(initialState);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleInputBody = (e) => {
    setBody(e.target.value);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title && status && body) {
      const length = todos.length
      setTodos([ ...todos,
        {
        id : length === 0 ? 1 : length + 1,
        title: title,
        status: status,
        body: body
        }]);
      } else {
        setTodos([ ...todos ]);
      }

    setTitle("");
    setStatus("");
    setBody("");
  }

  const handleClickDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
    <div className="container">
    <h2>Todo App</h2>
      <form>
        <div className="input-title form-group">
          <label className="h5 m-2" htmlFor="addTitle">タイトル</label>
          <input
          　className="form-control"
            id="addTitle"
            placeholder="input title"
            value={title}
            onChange={handleInputTitle}
          />
        </div>
        <div className="input-status form-group">
          <label className="h5 m-2" htmlFor="addTodo">ステータス</label>
          <select className="form-select" value={status} onChange={handleSelectStatus}>
            <option value="">--select one status--</option>
            <option value="着手予定">着手予定</option>
            <option value="着手">着手</option>
            <option value="完了">完了</option>
          </select>
        </div>
        <div className="input-body form-group">
          <label className="h5 m-2" htmlFor="addBody">詳細</label>
          <input
          　className="form-control"
            id="addBody"
            placeholder="input Body"
            value={body}
            onChange={handleInputBody}
          />
        </div>
        <button className="btn btn-success my-2" onClick={handleAddTodo}>Add Todo</button>
      </form>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ステータス</th>
            <th>詳細</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.status}</td>
              <td>{todo.body}</td>
              <td><button className="btn btn-danger" onClick={() => handleClickDelete(todo.id)}>削除</button></td>
              <td><button className="btn btn-primary">編集</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;