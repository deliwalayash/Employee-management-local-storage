import { useEffect, useState } from 'react'
import Form2 from './components/Form2'
 
import './App.css'
import Displaytable from './components/Displaytable'

function App() {
  const [employee,setEmployee]=useState(JSON.parse(localStorage.getItem("employee") )|| [])
  const [editemp,seteditemp]=useState(null)

  const deleteemployee=(id)=>{
    const updateemployess=employee.filter((curEle)=>{
      return curEle.id !== id
    })

    const [data,setData]=useState([])

    setEmployee(updateemployess)
  }
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
  <Form2 setEmployee={setEmployee} editemp={editemp} seteditemp={seteditemp}></Form2>
    <Displaytable employee={employee} deleteemployee={deleteemployee} editemployee={editemployee}></Displaytable>
    </>
  )
}

export default App
