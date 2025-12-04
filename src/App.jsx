import { useEffect, useState } from 'react'
import Form2 from './components/Form2'

import './App.css'
import Displaytable from './components/Displaytable'
import { toast,ToastContainer } from 'react-toastify'
import Swal from "sweetalert2";
import Controls from './components/Controls'


function App() {
  const [employee,setEmployee]=useState(JSON.parse(localStorage.getItem("employee") )|| [])
  const [editemp,seteditemp]=useState(null)
  const [search,setSearch]=useState("")
  const [sortOrder,setSortorder]=useState("")
  const [searchDepartment,setSearchDepartment]=useState("")



    const foundEmployee=employee.filter((curEle)=>{
        return curEle.name.toLowerCase().includes(search.toLowerCase())
    })

    let finalEmloyess=[...foundEmployee]

    if(sortOrder == "asc"){
      finalEmloyess.sort((a,b)=>{return b.salary-a.salary})
    }
    else if(sortOrder == "des"){
        finalEmloyess.sort((a,b)=>{return a.salary -b.salary})
    }

   if(searchDepartment !== ""){
     finalEmloyess=finalEmloyess.filter((curEle)=>{
        return curEle.department == searchDepartment
    })
   }

   if (searchDepartment !== "" && finalEmloyess.length === 0) {
  Swal.fire("Oops!", "No members found in this department", "info");
}


  




  const deleteemployee=(id)=>{
    const updateemployess=employee.filter((curEle)=>{
      return curEle.id !== id
    })
    

<<<<<<< HEAD
    setEmployee(updateemployess)
  }
=======
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {

    if (result.isConfirmed) {
      // your delete logic here
      const updated = employee.filter((curEle) => curEle.id !== id);
      setEmployee(updated);


      Swal.fire("Deleted!", "Employee has been removed.", "success");
    }

  });

};


  
>>>>>>> 3f00a08 (seacr sorting and filtering operation done)
   const editemployee = (id)=>{
    const findemp= employee.find((curEle)=>{
      return curEle.id == id
    })
    seteditemp(findemp)
   }
  useEffect(()=>{
    localStorage.setItem("employee",JSON.stringify(employee))
  },[employee])
  return (
    <>
<<<<<<< HEAD
  <Form2 setEmployee={setEmployee} editemp={editemp} seteditemp={seteditemp}></Form2>
    <Displaytable employee={employee} deleteemployee={deleteemployee} editemployee={editemployee}></Displaytable>
=======
    

  <Form2 setEmployee={setEmployee} editemp={editemp} seteditemp={seteditemp} updataEmployee={updataEmployee}></Form2>
  <Controls setSearch={setSearch} setSortorder={setSortorder} setSearchDepartment={setSearchDepartment}></Controls>
    <Displaytable employee={finalEmloyess} deleteemployee={deleteemployee} editemployee={editemployee} ></Displaytable>
      <ToastContainer position="top-right" />
>>>>>>> 3f00a08 (seacr sorting and filtering operation done)
    </>
  )
}

export default App
