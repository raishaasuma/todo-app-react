// type 'rfce' + enter to get boilerplate
// R.eact F.unctional C.ompononent w E.xport
// es7 extension
import './Todo.css';
// import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText, Button, Modal, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = (e) => {
        setOpen(false);
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
    }

    return (
        <>
        <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Hello World! I am an open modal</h1>
                    <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Edit</Button>
                </div>
        </Modal>
            <List className="todo_list">
                <ListItem key={props.todo}>
                    <ListItemText primary={props.todo.todo} secondary='📤 inbox'/>
                </ListItem>
                <div className="task_buttons">
                <Button onClick={e => setOpen(true)}><EditIcon/></Button>
                <Button color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}> <DeleteForeverRoundedIcon/> </Button>
                </div>
            </List>
        </>
    )
}

export default Todo
