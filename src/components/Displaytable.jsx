import React from 'react'

const Displaytable = ({employee,deleteemployee,editemployee}) => {
  return (
    <div className=''>
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto ">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Salary
        </th>
        <th scope="col" className="px-6 py-3">
          Department
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
{
  employee.map((curEle)=>{
    return (
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" key={curEle.id}>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {curEle.name}
        </th>
        <td className="px-6 py-4">
          {curEle.email}
        </td>
        <td className="px-6 py-4">
          {curEle.salary}
        </td>
        <td className="px-6 py-4">
          {curEle.department}
        </td>
        <td className="px-6 py-4">
          <button className='p-3 bg-red-800 text-white border-rose-800 border border-1 rounded' onClick={()=>{deleteemployee(curEle.id)}}>Delete</button>
          <button className='ms-4 py-3 px-5 bg-green-800 text-white border-green-600 border border-1 rounded' onClick={()=>{editemployee(curEle.id)}}>Edit</button>
        </td>
      </tr>
    )
  })
  }
    </tbody>
  </table>
</div>



    </div>
  )
}

export default Displaytable
