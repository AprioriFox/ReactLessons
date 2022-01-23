import React from "react";

const TodoStatusFilter = () =>{
    return (
        <div>
            <input type={'button'} value={'All'}/>
            <input type={'button'} value={'Active'}/>
            <input type={'button'} value={'Done'}/>
        </div>
    )
}
export default TodoStatusFilter