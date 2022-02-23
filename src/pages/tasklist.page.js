import { useEffect, useState } from "react"
import {getTasks}  from "../services/task.service"
const TaskListPage = (props) =>
{
    const[tasks,setTasks]=useState()

   useEffect(()=>{
       loadTasks()
   },[])

   const loadTasks=async()=>{
       const result=await getTasks()
       console.log(result)
   }
    return  (
        <div>
        <h1 className="header">Task List</h1>
        </div>
    )
       
        
          
}
export default TaskListPage 