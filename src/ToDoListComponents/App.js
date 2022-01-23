import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from "./todoHeader";
import TodoList from "./todoList";

const App = () =>{

    const todos = [
        {id: 1, label: 'Drink Tea', done: false, important: false},
        {id: 2, label: 'Learn React', done: false, important: false},
        {id: 3, label: 'Drink Vodka', done: false, important: false},
        {id: 4, label: 'Drink Tan', done: false, important: false}
    ]
    return(
        <div>
            <TodoHeader />
            <TodoList todos={todos}/>
        </div>
    )
}

export default App

