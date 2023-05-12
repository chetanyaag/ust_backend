import React, { useState } from "react";

import { IoCaretBackCircle } from "react-icons/io5";





function Drawer({onCond}){
    const [isClick, setIsClick] = useState(true) 

    const handleClick=()=>{
    // if (isClick==true){
    //   setIsClick(false)
      onCond(false)
    // }
    // else{
    //   setIsClick(true)
    //   onCond(false)
    // }
    }

    return(<>
    <div className="draws"><br/>
    <button className="btn btn-lg" onClick={handleClick} style={{}}>
        <IoCaretBackCircle/>UST</button>
<br/>

<ul className="list-group">
  <li className="list-group-item active" style={{backgroundColor:"#DCDBDB", borderColor:"black", borderRadius:"0"}}>Tracker</li>
  <li className="list-group-item"  style={{ borderColor:"black", borderRadius:"0px"}}>Reports</li>
  <li className="list-group-item"  style={{ borderColor:"black", borderRadius:"0"}}>Analytics</li>
  <li className="list-group-item"  style={{ borderColor:"black", borderRadius:"0"}}>Planing</li>
  <li className="list-group-item"  style={{  borderRadius:"0"}}>Set Alerts</li>

</ul> 

        </div>
    </>)
}

export default Drawer;