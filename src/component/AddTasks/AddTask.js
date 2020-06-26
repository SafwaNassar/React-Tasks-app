import React ,{Component, Fragment} from './node_modules/react';
import './AddTasks.css';

class AddTasks extends Component{

    state={
         taskDescription:''
        }
    
    handleChange =(e)=>{
        this.setState(
            {
                [e.target.id]:e.target.value,
                
            }
            )
    }
    
    handleSubmit =(e)=>
    {
        e.preventDefault();
        this.props.handleAdd(this.state)
        this.setState(
            {
                taskDescription:''
            }
                )
    }
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit} >
                    <h1>Tasks 
                        <i className="fa fa-plus">
                        <span  type="submit" className="button" onClick={this.handleSubmit} >Add</span>
                        </i>
                    </h1> 
                    <input type="text" id="taskDescription" placeholder="Add New Task" onChange={this.handleChange} value={this.state.taskDescription}/>
                </form>

            </Fragment>

        )
    }
}

export default AddTasks