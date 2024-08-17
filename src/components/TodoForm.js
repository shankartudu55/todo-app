"use client";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input type="text" 
            className="w-full p-2 border rounded-lg text-black"
             value={value} 
             onChange={(e) => setValue(e.target.value)}
              placeholder="Add a new todo"
              />

            <button type="submit" 
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Todo</button>
        </form>
    );
};
export default TodoForm;