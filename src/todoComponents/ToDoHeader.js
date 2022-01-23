import ToDoSearch from "./ToDoSearch";
import ToDoStatusFilter from "./ToDoStatusFilter";
import React from "react";

const ToDoHeader = () => {
    return(
        <div>
            <ToDoSearch/>
            <ToDoStatusFilter/>
        </div>
    )
}

export default ToDoHeader