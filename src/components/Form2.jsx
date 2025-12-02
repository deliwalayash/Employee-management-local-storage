import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";


const Form2 = ({ setEmployee, editemp, seteditemp,updataEmployee }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    salary: "",
    department: "",
  });

  const [err, setErr] = useState({}); // <-- error state

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    // remove error on typing
    setErr({ ...err, [e.target.name + "Error"]: "" });
  };

  useEffect(() => {
    if (editemp) {
      setUser(editemp);
      setErr({}); // clear errors while editing
    }
  }, [editemp]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ------------------------
    // 🔥 VALIDATION START HERE
    // ------------------------

    const errObj = {};

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (user.name.trim() === "") {
      errObj.nameError = "Please Enter Name";
    }
    if (user.email.trim() === "" || !emailRegex.test(user.email)) {
      errObj.emailError = "Please Enter Valid Email";
    }
    if (user.salary.trim() === "" || isNaN(user.salary)) {
      errObj.salaryError = "Please Enter Valid Salary";
    }
    if (user.department === "") {
      errObj.departmentError = "Please Select Department";
    }

    setErr(errObj);

    if (Object.keys(errObj).length > 0) {
      return;
    }

    if (editemp) {
      updataEmployee(user)
      toast.success("Employee Updated Successfully!");

    } else {
    
      const emp = {
        id: Date.now(),
        ...user,
      };
      setEmployee((prev) => [...prev, emp]);
      toast.success("Employee Added Successfully!");

    }

    seteditemp(null);

    // reset form
    setUser({
      name: "",
      email: "",
      salary: "",
      department: "",
    });
  };

  return (
    <div className="py-10 bg-white dark:bg-gray-900 flex justify-center items-center">
      <form
        className="w-full max-w-xl mx-auto bg-gray-800 p-8 rounded-xl"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="text-3xl font-semibold text-white text-center mb-10">
          Form validation
        </h1>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* NAME */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-black p-2.5 w-full rounded-lg"
              placeholder="Please Enter Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm">{err.nameError}</p>
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-black p-2.5 w-full rounded-lg"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm">{err.emailError}</p>
          </div>

          {/* SALARY */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">
              Salary
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-black p-2.5 w-full rounded-lg"
              placeholder="Salary"
              name="salary"
              value={user.salary}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm">{err.salaryError}</p>
          </div>

          {/* DEPARTMENT */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">
              Department
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-black p-2.5 w-full rounded-lg"
              name="department"
              value={user.department}
              onChange={handleChange}
            >
              <option value="">Please Select Department</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
            <p className="text-red-400 text-sm">{err.departmentError}</p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg"
          >
            {editemp ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
