import React from 'react'

const Controls = ({setSearch,setSortorder,setSearchDepartment}) => {
  return (
    <>
<div className="container mx-auto my-6 ">
  <div className="flex flex-wrap items-center gap-4 bg-gray-900 p-4 rounded-lg shadow-lg">

    {/* Search */}
    <input
      type="text"
      placeholder="Search employee..."
      className="w-60 bg-gray-800 border border-gray-600 text-white text-sm rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
      name='search'
        onChange={(e)=>{setSearch(e.target.value)}}    
    />


    {/* Sort Asc */}
    <button
      type="button"
      className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg text-sm"
    onClick={()=>{setSortorder("asc")}}>
      Salary ↑
    </button>

    {/* Sort Desc */}
    <button
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg text-sm"
       onClick={()=>{setSortorder("des")}}
    >
      Salary ↓
    </button>

    {/* Department Filter */}
    <select
      className="bg-gray-800 border border-gray-600 text-white text-sm px-4 py-2 rounded-lg"
      name="department"
      onChange={(e)=>{setSearchDepartment(e.target.value)}}
    >
      <option value="">All Departments</option>
      <option value="IT">IT</option>
      <option value="Finance">Finance</option>
      <option value="Marketing">Marketing</option>
      <option value="HR">HR</option>
    </select>

  </div>
</div>

    </>
  )
}

export default Controls