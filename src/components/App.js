import React, {Component} from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component{
    state={
        input:'', //input값
        todos:[
            {id:0,text:'컴포넌트 만들기',done:true},
            {id:1,text:'컴포넌트 스타일링하기',done:false}
        ]
    }
    handleChange=(e)=>{
        const {value} =e.target;

        this.setState({
            input:value
        })
    }
    render(){
        const {input, todos} =this.state;
        const {handleChange}=this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        )
    }
}