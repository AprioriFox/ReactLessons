import TodoSearch from "../todoSearch";
import TodoStatusFilter from "../todoStatusFilter";
import React from "react";

const TodoHeader = () => {
    return(
        <div>
            <TodoSearch />
            <TodoStatusFilter />
        </div>
    )
}

export default TodoHeader