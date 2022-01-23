import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getTodoAsync } from "../redux/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos);

    useEffect(()=>{
        dispatch(getTodoAsync());
    },[dispatch]);

    // const todos = [
	// 	{ id: 1, title: 'todo1', completed: false },
	// 	{ id: 2, title: 'todo2', completed: false },
	// 	{ id: 3, title: 'todo3', completed: true },
	// 	{ id: 4, title: 'todo4', completed: false },
	// 	{ id: 5, title: 'todo5', completed: false },
	// ];

    return (
        <ul className="list-group">
            {todos.map((todo)=>(
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoList;
