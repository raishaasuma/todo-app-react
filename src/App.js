import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {

  // HOOKS
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  useEffect(() => {
    // code here fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {

    event.preventDefault(); // prevents page refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Simple To Do List ✔️ </h1>
        <h2>with React 💠 + Firebase 🔥</h2>
      <form>
        <FormControl>
          <InputLabel >Type a Task</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Primary
        </Button>
      </form>
      <ul className="tasks">
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
