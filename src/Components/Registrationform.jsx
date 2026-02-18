import React, { useState } from "react";
import "../registrationForm.css";
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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid Email";
    }
    if (formData.password.length < 6) {
      console.log(formData.password.length);
      newErrors.password = "Password must be atleast 6 characters";
    }
    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }
    if (!formData.course) {
      newErrors.course = "Select course";
    }
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted succesfully");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        course: "",
        terms: false,
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1 className="title">Registration Form</h1>
        <div className="box">
          <div className="field">
            <label htmlFor="name">Full name </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="error-box">
            {errors.name && <p className="error">* {errors.name}</p>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone number </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <div className="field-radio">
          <label htmlFor="gender">Gender </label>
          <div className="options">
            <div className="radioopt">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender}
                onChange={handleChange}
              />
              <span>Male</span>
            </div>

            <div className="radioopt">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender}
                onChange={handleChange}
              />
              <span>Female</span>
            </div>
          </div>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div className="field">
          <label htmlFor="course">Course </label>
          <select
            name="course"
            id="couse"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="" disabled>
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
          {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
        </div>
        <div className="terms">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I agree to the terms
          </label>
          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registrationform;
