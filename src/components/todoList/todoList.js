import TodoListItem from "../todoListItem";
import React from "react";

const TodoList = ({todos}) =>{
    const elems = todos.map((item)=>{
        return <li key={item.id}><TodoListItem label ={item.label}/></li>
    })

    return (
        <div>
            <ul>
                {elems}
            </ul>
        </div>
    )
}

export default TodoList
