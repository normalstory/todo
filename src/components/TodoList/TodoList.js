import React, {Component} from 'react';
import TodoItem from '../TodoItem';

export default class TodoList extends Component{
    render(){
        return(
            <div>
                <TodoItem done>컴포넌트 생성하기</TodoItem>
                <TodoItem>컴포넌트 스타일링하기 </TodoItem>
            </div>
        );
    }
}