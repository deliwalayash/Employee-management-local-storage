import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Form2 = ({ setEmployee, editemp, seteditemp, updateEmployee }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    salary: "",
    department: "",
    gender: "",
    skills: [],
    rating: "",
    mobile: "",
  });

  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...user.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((item) => item !== value);
      }

      setUser({ ...user, skills: updatedSkills });
      setErr({ ...err, skillsError: "" });
      return;
    }

    setUser({ ...user, [name]: value });
    setErr({ ...err, [name + "Error"]: "" });
  };

  useEffect(() => {
    if (editemp) {
      setUser(editemp);
      setErr({});
    }
  }, [editemp]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errObj = {};
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!user.name.trim()) errObj.nameError = "Please Enter Name";
    if (!emailRegex.test(user.email)) errObj.emailError = "Enter Valid Email";
    if (user.salary === "" || isNaN(user.salary)) errObj.salaryError = "Enter Salary";
    if (!user.department) errObj.departmentError = "Select Department";

    if (!user.gender) errObj.genderError = "Select Gender";
    if (user.skills.length === 0) errObj.skillsError = "Select At Least One Skill";

    if (!user.rating) errObj.ratingError = "Select Rating";

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(user.mobile)) errObj.mobileError = "Enter 10 Digit Mobile Number";

    setErr(errObj);
    if (Object.keys(errObj).length > 0) return;

    if (editemp) {
      updateEmployee(user);
      toast.success("Employee Updated!");
    } else {
      const emp = { id: Date.now(), ...user };
      setEmployee((prev) => [...prev, emp]);
      toast.success("Employee Added!");
    }

    seteditemp(null);
    setUser({
      name: "",
      email: "",
      salary: "",
      department: "",
      gender: "",
      skills: [],
      rating: "",
      mobile: "",
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
          Form Validation
        </h1>

        <div className="grid lg:grid-cols-2 gap-4">

          {/* NAME */}
          <div className="mb-5">
            <label className="text-white">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            />
            <p className="text-red-400 text-sm">{err.nameError}</p>
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            />
            <p className="text-red-400 text-sm">{err.emailError}</p>
          </div>

          {/* SALARY */}
          <div className="mb-5">
            <label className="text-white">Salary</label>
            <input
              type="number"
              name="salary"
              value={user.salary}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            />
            <p className="text-red-400 text-sm">{err.salaryError}</p>
          </div>

          {/* DEPARTMENT */}
          <div className="mb-5">
            <label className="text-white">Department</label>
            <select
              name="department"
              value={user.department}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
            <p className="text-red-400 text-sm">{err.departmentError}</p>
          </div>

          {/* GENDER */}
          <div className="mb-5">
            <label className="text-white">Gender</label>
            <div className="flex gap-3 text-white mt-1">
              <label><input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleChange} /> Female</label>
            </div>
            <p className="text-red-400 text-sm">{err.genderError}</p>
          </div>

          {/* SKILLS */}
          <div className="mb-5">
            <label className="text-white">Skills</label>
            <div className="flex flex-col text-white mt-1">
              <label><input type="checkbox" value="Technical Skill" checked={user.skills.includes("Technical Skill")} onChange={handleChange} /> Technical Skill</label>
              <label><input type="checkbox" value="Soft Skill" checked={user.skills.includes("Soft Skill")} onChange={handleChange} /> Soft Skill</label>
              <label><input type="checkbox" value="Public Speaking" checked={user.skills.includes("Public Speaking")} onChange={handleChange} /> Public Speaking</label>
            </div>
            <p className="text-red-400 text-sm">{err.skillsError}</p>
          </div>

          {/* RATING */}
          <div className="mb-5">
            <label className="text-white">Rating (1–5)</label>
            <select
              name="rating"
              value={user.rating}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            >
              <option value="">Select Rating</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <p className="text-red-400 text-sm">{err.ratingError}</p>
          </div>

          {/* MOBILE */}
          <div className="mb-5">
            <label className="text-white">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              className="bg-gray-50 border p-2.5 w-full rounded-lg"
            />
            <p className="text-red-400 text-sm">{err.mobileError}</p>
          </div>

        </div>

      <div className="text-center">
          <button
          type="submit"
          className="text-white bg-blue-700 px-5 py-2.5 rounded-lg mt-5"
        >
          {editemp ? "Update" : "Submit"}
        </button>
      </div>

      </form>
    </div>
  );
};

export default Form2;
