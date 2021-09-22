import React, { useState } from "react";
import "./ContentTodo.css";
import dummy from "../static/dummyData";

const ContentTodo = ({ datas, setDatas }) => {



    const deleteTodo = (some, deleteId) => {
        const filterTodo = datas.filter((todo) => {
            return todo.id !== deleteId
        })
        setDatas(filterTodo);
    };

    const checkboxLine = (event) => {
        let result = '';
        if (event.target.checked) {
        } else {
            result = "";
        }
        console.log(event);
    }
    // text-decoration:line-through
    return (
        <div className="todo_Container">
            <ul className="todoLists">
                {datas.map((todo) => {
                    return (
                        <li className="todoList" key={todo.id}>
                            {/* 각 리스트 항목들 */}
                            <div className="todoMenu">
                                <div className="todoDate">D - {todo.d_day}</div>
                                <div className="createTodo">{new Date(todo.createdAt).toLocaleDateString('ko-kr')}</div>
                                <div className="buttons">
                                    <span className="todoContent_checkbox">
                                        <div className="checkbox_group">
                                            <input type="checkbox" id="check" onClick={checkboxLine} />
                                        </div>
                                    </span>
                                    <span className="todoContent_delete">
                                        <button className="todoContent_deleteButton"
                                            onClick={() => deleteTodo(todo.content, todo.id)}
                                        >
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="todoContent">
                                {todo.content}
                            </div>

                        </li >
                    );
                })
                }
            </ul >
        </div >
    );
};

export default ContentTodo;
