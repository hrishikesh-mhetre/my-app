import { createTask } from "../services/task.service"
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
const CreateTaskPage = (props) =>
{
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    
    const navigate=useNavigate()
    
    const onCreateTask=async()=>{
        if(title.length===0){
            alert('set titile')
        }else if(description.length===0){
            alert('set description')
        }else{
            const result=await createTask(title,description)
            console.log(result)
            if(result){
              
                navigate('/task-list')
            }     else{
                alert('invalid username or password')
            }
         }
    }
    
        return  (
            <div>
            <h1 className="header"> Create Task</h1>
            <div className="form">
            <div className="mb-3">
        <label className="form-label">title</label>
        <input onChange={(e)=>{
            setTitle(e.target.value)
        }} 
        type="text" className="form-control"  />
        </div>
    
      <div className="mb-3">
        <label className="form-label">description</label>
        <textarea
         onChange={(e)=>{
            setDescription(e.target.value)
        }}  
        rows={5}
        type="text" className="form-control">
            
        </textarea>
        </div>
        <div className="mb-3">
            <button onClick={onCreateTask} className="btn btn-success">Save</button>
            <Link to="/task-list"style={{marginLeft:'10px'}}className="btn btn-danger">Cancel</Link>
        </div>
            </div>
            </div>
        )
        
          
}
export default CreateTaskPage
