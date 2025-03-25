import { useEffect, useState } from "react";
import styled from "styled-components";
import { loadTodos, saveTodos } from "./utils";

const Wrapper = styled.div`
  text-align: center;
`;

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const todos = loadTodos();
    setTodos(todos);
  }, []);

  const addTodo = (text) => {
    const newTodo = { text, isCompleted: false };
    const saveTodo = [...todos, newTodo];
    setTodos(saveTodo);
    saveTodos(saveTodo);
  };

  const addClick = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const toggle = (index) => {
    const toggle = [...todos];
    toggle[index].isCompleted = !toggle[index].isCompleted;
    setTodos(toggle);
    saveTodos(toggle);
  };

  const del = (index) => {
    const deltodo = todos.filter((_, i) => i !== index);
    setTodos(deltodo);
    saveTodos(deltodo);
  };

  return (
    <Wrapper>
      <h1>ToDoList</h1>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addClick}>추가</button>
        {todos.length === 0 ? (
          <p>할 일이 없습니다</p>
        ) : (
          <ol>
            {todos.map((todo, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "rgb(0,0,0,0.1)",
                  margin: "0 auto",
                  marginBottom: "6px",
                  width: "500px",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => toggle(index)}
                />
                {todo.text}
                <button type="button" onClick={() => del(index)}>
                  삭제
                </button>
              </li>
            ))}
          </ol>
        )}
      </form>
    </Wrapper>
  );
};

export default ToDoList;
