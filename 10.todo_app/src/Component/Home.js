import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos)=>{
            return [...prevTodos,{id: uuidv4(),todo}];
        });
    };

    const handleRemoveTodo = (id) => {

        setTodos((prevTodos)=>{
            const filterdTodo = todos.filter((todo)=> todo.id !== id);
            return filterdTodo;
        });
    }

    return (
        <div className={style.container}>
            <h1 style={{color:"white"}}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}/>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    );
};

export default Home;