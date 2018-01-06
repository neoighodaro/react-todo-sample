import React from 'react'
import propTypes from 'prop-types'
import CssModules from 'react-css-modules'
import s from './todoitem.css'


class TodoItem extends React.Component{ 

    render(){
        console.log(this.props.id)
        return (
           <div styleName="TodoItem">
                {this.props.title}
                <span styleName="removeOp" onClick={()=>this.props.remove(this.props.id)}>click to remove</span>
           </div> 
        )   
    }
}

TodoItem.propTypes = {
   title: propTypes.string.isRequired,
   id: propTypes.number.isRequired
}

export default CssModules(TodoItem,s)
