import { useContext } from "react";
import { EDIT_TODO } from "../actions";

import AppContext from "../contexts/AppContext";

const EditTodo = ({dispatch}) => {
  const {
    currentTodo, 
    currentTitle,
    setCurrentTitle,
    currentStatus,
    setCurrentStatus,
    currentBody,
    setCurrentBody,
    setIsEdit
  } = useContext(AppContext);

  const handleAddCurrentTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: EDIT_TODO,
      id: currentTodo.id,
      title: currentTitle,
      status: currentStatus,
      body: currentBody
    });

    setIsEdit(false);
  }

  return (
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
  );
}

export default EditTodo;