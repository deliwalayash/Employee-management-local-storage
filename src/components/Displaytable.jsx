import React from 'react'

const Displaytable = ({ employee, deleteemployee, editemployee }) => {

  const stars= (rating)=>{
    return ("⭐".repeat(rating))
  }
  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase font-semibold bg-gray-50 text-center">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Salary</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Skills</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Mobile</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {employee.map((curEle) => (
              <tr className="bg-white border-b dark:bg-gray-800 text-white text-center" key={curEle.id}>
                <td className="px-6 py-4">{curEle.name}</td>
                <td className="px-6 py-4">{curEle.email}</td>
                <td className="px-6 py-4">{curEle.salary}</td>
                <td className="px-6 py-4">{curEle.department}</td>
                <td className="px-6 py-4">{curEle.gender}</td>
                <td className="px-6 py-4">{curEle.skills.join(", ")}</td>
                <td className="px-6 py-4">{stars(curEle.rating)}</td>
                <td className="px-6 py-4">{curEle.mobile}</td>
                <td className="px-6 py-4">
                  <button
                    className="p-2 bg-red-700 text-white rounded"
                    onClick={() => deleteemployee(curEle.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="ms-4 p-2 bg-green-700 text-white rounded"
                    onClick={() => editemployee(curEle.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Displaytable;
