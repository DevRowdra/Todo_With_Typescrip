// import React from 'react';

import { useState } from "react";

const AddTodo = () => {
    const[todo,setTodo]=useState('')
    const handleOnsubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
        console.log('e')

    }
    return (
        <div>
            <form onSubmit={handleOnsubmit}>
                <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <p>{todo}</p>
        </div>
    );
};

export default AddTodo;