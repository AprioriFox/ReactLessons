import React from 'react';
import ReactDOM from 'react-dom';

import ToDoStatusFilter from "./ToDoStatusFilter";
import ToDoHeader from "./ToDoHeader";
import ToDoSearch from "./ToDoSearch";
import ToDoList from "./ToDoList";
import ToDoListItem from "./ToDoListItem";


const App = () => {
    const ToDos = [
        {id: 1, label: 'Drink Cola', done: false, important: false},
        {id: 2, label: 'Learn React', done: false, important: false},
        {id: 3, label: 'Drink Vodka', done: false, important: false},
        {id: 4, label: 'Drink Tan', done: false, important: false}
    ]

    return(
        <div>
            <ToDoHeader />
            <ToDoList todos ={ToDos} />
        </div>
    )
}

export default App