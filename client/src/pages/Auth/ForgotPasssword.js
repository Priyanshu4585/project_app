import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
  <Layout title={"Forgot Password"}>
      <div className="login-container"  style={{backgroundImage: "url(/images/register/registerBG.jpg)"}}>
        <div className="card-imageholder">
          <div
            className="card-image"
            style={{ backgroundImage: "url(/images/register/rp.png)" }}
          >
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please register with your personal info
            </p>
            <a href="/register">
              <button className="normal">Register</button>
            </a>
          </div>
          <div className="card">
            <div className="card-header">Reset Password</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                {/* Security Question */}
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
                {/* new Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your new password"
                    required
                  />
                </div>
                {/* Submit Button */}
                <div className="login-btn">
                  <button type="submit" className="green" >
                    Login
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

export default ForgotPasssword;
