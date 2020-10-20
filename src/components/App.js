import React, {Component} from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component{
    state={
        input:'' //input값 
    }
    handleChange=(e)=>{
        const {value} =e.target;
        
        this.setState({
            input:value
        })
    }
    render(){
        const {input} =this.state;
        const {handleChange}=this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input}/>
                <TodoList/>
            </PageTemplate>
        )
    }
}