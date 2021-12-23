import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [body, setBody] = useState("")
  const [todos, setTodos] = useState([])

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleInputBody = (e) => {
    setBody(e.target.value);
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
            <option value="none">--select one status--</option>
            <option value="do">着手予定</option>
            <option value="doing">着手</option>
            <option value="done">完了</option>
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
        <button className="btn btn-success m-2">Add Todo</button>
      </form>
      <table className="table table-dark">
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
    </div>
    </>
  );
}

export default App;