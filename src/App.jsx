import { useEffect, useState } from 'react'
import Form2 from './components/Form2'
 
import './App.css'

function App() {
  const [employee,setEmployee]=useState([])
  useEffect(()=>{
    localStorage.setItem("employess",JSON.stringify(employee))
  },[employee])
  return (
    <>
  <Form2 setEmployee={setEmployee}></Form2>
    </>
  )
}

export default App
