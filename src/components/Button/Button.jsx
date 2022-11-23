import React,{Component} from 'react'
import './Button.css'

class Button extends Component{
    handleClick(){
        console.log("Button clicked!")
    }
    render(){
        return(
            <div className="btn">
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default Button