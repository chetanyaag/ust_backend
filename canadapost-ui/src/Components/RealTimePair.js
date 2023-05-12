import React from 'react'


const RealTimePair =(prop)=>{
    return (<div className="col-md-1" style={{ marginRight: "9px", marginLeft: "9px" }}>{console.log(prop.upper)}
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "rgb(20, 141, 20)", fontSize: "10px" }}>{prop.upper}</button><br />
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ borderColor: "rgb(20, 141, 20)", fontSize: "10px" }}>{prop.lower}</button>
                                </div>)
}

export default RealTimePair;