
import './App.css';
import { Todoadd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
const {todos,
  todosCount,
  pendingTodosCount,
  handleNewTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo} = useTodo ()

  return (
    <>
    <div className='card-to-do'>
      <h1>Lista de tareas</h1>
       <div className='counter-todos'>
        <h3> N° Tareas:{todosCount}</h3>
        <h3>Pendientes: {pendingTodosCount}</h3>
       </div>
       
       <div className='add-todo'>
       <h3>Agregar tarea</h3>
       <Todoadd handleNewTodo ={handleNewTodo}/>
       </div>
       <TodoList
       todos = {todos}
       handleUpdateTodo ={handleUpdateTodo}
       handleDeleteTodo = {handleDeleteTodo}
       handleCompleteTodo = {handleCompleteTodo}
       
       />
    </div>
    
   </>
  );
}

export default App;
