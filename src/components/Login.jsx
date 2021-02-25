import React, { Component } from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar"
import "../index.css";
const Login = () => {
  return (
    <>
       <Navbar />
      <form id="form" style={{width: "30%", margin:"auto", marginTop:"10%"}}>
      <h3 style={{display:"inline"}}>Login</h3>
      <Link style={{float:"right", textDecoration:"none", color:"green"}} to="/"><h5>x</h5></Link> 
       <div style={{border:"1px solid gray", borderRadius:"10px", padding:"30px"}}>
       <h5 style={{textDecoration:"underLine", textAlign:"center", color:"green", margin:"40px 0px"}} >Student</h5>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p style={{color:"green", float:"right"}}>Forgot Password?</p>
        <button style={{ marginTop:"5px", width:"100%"}} type="submit" class="btn btn-success">
          Login
        </button>
        </div>
      </form>
    </>
  );
};

export default Login;
