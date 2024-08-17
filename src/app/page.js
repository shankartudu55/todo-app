"use client";

import React, { useState } from "react";
import Todo from "@/components/Todo";
import TodoForm from "@/components/TodoForm";

const Home = () => {
  const [todos, setTodos] = useState([
    {text:"Learn about React", isComplete: false},
    {text:"Meet friend for lunch", isComplete: false},
    {text:"Build really cool todo app", isComplete: false}    
  ]);


  const addTodo = (text) => {
    const newTodos = [...todos, {text, isComplete: false}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Todo App</h1>
        <div className="todo-list mb-4">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default Home


