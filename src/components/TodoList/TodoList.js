import React, {Component} from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component{
    render(){
        const {todos} = this.props;
        const todoList=todos.map(
            todos=>(
                <TodoItem key={todos.id} done={todos.done}>{todos.text}</TodoItem>
            )
        );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}