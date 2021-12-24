import React, { useState } from 'react';

import { ADD_TODO } from "../actions";

const AddTodo = ({dispatch}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [body, setBody] = useState("");


  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title && status && body) {
      dispatch({
        type: ADD_TODO,
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

  return (
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
  )
}

export default AddTodo;