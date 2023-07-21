import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!todo) {
      showAlert(true, 'Please enter grocery', 'danger');
    } else if (todo && isEditing) {
      setTodoList(
        todoList.map((td, index) => {
          if (td.id === editId) {
            return { ...td, title: todo };
          }
          return todo;
        })
      );
      setTodo('');
      setIsEditing(false);
      setEditId(null);
      setTodo('');
      showAlert(true, 'grocery has been updated in the list', 'success');
    } else {
      const newItem = { id: Date.now(), title: todo };
      setTodoList([...todoList, newItem]);
      setTodo('');
      showAlert(true, 'grocery added to todo list', 'success');
    }
  };

  function showAlert(show = false, message = '', type = '') {
    setAlert({ ...alert, show, message, type });
  }

  function handleClearList(ev) {
    ev.preventDefault();

    setTodoList([]);
    showAlert(true, 'todo list has been cleared', 'danger');
  }

  function removeItem(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    showAlert(true, 'grocery has been removed from the list', 'danger');
  }

  function editItem(id) {
    const item = todoList.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setTodo(item.title);
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <h3>grocery bud</h3>

        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={todo}
            onChange={(ev) => setTodo(ev.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {todoList.length > 0 && (
        <div className='grocery-container'>
          <List
            todoList={todoList}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button className='clear-btn' onClick={handleClearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
