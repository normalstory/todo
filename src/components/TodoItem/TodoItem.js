import React, { Component } from 'react';

import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default class TodoItem extends Component{
    render(){
        const {onToggle, done, children, onRemove} =this.props; //이번 컨포넌트의 재료들(feat.비구조화 할당 문법)

        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
            </div>
        );
    }
}