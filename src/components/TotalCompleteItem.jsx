import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
    const completedTodos = useSelector((state)=>
        state.todos.filter((todo)=>todo.completed===true)
    );

	return (
        <h4 className='mt-3'>
            {(completedTodos.length===1 || completedTodos.length===0)?`Total Completed Item : ${completedTodos.length}`:`Total Completed Items : ${completedTodos.length}`}
        </h4>
    );
};

export default TotalCompleteItems;