import React from "react";

const Upperbody = () => {
  return (
    <div className="" style={{marginBottom:"15px"}}>

    <div className="d-flex justify-content-between">
      <div>

        <h5>Tracker</h5>
      </div>
      <div>
        <form>
          <div className="row">
            <div className="col">
              <div style={{ margin: "4px", padding: "0px", fontSize: "10px", color: "#62A4A8" }}>
                Period
              </div>
              <select className="form-select" id="sel1" name="sellist1">
                <option>Today</option>
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="col">
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
    </div>
  )
}

export default Upperbody;