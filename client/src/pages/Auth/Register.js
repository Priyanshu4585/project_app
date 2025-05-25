import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setAddress("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
     <Layout title={"Register yourself"}>
      <div className="register-container" style={{backgroundImage: "url(/images/register/registerBG.jpg)"}}>
        <div className="card-imageholder mt-5 mb-5">
          <div
            className="card-image"
            style={{ backgroundImage: "url(/images/register/rp.png)" }}
          >
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <a href="/login">
              <button className="normal">Login</button>
            </a>
          </div>
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* Phone*/}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                {/* Answer */}
                <div className="mb-3">
                  <label htmlFor="answer" className="form-label">
                    Where were you born?
                  </label>
                  <input
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="text"
                    className="form-control"
                    id="answer"
                    placeholder="Enter your answer"
                    required
                  />  
                </div>
                {/* Submit Button */}
                <div className="register-btn">
                  <button type="submit" className="green">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
