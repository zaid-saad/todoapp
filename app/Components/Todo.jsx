
import React from 'react'

const Todo = ({id,title,description,mongoId,complete, deleteTodo ,CompleteTodo}) => {
    return (
        
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-black">
                    {id}
                </th>
                <td className="px-6 py-4">
                    {title}
                </td>
                <td className="px-6 py-4">
                    {description}
                </td>
                <td className="px-6 py-4">
                    {complete?"Completed":"Pending"}
                </td>
                <td className="px-6 py-4 flex gap-1">
                    <button onClick={()=>deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                    <button onClick={()=>CompleteTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white'>Done</button>
                </td>
            </tr>

        
    )
}

export default Todo