import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Upperbody = () => {
  return (
    <>

    <div className="d-flex justify-content-between" style={{marginBottom:"0px"}}>
      <div>

        <h3 style={{borderBottom: '2px solid #62A4A8', paddingBottom:"5px", color:"#62A4A8"}}>Tracker</h3>   
      
      </div>
      <div><br/><form class="d-flex" style={{marginBottom:"0px"}}>
        <input class="form-control" type="text" placeholder="Search lane/monotainer by name/id" style={{borderRadius:"0px"}}/>
        <button class="btn btn-light btn-sm" type="button" style={{  borderRadius:"0px", paddingTop:"1px", borderColor:"#E7E7E7"}}><IoSearchSharp style={{fontSize:"20px"}} /></button>
      </form></div>
      <div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div style={{ margin: "4px", padding: "0px", fontSize: "10px", color: "#62A4A8" }}>
                Period
              </div>
              <select className="form-select" id="sel1" name="sellist1">
                <option>Today</option>
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="col-md-6">
              <div style={{ margin: "4px", padding: "0px", fontSize: "10px", color: "#62A4A8" }}>
                Filter
              </div>
              <select className="form-select" id="sel2" name="sellist2">
                <option>All</option>
                <option>Monitor (5)</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
   
    </>
  )
}

export default Upperbody;