import axios from 'axios'
import React from 'react'
import { BiEdit, BiSolidTrashAlt } from 'react-icons/bi'

const AllTodo = ({ todos }) => {
    const deleteTodo = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log("Deleted!!", response);
        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = async (id) => {
        console.log(id);
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                title: 'updatedTitle',
            });
            console.log("Updated!!", response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            {todos.length && todos.map((todo, index) => {
                return (
                    <div key={Math.random(1) * index} className='bg-slate-900 text-white w-3/4 mx-auto mt-2 p-5 rounded-md shadow-sm shadow-[#5c5c5c] flex justify-between items-center'>
                        <div>
                            <p>{todo.title}</p>
                        </div>
                        <div className='flex gap-5'>
                            <BiEdit className='text-purple-500' onClick={() => updateTodo(todo.id)} size={20} />
                            <BiSolidTrashAlt className='text-red-500' onClick={() => deleteTodo(todo.id)} size={20} />
                        </div>

                    </div>
                )
            })}

        </>
    )
}

export default AllTodo