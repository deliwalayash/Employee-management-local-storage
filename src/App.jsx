import { useEffect, useState } from "react";
import Form2 from "./components/Form2";
import Displaytable from "./components/Displaytable";
import Controls from "./components/Controls";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

import "./App.css";

function App() {
  const [employee, setEmployee] = useState(
    JSON.parse(localStorage.getItem("employee")) || []
  );

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
