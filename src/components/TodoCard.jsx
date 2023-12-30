import "../styles/TodoCard.css";
const TodoCard = ({ props }) => {
    function changeStatus(e) {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            e.target.children[0].classList.remove("active");

            // Change status in localStorage
            const todos = JSON.parse(localStorage.getItem("todos"));
            const todoIndex = todos.findIndex((todo) => todo.id === props.id);
            todos[todoIndex].done = false;
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            e.target.classList.add("active");
            e.target.children[0].classList.add("active");

            // Change status in localStorage
            const todos = JSON.parse(localStorage.getItem("todos"));
            const todoIndex = todos.findIndex((todo) => todo.id === props.id);
            todos[todoIndex].done = true;
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    function deleteTodo(e) {
        e.target.parentElement.parentElement.remove();

        // Delete todo from localStorage
        const todos = JSON.parse(localStorage.getItem("todos"));
        const todoIndex = todos.findIndex((todo) => todo.id === props.id);
        todos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    return (
        <div id="todo-wrapper">
            <div className="todo-top-wrapper">
                {props.done ? (
                    <div
                        id="todo-status"
                        className="active"
                        onClick={changeStatus}
                    >
                        <div id="toggle-ball" className="active"></div>
                    </div>
                ) : (
                    <div id="todo-status" onClick={changeStatus}>
                        <div id="toggle-ball"></div>
                    </div>
                )}
                <div id="todo-delete" onClick={deleteTodo}></div>
            </div>
            <div id="todo-title">{props.title}</div>
            <div id="todo-body">{props.body}</div>
            <div className="todo-bottom-wrapper">
                <div id="created-on">{props.createdOn}</div>
                <div id="todo-id">{props.id}</div>
            </div>
        </div>
    );
};

export default TodoCard;
