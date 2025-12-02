import { useEffect, useState } from 'react'
import Form2 from './components/Form2'
 
import './App.css'
import Displaytable from './components/Displaytable'
import { toast,ToastContainer } from 'react-toastify'
import Swal from "sweetalert2";


function App() {
  const [employee,setEmployee]=useState(JSON.parse(localStorage.getItem("employee") )|| [])
  const [editemp,seteditemp]=useState(null)

  const deleteemployee = (id) => {

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


  // const deleteemployee=(id)=>{
  //   const updateemployess=employee.filter((curEle)=>{
  //     return curEle.id !== id
  //   })

  //   setEmployee(updateemployess)
  //    toast.error("Data Deleted Successfully");

  // }
   const editemployee = (id)=>{
    const findemp= employee.find((curEle)=>{
      return curEle.id == id
    })
    seteditemp(findemp)
   }

   const updataEmployee = (data)=>{
    const updataData = employee.map((curEle)=>{
      return curEle.id == data.id ? data : curEle
    })
    setEmployee(updataData)
   }

   
  useEffect(()=>{
    localStorage.setItem("employee",JSON.stringify(employee))
  },[employee])
  return (
    <>
  <Form2 setEmployee={setEmployee} editemp={editemp} seteditemp={seteditemp} updataEmployee={updataEmployee}></Form2>
    <Displaytable employee={employee} deleteemployee={deleteemployee} editemployee={editemployee}></Displaytable>
      <ToastContainer position="top-right" />
    </>
  )
}

export default App
