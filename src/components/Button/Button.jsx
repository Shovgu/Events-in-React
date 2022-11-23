import React,{Component} from 'react'
import './Button.css'

class Button extends Component{
    state={
        text:"Click here",
        className:"buton-red"
    }
    handleClick=()=>{
        console.log("Button clicked!")
        this.setState({text:this.state.text==="Click here"?"Clicked":"Click here",className:this.state.className==="buton-red"?"buton-green":"buton-red"})
    }
    render(){
        const { text,className } = this.state;
        return(
            <div className="btn">
                <button className={className} onClick={this.handleClick}>{text}</button>
            </div>
        )
    }
}
export default Button