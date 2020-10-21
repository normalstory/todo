import React, {Component} from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// 리렌더링 최적화 테스트용 더미 데이터생성 함수
// const initialTodos=new Array(500).fill(0).map( //리렌더링 최적화 
//     (foo, index) =>({id:index, text:`일정 ${index}`, done:false})
// );

export default class App extends Component{
    state={
        btType:"cx('add-button')",
        update:0, //커스텀 
        input:'', //input 값
        todos:[   //input 초기값
            {id:0, text:'컴포넌트 만들기', done:true},
            {id:1, text:'컴포넌트 스타일링하기', done:false}
        ]
        //todos:initialTodos, //리렌더링 최적화 테스트용
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
           input:'',            
           btType:"cx('add-button')"
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
        // 1) id로 배열의 인덱스 찾기 
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        
        // 2) 찾은 찾은 index 전후 데이터는 복사하고 찾은 index 데이터는 제외 
        this.setState({
            todos:[
                ...todos.slice(0,index),
                ...todos.slice(index+1, todos.length)
            ]
        })
    }

    handleUpdate=(id)=>{
        // 1) id로 배열의 인덱스 찾기 
        const {todos, update} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        
        // 2) 찾은 index의 데이터를 인풋 값으로 던지기 
        this.setState({
            input:todos[index].text,
            update:index,            
            btType:"cx('update-button')"
        })
        console.log('1 :',index);
    }

 
    //데이터 업데이트 
    handleUpToInsert=(id)=>{
        const {todos, input, update} = this.state;
        console.log('2 : ',update);

        // //새 데이터 객체 생성
        const updateTodo={
            text:input,
            done:false,
            id:update
        };
        console.log(updateTodo.text);
        // //새 데이터 객체 반영
        this.setState({
            todos:[
                ...todos.slice(0,update),
                updateTodo,
                ...todos.slice(update+1, todos.length)
            ],
            input:'',            
            btType:"cx('update-button')"
        })
        console.log(todos);
    }

    // handleBtType=()=>{
    //     console.log(this.state.btType);
    //     const {btType, update} = this.state;
    //     if(update!==0){
    //         this.state({
    //             btType:"cx('update-button')"
    //         })
    //     }
    // }

    render(){
        const {input, todos, btType} =this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove,
            handleUpdate,
            handleUpToInsert,
            handleBtType
        }=this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} onUpdate={handleUpToInsert} value={input} btType={handleBtType}/>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} todoUpdate={handleUpdate} />
            </PageTemplate>
        )
    }
} 