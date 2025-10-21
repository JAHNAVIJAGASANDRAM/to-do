import React, {useState} from "react";


export default function TodoInput({ addTodo}) {
    const[task,setTask]=useState("");
    const handleSubmit=(e)=>{
        if(task.trim()){
        addTodo(task);
        setTask("");
        }
    };

        return(
            <div className="todoInput">
                <input
                type="text"
                value={task}
                onChange={(e)=>setTask (e.target.value)}
                placeholder="Add a new task"
                />
                <button onClick={handleSubmit}>Add</button>
            </div>
        )

        
    }


