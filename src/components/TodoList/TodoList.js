import React, {Component} from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component{
    //리렌더링 최적화 1(todos의 props가 바뀔때만 리렌더링을 하도록 한다)
    // shouldComponentUpdate(nextProp, nextState){
    //     return this.props.todos!== nextProp.todos;
    // }

    render(){
        const {todos, onToggle, onRemove, todoUpdate} = this.props;
        const todoList=todos.map(
            todo=>(
                <TodoItem 
                    key={todo.id} 
                    done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}
                    todoUpdate={()=>todoUpdate(todo.id)}
                >{todo.text}</TodoItem>
            )
        );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}