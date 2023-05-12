import React, { useState } from "react";

import { IoMenu } from "react-icons/io5";
const Header = ( {onCond} ) => {

 const [isClick, setIsClick] = useState(false) 

const handleClick=()=>{
// if (isClick==true){
//   setIsClick(false)
//   onCond(false)
// }
// else{
//   setIsClick(true)
  onCond(true)
// }
}

  return (
    <div className="" >
    <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
    <button className="btn btn-lg" onClick={handleClick}>
        <IoMenu/></button>
      <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-2"><b>UST</b></span>
        <span className="fs-5"><b> - IoT Staging</b></span>
        <br />
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{ color: "rgb(47, 47, 47)" }}>
            <div style={{ margin: 0, padding: 0, fontSize: "10px" }}>Sites</div>Canada Post
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item disabled" href="#">
              Canada Post Site-2
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="far fa-bell" style={{ fontSize: "28px", color: "rgb(115, 114, 114)" }}></i>
          </a>
        </li>
        <ul className="nav nav-pills px-2 py-1 me-md-n4" aria-labelledby="dropdownMenuButton">
          <li className="mb-2">
            <i className="fa fa-user me-md-1" style={{ fontSize: "28px", color: "rgb(115, 114, 114)" }}></i>
          </li>
        </ul>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"></a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Change Password
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
 </div>
  );
};

export default Header;
