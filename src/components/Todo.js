import React from "react";

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
    return (
    <div className={`flex justify-between items-center p-4 rounded-lg text-black shadow-md mb-2 ${todo.isComplete ? 'line-through':''}`}>
        {todo.text}
    <div>
        <button onClick={() => completeTodo(index)} className="mr-2 text-blue-500 hover:text-blue-700">Complete</button>
        <button onClick={() => deleteTodo(index)} className="text-red-500 hover:text-red-700">Delete</button>
    </div>
    </div>
);
}

export default Todo