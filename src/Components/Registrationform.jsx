import React, { useState } from "react";

function Registrationform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    course: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted succesfully");
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="phone">Phone number </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>

        <br />
        <br />
        <label htmlFor="course">Course </label>
        <select
          name="course"
          id="couse"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select course
          </option>
          <option value="CSE">CSE</option>
          <option value="AIML">AIML</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Data Science">Data Science</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="terms"
            value={formData.terms}
            onChange={handleChange}
          />
          I agree to the terms
        </label>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registrationform;
