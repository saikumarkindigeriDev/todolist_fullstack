
import {Component} from 'react' 

import axios from 'axios'
import TodoItem from './components/TodoItem'
import {v4} from 'uuid'

import './App.css'

class App extends Component{
  state={
    todos:[],
    task:'',
  } 

  changeTask=e=>{
    this.setState({task:e.target.value})
  }


  deleteTodo=(id)=>{ 
    const {todos}=this.state 
    const updatedTodos=todos.filter(eachTodo=>id!==eachTodo.id)
    this.setState({
      todos:updatedTodos,
    })

    axios.delete(`http://localhost:8081/api/deleteTodo/${id}`)
    .then(response => {
      console.log("deleted")
    })
    .catch(error => 
      console.log(error)
);
  }

  onSubmit=async(e)=>{
    e.preventDefault() 
    const {task}=this.state 

    const newTodo={
      id:v4(),
      task:task
    }

    this.setState(prevState=>({
      todos:[...prevState.todos,newTodo],
      task:''
    }))  

    axios.post("http://localhost:8081/addtodo",{task}) 
    .then(res=>console.log("added")) 
    .catch(err=>console.log(err)) 
   
 

    


  }



  render(){
    const {todos,task}=this.state  

    const currentDate = new Date();

const options = { weekday: 'long', month: 'short', day: 'numeric' };

const formattedDate = currentDate.toLocaleDateString('en-US', options);

console.log(formattedDate);

    return(
      <div className='background-container'> 
        <div className='inner-container'>  
        <p className='date'>{formattedDate}</p>
        <p className='length'>{`${todos.length} Active Tasks`}</p>
       
        <form onSubmit={this.onSubmit}>  
       
          <div className='input-container'> 
         
          <input type="text" className='input' value={task} onChange={this.changeTask}  placeholder="Enter the task"/> 
          <button className='button' type="submit">Add</button>
          </div>
        </form> 
        <ul>
          {todos.map(eachTodo=>(
            <TodoItem key={eachTodo.id} 
            todoDetails={eachTodo} 
            deleteTodo={this.deleteTodo} />
          ))}
        </ul>
        </div>

      </div>
    )
  }
}

export default App