
import React, { useRef } from 'react'
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText)
    
  }
  
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-controll">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default NewTodo; 