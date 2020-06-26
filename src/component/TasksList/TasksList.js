import React from 'react';
import './TasksList.css';
import FlipMove from 'react-flip-move';

const TasksList = (props) => {
    const {TasksProps , handleDelete}=props
    const tasksArr= TasksProps.map(task => {
        return(
            <div id="checklist" key={task.id}>
            <div>
            <input id={task.id} type="checkbox" name={task.taskDescription} value={task.taskDescription} /> 
                    <label for={task.id}>{task.taskDescription}</label>
            </div>
            <div className="multi-button">
            <button className="cut" onClick={()=>{handleDelete(task.id)}}>delete</button>
            </div>
          
      </div>
        )
    })
    // let len= TasksProps.length;
    // const noEmployees= len<=0?   <p> No tasks to show </p>:null

    return(
        <div >
            <FlipMove duration={500} easing="ease-in-out">
            {tasksArr}    

            </FlipMove>

            {/* {noEmployees}   */}
        </div>
    )
}

export default TasksList