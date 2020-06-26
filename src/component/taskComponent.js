import React ,{Component, Fragment} from 'react';
import TasksList from './TasksList/TasksList';
import AddTasks from './AddTasks/AddTask';
import Bg from './Background/bg';
class TaskComponent extends Component{

    state={
        task:[
                {id: 1,
                taskDescription:"CreateDashBoard"},
                {id: 2,
                taskDescription:"ModifyDashBoard"}
              ]
           }

           

  handleDelete =(id)=>{
    let tasks= this.state.task.filter(task=> task.id!==id);
    this.setState( { task:tasks})
  
  } 
  handleAdd =(task)=>{
    let tasks= this.state.task;

    task.id=Math.random()*100;
    console.log(task)
    tasks.push(task);
    this.setState( { task:tasks})
  
  }

    
    render(){
        return(
            <Fragment id="particle-container">
            <Bg/>
            <AddTasks TasksProps={this.state.task} handleAdd={this.handleAdd}/>
            <TasksList TasksProps={this.state.task} handleDelete={this.handleDelete}/>
          </Fragment>

        )
    }
}

export default TaskComponent