import React, {useState} from 'react';

const NewTodo = (props) => {
    const [ todo, setTodo] = useState("");

    const handleInputChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTodo(todo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo : </label>
                <input type="text" id="todo" name="todo" value = {todo}  onChange={handleInputChange}/>
                <button style={{height:'45px', width:'80px', backgroundColor:'darkBlue', color:'white'}}> Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;