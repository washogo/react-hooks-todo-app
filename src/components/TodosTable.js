import { useContext } from "react";

import { DELETE_TODO } from "../actions";
import AppContext from "../contexts/AppContext"

const TodosTable = ({states, dispatch}) => {
  const {
    currentTodo,
    setCurrentTodo,
    currentTitle,
    setCurrentTitle,
    currentStatus,
    setCurrentStatus,
    currentBody,
    setCurrentBody,
    setIsEdit
  } = useContext(AppContext);

  const handleDeleteTodo = (todo) => {
    dispatch({
      type: DELETE_TODO,
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

  return(
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
  );
}

export default TodosTable;