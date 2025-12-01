import React, { useState } from "react";

const Form2 = ({setEmployee}) => {

  const [user,setUser]=useState({
    name:"",
    email:"",
    salary:"",
    department:""
  })

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setEmployee(prev =>[...prev,user])
    setUser({
    name:"",
    email:"",
    salary:"",
    department:""
  })
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex justify-center items-center">
  
      <form className="w-full max-w-xl mx-auto bg-gray-800 p-8 rounded-xl " onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-white text-center mb-10">Form validation</h1>
    
    <div className="grid lg:grid-cols-2 gap-4">
         <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Name
    </label>
    <input type="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please Enter Name" required  name="name" value={user.name} onChange={handleChange}/>
     </div>
     <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Email
    </label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
     
    </div>
   
     <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Salary
    </label>
    <input type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="salary" value={user.salary} onChange={handleChange} placeholder="Salary"/>
    </div>
     <div className="mb-5">
      <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
  <select id="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " name="department" value={user.department} onChange={handleChange}>
    <option>Please Select Department</option>
    <option value="IT">IT</option>
    <option value="Finance">Finance</option>
    <option value="Marketing">Marketing</option>
    <option value="HR">HR</option>
  </select>
     
     </div>

    </div>

   <div className="text-center">
   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Submit
  </button>
 </div>
     </form>
    </div>
  );
};

export default Form2;
