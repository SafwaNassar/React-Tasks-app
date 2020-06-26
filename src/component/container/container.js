import React ,{Component, Fragment} from './node_modules/react';
import './container.css';

class Container extends Component{

    render(){
        return(
                    <div class="container">
                        <div class="message signup">
                            <div class="btn-wrapper">
                                <button class="button" id="signup">Sign Up</button>
                                <button class="button" id="login"> Login</button>
                            </div>
                        </div>
                        </div>
        )
    }
}
export default Container