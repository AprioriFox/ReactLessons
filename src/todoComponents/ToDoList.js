import ToDoListItem from "./ToDoListItem";
import React from "react";

const ToDoList = ({todos}) =>{
    const elems = todos.map((item)=>{
        return <li key={item.id}><ToDoListItem label ={item.label}/></li>
    })

    return (
        <div>
            <ul>
                {elems}
            </ul>
        </div>
    )
}

export default ToDoList
