import React ,{Component} from 'react';
import './navBar.css';

class NavBar extends Component{

    render(){
        return(
            <div >
                <nav>
                    
                    <ul class="menu">
                        <li><a href="/tasks">Tasks</a></li>
                        <li id="c1"></li>
                        <li  id="c1"></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">SignUp</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar