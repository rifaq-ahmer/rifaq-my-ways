import React, { Component } from 'react';
import Navbar from "./Navbar"

const Home = () => {
    return ( 
        <> 
          <Navbar />
          <div style={{textAlign:"center", width:"70%", margin:"15%"}}>
              <h2><b>Apply and hear back every time.</b></h2>
              <h5>Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</h5>
              <button style={{borderRadius:"20px", padding:"8px 25px", marginTop:"20px"}} className="btn btn-success">Get's Started</button>
          </div>
        </>
     );
}
 
export default Home;