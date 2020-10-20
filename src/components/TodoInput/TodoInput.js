import React from 'react';

import styles from './TodoInput.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

//value : input value, onChange : input 변경이벤트, onInsert : 추가버튼 클릭이벤트 
//함수형 컴포넌트
const TodoInput =({value, onChange, onInsert})=>{
    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            onInsert();
        }
    }
    return(
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}></input>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
};
export default TodoInput;