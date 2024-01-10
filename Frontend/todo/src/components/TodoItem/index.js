import './index.css'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri"; 

const TodoItem=(props)=>{
    const {todoDetails,deleteTodo}=props 
    const {id,task}=todoDetails 

const deleteTo=()=>{
    deleteTodo(id)
}
    return(
        <li className="todo-container"> 
        <hr className='horizontal' />
           <div className='content-container'>
           <div className='mark-task-container'>
           <div className='icon-check'>
           <IoCheckmarkCircleOutline size={25} margin-right={20} /></div> 
           <p className='task'>{task}</p>
           </div>
            <button className='icon' type="button" onClick={deleteTo} >
            <RiDeleteBinLine  size={20} />
            </button>
           </div>
        </li>
    )
}

export default TodoItem