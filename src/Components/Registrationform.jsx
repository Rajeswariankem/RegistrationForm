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
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [hideToast, setHideToast] = useState(false);

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
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const showNotification = (msg, type) => {
    setMessage(msg);
    setMessageType(type);

    setHideToast(false);
    setShowToast(true);

    setTimeout(() => {
      setHideToast(true);
    }, 2500);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      showNotification("Form submitted successfully!", "success");
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
    } else {
      showNotification("Please fill all required fields!", "error");
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1 className="title">Registration Form</h1>
        {showToast && (
          <div className={`toast ${messageType} ${hideToast ? "hide" : ""}`}>
            <p>{message}</p>
            <div className="toast-line"></div>
          </div>
        )}
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

        <div className="box">
          <div className="field">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="error-box">
            {errors.email && <p className="error">* {errors.email}</p>}
          </div>
        </div>

        <div className="box">
          <div className="field">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="error">
            {errors.password && <p className="error">* {errors.password}</p>}
          </div>
        </div>

        <div className="box">
          <div className="field">
            <label htmlFor="phone">Phone number </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="error">
            {errors.phone && <p className="error">* {errors.phone}</p>}
          </div>
        </div>

        <div className="box">
          <div className="field-radio">
            <label htmlFor="gender">Gender </label>
            <div className="options">
              <div className="radioopt">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                <span>Male</span>
              </div>

              <div className="radioopt">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                <span>Female</span>
              </div>
            </div>
          </div>
          <div className="error">
            {errors.gender && <p className="error">* {errors.gender}</p>}
          </div>
        </div>

        <div className="box">
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
          </div>
          <div className="error">
            {errors.course && <p className="error">* {errors.course}</p>}
          </div>
        </div>

        <div className="box">
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
          </div>
          <div className="error">
            {errors.terms && <p className="error">* {errors.terms}</p>}
          </div>
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registrationform;
