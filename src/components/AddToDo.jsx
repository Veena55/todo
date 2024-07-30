import axios from 'axios'
import React, { useRef } from 'react'

const AddToDo = () => {
    const newTodo = useRef();
    const addTodo = async () => {
        if (newTodo.current.value == '') {
            console.log("Can't be Empty!!");
            return;
        }
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: newTodo.current.value,
                body: 'Dummy',
                userId: 1,
            });
            console.log("Added!!", response.data);
            newTodo.current.value = '';
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-3/4 mx-auto my-5'>
            <div className='w-full flex justify-between mb-3'>
                <div className='w-full'>
                    <input type="text" className='p-3 w-full font-bold' ref={newTodo} />
                </div>
                <div>
                    <button className='bg-purple-500 px-5 py-3' onClick={addTodo}>Add</button>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default AddToDo