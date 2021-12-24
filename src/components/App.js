import React, { useState, useEffect, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/reducer"

const App = () => {
  const [states, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [body, setBody] = useState("");
  
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentBody, setCurrentBody] = useState("");
  
  
  const [isEdit, setIsEdit] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title && status && body) {
      dispatch({
        type: "ADD_TODO",
        title,
        status,
        body
      })
    } else {
      return []
    }

    setTitle("");
    setStatus("");
    setBody("");
  }

  const handleDeleteTodo = (todo) => {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id
    })
  }

  const onClickEditButton = (todo) => {
    setIsEdit(true);
    setCurrentTitle(todo.title);
    setCurrentStatus(todo.status);
    setCurrentBody(todo.body);
    
    setCurrentTodo({
      ...currentTodo,
      id: todo.id,
      title: currentTitle,
      status: currentStatus,
      body: currentBody
    });
  }

  const handleAddCurrentTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "EDIT_TODO",
      id: currentTodo.id,
      title: currentTitle,
      status: currentStatus,
      body: currentBody
    });

    setIsEdit(false);
  }

  return (
    <>
    {isEdit ? (
    <div className="container">
      <h2>Todo App</h2>
      <h3>Edit Todo</h3>
      <form>
        <div className="input-title form-group">
          <label className="h5 m-2" htmlFor="addTitle">タイトル</label>
          <input
            className="form-control"
            id="addTitle"
            placeholder="input title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </div>
        <div className="input-status form-group">
          <label className="h5 m-2" htmlFor="addTodo">ステータス</label>
          <select className="form-select" value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)}>
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
            value={currentBody}
            onChange={(e) => setCurrentBody(e.target.value)}
          />
        </div>
        <button className="btn btn-success my-2" onClick={handleAddCurrentTodo}>Edit Todo</button>
      </form>
    </div>
    ) : (
    <div className="container">
      <h2>Todo App</h2>
      <h3>Todos</h3>
      <form>
        <div className="input-title form-group">
          <label className="h5 m-2" htmlFor="addTitle">タイトル</label>
          <input
          　className="form-control"
            id="addTitle"
            placeholder="input title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-status form-group">
          <label className="h5 m-2" htmlFor="addTodo">ステータス</label>
          <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
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
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="btn btn-success my-2" onClick={handleAddTodo}>Add Todo</button>
      </form>
    </div>
    )}
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
        {states.map((todo, index) => (
          <tr key={index}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.status}</td>
            <td>{todo.body}</td>
            <td><button className="btn btn-danger" onClick={() => handleDeleteTodo(todo)}>削除</button></td>
            <td><button className="btn btn-primary" onClick={() => onClickEditButton(todo)}>編集</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default App;