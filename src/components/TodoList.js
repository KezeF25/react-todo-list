import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {

    if (!todo.text || todo.text[0] === ' '){
        return;
    }

    todo.id = todos.length + 1;

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const completeTodo = id => {
    const updatedTodo = todos.map((el) => {
        if (el.id === id){
            el.isComplete = !el.isComplete;
        }
        return el;
    });
    setTodos(updatedTodo);
  }

  const removeTodo = id => {
    const removedArr = todos.filter((el) => el.id !== id);
    setTodos(removedArr);
  }

  const updateTodo = (id, newValue) => {
    if (!newValue || newValue[0] === ' '){
        return;
    }

    const updateArr = todos.map(el => {
        if (el.id === id){
            el.text = newValue;
        }
        return el;
    });

    setTodos(updateArr);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
};

export default TodoList;
