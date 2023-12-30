import "./App.css";
import "./styles/Sidebar.css";
import "./styles/Container.css";
import { useState } from "react";

import TodoCard from "./components/TodoCard";

function App() {
    const exisitingTodos = JSON.parse(localStorage.getItem("todos"));

    let [todos, setTodos] = useState(exisitingTodos ? exisitingTodos : []);

    function dateParser(unixTime) {
        const date = new Date(unixTime);
        // Convert Unix time to format as such 10th December '21
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const months = [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November ",
            "December",
        ];
        return `${day} ${months[month]} '${year.toString().slice(2)}`;
    }

    const addTodo = () => {
        const title = document.getElementById("todo-title").value;
        const body = document.getElementById("todo-body").value;
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            title: title,
            body: body,
            createdOn: dateParser(Date.now()),
            done: false,
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    return (
        <>
            <section className="sidebar">
                <div className="top-section">
                    <h1 id="logo">TODOFY</h1>
                </div>
                <h3 id="title">TITLE</h3>
                <input
                    type="text"
                    placeholder="Enter title..."
                    id="todo-title"
                />
                <h3 id="desc">DESCRIPTION</h3>
                <textarea
                    placeholder="Enter description..."
                    id="todo-body"
                ></textarea>
                <br />
                <button onClick={addTodo}>Add</button>
            </section>
            <div className="container">
                {todos.map((todo) => (
                    <TodoCard props={todo} />
                ))}
            </div>
            ;
        </>
    );
}

export default App;
