import React, { Component } from 'react';

import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default class TodoItem extends Component{
    //리렌더링 최적화 2 (done이 바뀔때만 리렌더링을 하도록 한다)
    // shouldComponentUpdate(nextProps,nextState){
    //     return this.props.done !== nextProps.done;
    // }

    render(){
        const {onToggle, done, children, onRemove, todoUpdate} =this.props; //이번 컨포넌트의 재료들(feat.비구조화 할당 문법)

        return(
            <div className={cx('todo-item')} onClick={todoUpdate}>
                <input className={cx('tick')} type="checkbox" checked={done} onClick={onToggle} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e)=>{
                    onRemove();
                    e.stopPropagation(); //toggle(부모)과 remove(자식)간 propagation 이슈해결 
                }}>[지우기]</div>
            </div>
        );
    }
}