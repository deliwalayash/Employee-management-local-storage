import { useEffect, useState } from "react";
import Form2 from "./components/Form2";
import Displaytable from "./components/Displaytable";
import Controls from "./components/Controls";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

import "./App.css";

function App() {
  const [employee, setEmployee] = useState(
    JSON.parse(localStorage.getItem("emp")) || []
  );

  
  const dummyEmployee = [
  { id: 1, name: "Amit Shah", email: "amit.shah@gmail.com", salary: 35000, department: "IT" },
  { id: 2, name: "Riya Patel", email: "riya.patel@gmail.com", salary: 28000, department: "HR" },
  { id: 3, name: "Kunal Mehta", email: "kunal.mehta@gmail.com", salary: 52000, department: "Finance" },
  { id: 4, name: "Sneha Desai", email: "sneha.desai@gmail.com", salary: 46000, department: "Marketing" },
  { id: 5, name: "Manish Gupta", email: "manish.gupta@gmail.com", salary: 25000, department: "IT" },
  { id: 6, name: "Priya Nair", email: "priya.nair@gmail.com", salary: 40000, department: "HR" },
  { id: 7, name: "Rahul Verma", email: "rahul.verma@gmail.com", salary: 55000, department: "Finance" },
  { id: 8, name: "Jasmine Kaur", email: "jasmine.kaur@gmail.com", salary: 30000, department: "Marketing" },
  { id: 9, name: "Ankit Yadav", email: "ankit.yadav@gmail.com", salary: 48000, department: "IT" },
  { id: 10, name: "Nikita Shah", email: "nikita.shah@gmail.com", salary: 27000, department: "HR" },
  { id: 11, name: "Rohan Singh", email: "rohan.singh@gmail.com", salary: 60000, department: "Finance" },
  { id: 12, name: "Meera Joshi", email: "meera.joshi@gmail.com", salary: 32000, department: "Marketing" },
  { id: 13, name: "Sagar Jain", email: "sagar.jain@gmail.com", salary: 45000, department: "IT" },
  { id: 14, name: "Heena Modi", email: "heena.modi@gmail.com", salary: 29000, department: "HR" },
  { id: 15, name: "Vikas Kumar", email: "vikas.kumar@gmail.com", salary: 51000, department: "Finance" }
];

  useEffect(()=>{
    const existingEmployess=JSON.parse(localStorage.getItem("emp"))
    if(!existingEmployess || existingEmployess.length == 0){
      localStorage.setItem("emp",JSON.stringify(dummyEmployee))
      setEmployee(dummyEmployee)
    }
  },[])
  const [editemp, seteditemp] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortorder] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");

  // ---------------- SEARCH FILTER ----------------
  const foundEmployee = employee.filter((curEle) => {
    return curEle.name.toLowerCase().includes(search.toLowerCase());
  });

  // ---------------- SORT + FILTER ----------------
  let finalEmployees = [...foundEmployee];

  if (sortOrder === "asc") {
    finalEmployees.sort((a, b) => a.salary - b.salary);
  } else if (sortOrder === "des") {
    finalEmployees.sort((a, b) => b.salary - a.salary);
  }

  if (searchDepartment !== "") {
    finalEmployees = finalEmployees.filter((curEle) => {
      return curEle.department === searchDepartment;
    });
  }

  if (searchDepartment !== "" && finalEmployees.length === 0) {
    Swal.fire("Oops!", "No members found in this department", "info");
  }

  // ---------------- DELETE EMPLOYEE ----------------
  const deleteemployee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = employee.filter((curEle) => curEle.id !== id);
        setEmployee(updated);

        Swal.fire("Deleted!", "Employee has been removed.", "success");
      }
    });
  };

  // ---------------- EDIT EMPLOYEE ----------------
  const editemployee = (id) => {
    const findemp = employee.find((curEle) => curEle.id === id);
    seteditemp(findemp);
  };

  // ---------------- UPDATE EMPLOYEE ----------------
  const updateEmployee = (updatedObj) => {
    const updatedList = employee.map((curEle) =>
      curEle.id === updatedObj.id ? updatedObj : curEle
    );
    setEmployee(updatedList);
    seteditemp(null);
  };

  // ---------------- LOCAL STORAGE SAVE ----------------
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employee));
  }, [employee]);

  return (
    <>
      <Form2
        setEmployee={setEmployee}
        editemp={editemp}
        seteditemp={seteditemp}
        updateEmployee={updateEmployee}
      />

      <Controls
        setSearch={setSearch}
        setSortorder={setSortorder}
        setSearchDepartment={setSearchDepartment}
      />

      <Displaytable
        employee={finalEmployees}
        deleteemployee={deleteemployee}
        editemployee={editemployee}
      />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
