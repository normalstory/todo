import React, {Component} from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component{
    state={
        input:'', //input 값
        todos:[   //input 초기값
            {id:0, text:'컴포넌트 만들기', done:true},
            {id:1, text:'컴포넌트 스타일링하기', done:false}
        ]
    }
    handleChange=(e)=>{
        const {value} =e.target;

        this.setState({
            input:value
        })
    }

    id=1 //데이터에 들어가는 id값 
    getId = () => {
        return ++this.id; //현재에서 +1 
    }
    //새 데이터 추가 
    handleInsert=()=>{
       const {todos, input} = this.state;

       //새 데이터 객체 생성
       const newTodo={
        text:input,
        done:false,
        id:this.getId()
       };
       //새 데이터 객체 반영
       this.setState({
           todos:[...todos, newTodo],
           input:''
       })
    }


    render(){
        const {input, todos} =this.state;
        const {handleChange}=this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={this.handleInsert} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        )
    }
}