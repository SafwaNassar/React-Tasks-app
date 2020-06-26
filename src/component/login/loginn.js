import React ,{Component} from 'react';
import './loginn.css';

class Loginn extends Component{

    render(){
        return(
                    <div class="form form--login">
                        <div class="form--heading">Welcome back!</div>
                            <form class= "safwa" autocomplete="off">
                                <input type="text" placeholder="Name"/>
                                <input type="password" placeholder="Password"/> 
                                <button class="button">Login</button>
                            </form>
                    </div>

        )
    }
}

export default Loginn