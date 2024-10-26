import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField, Button, List} from '@mui/material'
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  useEffect(() => {
    console.log('new value', newTodo);
  }, [newTodo])

  const addTodo = () => {
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  const deleteTodo = (index) => {
    const newTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodo.push(todos[i]);
      }
    }
    setTodos(newTodo);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

    <List>
      {todos.map((todo, index) => (
        <TodoItem 
        key = {index}
        text = {todo}
        onButtonClick = {() => deleteTodo(index)}
      />
    ))}
    </List>

    <TextField label="Add a new todo"
                value ={newTodo}
                variant = "outlined"
                onChange = {(e) => setNewTodo(e.target.value)}
                onKeyDown={(handleKeyDown)}
    />
    <Button 
      variant = "contained"
      color = "primary"
      onClick={addTodo}
      style = {{marginLeft: '20px', marginTop: '10px' }}
    >
    Add to-do
    </Button>

    </div>
  );
}
export default App;
