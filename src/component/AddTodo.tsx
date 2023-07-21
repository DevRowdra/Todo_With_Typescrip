// import React from 'react';

import { useState } from "react";

const AddTodo = () => {
    const[todo,setTodo]=useState('')
    return (
        <div>
            <form >
                <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
            </form>
        </div>
    );
};

export default AddTodo;