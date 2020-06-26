import React, { Component, Fragment } from 'react';

import './App.css';
import TasksList from './component/TasksList/TasksList';
// import AddTasks from './component/AddTasks/AddTask';
import Bg from './component/Background/bg';

// import AuthService from "./services/auth.service";
// import Login from "./component/login.component";
// import Register from "./component/register.component";
// import Home from "./component/home.component";
// import Profile from "./component/profile.component";
// import BoardUser from "./component/board-user.component";
// import BoardModerator from "./component/board-moderator.component";
// import BoardAdmin from "./component/board-admin.component";


class App extends Component {
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

    return (
      <Fragment id="particle-container">
        <Bg/>
        {/* <AddTasks TasksProps={this.state.task} handleAdd={this.handleAdd}/> */}
        <TasksList TasksProps={this.state.task} handleDelete={this.handleDelete}/>
      </Fragment>
    );
  }
}


// constructor(props) {
//   super(props);
//   this.logOut = this.logOut.bind(this);

//   this.state = {
//     showModeratorBoard: false,
//     showAdminBoard: false,
//     currentUser: undefined
//   };
// }

// componentDidMount() {
//   const user = AuthService.getCurrentUser();

//   if (user) {
//     this.setState({
//       currentUser: user,
//       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//       showAdminBoard: user.roles.includes("ROLE_ADMIN")
//     });
//   }
// }

// logOut() {
//   AuthService.logout();
// }

// render() {
//   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={this.logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>

//         <div className="container mt-3">
//           <Switch>
//             <Route exact path={["/", "/home"]} component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/profile" component={Profile} />
//             <Route path="/user" component={BoardUser} />
//             <Route path="/mod" component={BoardModerator} />
//             <Route path="/admin" component={BoardAdmin} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }
// }

export default App;