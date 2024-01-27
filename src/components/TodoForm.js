import React from "react";

export const TodoForm = (props) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  })

  const [input, SetInput] = React.useState(props.edit ? props.edit.value : '');

  const inputChange = (event) => {
    SetInput(event.target.value);
  };

  const buttonClick = (event) => {
    event.preventDefault();

    props.addTodo({ text: input });
    SetInput("");
  };

  return (
    <form className="todo-form" onSubmit={buttonClick}>
      {props.edit ? (
        <>
          <input
            className="todo-form-input edit"
            value={input}
            placeholder="Обновить задачу"
            type="text"
            onChange={inputChange}
            ref={inputRef}
          />
          <button className="todo-form-button edit">Обновить</button>
        </> ) : (
        <>
          <input
            className="todo-form-input"
            value={input}
            placeholder="Добавьте задачу в список"
            type="text"
            onChange={inputChange}
            ref={inputRef}
          />
          <button className="todo-form-button">Добавить</button>
        </>)
      }
    </form>
  );
};

export default TodoForm;
