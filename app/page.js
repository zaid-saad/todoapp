"use client"
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Home() {

  const [formData, setformData] = useState({
    title: "",
    description: "",
  });

  const [todoData, settodoData] = useState([])

  const fetchTodos = async ()=>{
      const response =  await axios('/api')
      settodoData(response.data.todos)
  }

  const deleteTodo = async (Id)=>{
    const response = await axios.delete('/api',{
      params:{
        mongoId:Id
      }
    })
    toast.success(response.data.msg)
    fetchTodos()
  } 

  const CompleteTodo = async (id)=>{
    const response = await axios.put('/api',{},{
      params:{
        mongoId:id

      }
    })
    toast.success(response.data.msg)
    fetchTodos()
  }




  useEffect(() => {
   
    fetchTodos()

  },[])
  


  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData(form => ({ ...form, [name]: value }));
    console.log(formData);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //  api code
      const response = await axios.post('/api', formData)


      toast.success(response.data.msg);
      setformData({
        title: "",
        description: "",
      })
     await fetchTodos()
    } catch (err) {
      toast.error("Error")
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <form onSubmit={onSubmit} className="flex items-center flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input onChange={onChange} value={formData.title} type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full " />
        <textarea onChange={onChange} value={formData.description} name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full"></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>



      <div className="relative overflow-x-auto w-[60%] mx-auto py-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item,index)=>{
              return <Todo key={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} id={index} deleteTodo={deleteTodo} CompleteTodo={CompleteTodo}/>
            })}

          </tbody>
        </table>
      </div>

    </>


  );
}
