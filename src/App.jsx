import { useEffect, useState } from 'react'
import './App.css'
import AllTodo from './components/AllTodo'
import axios from 'axios';
import AddToDo from './components/AddToDo';

function App() {
  const [todo, setTodo] = useState([]);

  const fetchAllToDo = async (cancelToken) => {
    try {
      const allTodos = await axios.get("https://jsonplaceholder.typicode.com/users/1/todos", {
        cancelToken: cancelToken.token
      });
      console.log(allTodos.data);
      setTodo(allTodos.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error('Error fetching todos', error);
      }
    }
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchAllToDo(cancelToken);
    return () => {
      cancelToken.cancel('Component unmounted, canceling request');
    };
  }, [])
  return (
    <>
      <div className='bg-slate-950 py-5'>
        <h1 className=' p-5 text-2xl text-purple-400 font-bold text-center'>All Todo<sub>(s)</sub></h1>
        <AddToDo />
        <AllTodo todos={todo} />
      </div>


    </>
  )
}

export default App
