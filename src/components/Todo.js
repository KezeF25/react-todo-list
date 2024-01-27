import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

export const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = React.useState({ id: null, value: "" });

  const clickEditIcon = value => {
    updateTodo(edit.id, value.text);
    setEdit({ id: null, value: "" });
  }

  if (edit.id){
    return <TodoForm edit={edit} addTodo={clickEditIcon}/>
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({id: todo.id, value: todo.text})}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
