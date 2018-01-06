import React, { Component } from 'react'
import a from './App.css'
import CssModules from 'react-css-modules'
import TodoInput from './Components/TodoInput/TodoInput'
import TodoItem from './Components/TodoItem/TodoItem'
import _ from 'lodash'


class App extends Component {

  constructor(props) {
    super(props);

  this.state = {
      todos: []
    };
  }

  createTodo = (e) => {
    if(e.charCode == '13'){
      // do justice here

      let todos = this.state.todos
      let length = todos.length

      this.setState({
        todos:[...this.state.todos,{id:length+1, title: e.target.value}]
      })
    }
  }

  removeTodo = (id) =>{
    // using the id to remove the item from state list
    let ourItem = _.filter(this.state.todos, function(item){
        return item.id !== id
    });

    //remove the current item from the todo

    this.setState({
        todos: ourItem
    })
  }

  list(){
    return this.state.todos.map(item => {
              return <TodoItem title={item.title} key={item.id} id={item.id} remove={this.removeTodo.bind(this)} />;
          });

  }

  render() {
    console.log(this.state);
    return (
      <div styleName="App">
        <TodoInput createTodo={this.createTodo.bind(this)}></TodoInput>
        {this.list()}
      </div>
    );
  }
}

export default CssModules(App, a);
