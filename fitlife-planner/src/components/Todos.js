import { useSummary } from "../features/summary/SummaryContext";
import { useState, useRef, useEffect } from "react";
import Section from "./Section";
function Todos() {
  const { pendingTodos, setPendingTodos } = useSummary();

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Write todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  setPendingTodos(todos.filter((t) => !t.done).length);

  let todoName = useRef("");

  const handleTodoNameChange = (e) => {
    todoName.current.value = e.target.value; // do NOT update state
  };

  const handleTodos = () => {
    const todoNameValue = todoName.current.value;
    // Add pair to list
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoNameValue,
        done: false,
      },
    ]);
    // CLEAR INPUT BOXES after clicking Add
    todoName.current.value = "";
  };

  const toggleDone = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  const handleDeleteTodos = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <Section title="Todos">
      <ul>
        {todos.length === 0 ? (
          <>
            <p>All tasks done 🎉</p>
          </>
        ) : (
          <>
            {todos.map((t) => (
              <li key={t.id}>
                {t.text}
                <button
                  onClick={() => handleDeleteTodos(t.id)}
                  style={{ marginLeft: 8 }}
                >
                  Remove
                </button>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleDone(t.id)}
                />
              </li>
            ))}
          </>
        )}
      </ul>

      <input
        type="text"
        placeholder="Enter todos"
        ref={todoName}
        onChange={handleTodoNameChange}
      />

      <button onClick={handleTodos}>Quick Add</button>
    </Section>
  );
}
export default Todos;
