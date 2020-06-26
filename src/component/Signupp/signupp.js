import React ,{Component, Fragment} from './node_modules/react';
import './signupp.css';

class Signupp extends Component{

    render(){
        return(
                    <div class="form form--signup">
                        <div class="form--heading">Welcome! Sign Up</div>
                            <form autocomplete="off">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <button class="button">
                                    Sign Up
                                </button>
                            </form>
                    </div>
        )
    }
}

export default Signupp