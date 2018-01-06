import React from 'react'
import propTypes from 'prop-types';
import CssModules from 'react-css-modules'
import s from './todoinput.css'

class TodoInput extends React.Component{
    render(){
        return (
            <div styleName="Input-container">
                <input styleName="Input-bar" placeholder="Simply add a task and click enter" onKeyPress={(e)=>this.props.createTodo(e)}/>
            </div>
        )   
    }
}

TodoInput.propTypes = {
    createTodo: propTypes.func.isRequired
}


export default CssModules(TodoInput, s)