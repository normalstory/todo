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

      
    handleToggle=(id)=>{ //선택 항목 토글하기
        // 1)id로 배열의 인덱스 찾기 
        const {todos} =this.state;
        const index = todos.findIndex(todo => todo.id === id);

        // 2)찾은 데이터 값(done) 반전시키기  
        const toggled ={
            ...todos[index],
            done:!todos[index].done
        };

        // 3)찾은 데이터 전후데이터 복사, 그 사이에 변경된 객체 주입
        this.setState({
            todos:[
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index+1,todos.length)
            ]
        }); 
    }


    handleRemove=(id)=>{
        // 1)id로 배열의 인덱스 찾기 
        const {todos} = this.state;
        const index = todos. findIndex(todo => todo.id === id);
        
        // 2) 찾은 찾은 index 전후 데이터는 복사하고 찾은 index 데이터는 제외 
        this.setState({
            todos:[
                ...todos.slice(0,index),
                ...todos.slice(index+1, todos.length)
            ]
        })
    }


    render(){
        const {input, todos} =this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove
        }=this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={this.handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        )
    }
}