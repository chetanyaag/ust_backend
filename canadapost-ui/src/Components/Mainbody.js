import React, { useEffect, useState } from "react";

import RealTimePair from "./RealTimePair"

import { IoSend } from "react-icons/io5";



const Mainbody = () => {


    const [data, setData] = useState([])



    useEffect(() => {
        fetch("http://127.0.0.1:4000/table/fetch_data1/").then(res => res.json())
            .then(json => { setData(json) })


    })



    return (

        <div className="" style={{marginTop:"0px"}}>
             <div className="d-flex justify-content-between" style={{margin:"0px", padding:"0px"}}>
      <div>
      </div>
      <div>
        <b style={{color:"orange", fontSize:"11px"}}>Truck ordered&nbsp;&nbsp;: 12</b>
        <p style={{color:"red", fontWeight:"bold", fontSize:"11px"}}>Truck Requied&nbsp;: 10</p>
      </div>
    </div>
            <div className="row">



                <div className="col-md-2">

                    <h4 style={{ color: "Orange", marginBottom: "0px" }}><i className='fas fa-dolly-flatbed'></i> &nbsp;Pending&nbsp;&nbsp;&nbsp;<IoSend style={{fontSize:"32px"}}/></h4><br />
                    <div className="card">
                        <div className="card-body">
                            {/* <button type="button" className="btn btn-outline-secondary btn-sm" style={{ borderColor: "rgba(28, 28, 28, 0.688)", marginBottom: "2px" }}> hi</button>
                                <button type="button" className="btn btn-outline-secondary btn-sm" style={{ borderColor: "rgba(28, 28, 28, 0.688)" }}>hi</button> */}

                            <div className="row" >
                                <div className="col-md-3" style={{ marginRight: "10px", /*marginLeft: "10px"*/ }}>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button><br />
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>


                                </div>
                                <div className="col-md-3" style={{ marginRight: "10px", marginLeft: "10px" }}>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button><br />
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "10px" }}>A807AF</button>


                                    <button type="button" className="btn btn-warning btn-sm" style={{ marginBottom: "5px", borderColor: "orange", fontSize: "20px", paddingLeft: "10px", paddingRight: "15px" }}>+27</button>


                                </div>


                            </div>





                        </div>
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop:"10px"}}>

                    <div className="row" style={{ marginBottom: "8px" }}>
                        <div className="col-md-1" style={{ marginRight: "10px", marginLeft: "0px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;1</dt></button></div>
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;2</dt></button></div>
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;3</dt></button></div>
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;4</dt></button></div>
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;5</dt></button></div >
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;6</dt></button></div >
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;7</dt></button></div >
                        <div className="col-md-1" style={{ marginLeft: "10px", marginRight: "10px" }}><button type="button" className="btn btn-outline-secondary btn-sm" style={{ backgroundColor: "white", borderColor: "#62A4A8" }}><dt style={{ color: "#62A4A8", fontSize: "10px" }}>Position&nbsp;8</dt></button></div >
                    </div >
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <dt>Lane Details 1 </dt>
                            <div className="d-flex justify-content-between">
                                <div>Lane In</div>
                                <div>Lane Out</div>
                            </div><br />
                            <div className="row">

                                {data.map((d, index)=>{
                                    return(
                                   <>
                                   {index%2==0?<RealTimePair upper={d.upper} lower={d.lower}></RealTimePair>:null}</> 
                                    )
                                })}
                            </div >
                            <br />
                        </div >
                    </div >
                </div >


                <div className="col-md-2 " >

                    <h4 style={{ color: "green", marginBottom: "5px" }}><IoSend style={{fontSize:"28px"}}/>&nbsp; &nbsp;Processed&nbsp;<i className='fas fa-dolly-flatbed'></i></h4><br />
                    <div className="card">
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-3" style={{ marginRight: "10px", /*marginLeft: "10px"*/ }}>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button><br />
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>


                                </div>
                                <div className="col-md-3" style={{ marginRight: "10px", marginLeft: "10px" }}>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button><br />
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>
                                    <button type="button" className="btn btn-outline-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "10px" }}>A807AF</button>


                                    <button type="button" className="btn btn-success btn-sm" style={{ marginBottom: "5px", borderColor: "green", fontSize: "20px", paddingLeft: "15px", paddingRight: "22px" }}>+5</button>


                                </div>


                            </div>  </div>
                    </div>
                </div>
                <div className="col-md-2">
           

                    <h4 style={{ borderBottom: '2px solid #62A4A8', color: "#62A4A8", marginBottom: "22px", paddingBottom:"10px" }}>
                        <i className="fas fa-dolly-flatbed"></i> <b style={{fontSize:"15px"}}>&nbsp;Planogram View</b>
                    </h4>
                    <div className="card">
                        <div className="card-body">
                            <h6>Lane 1 </h6>

                            <div className="d-flex justify-content-between">
                                <div style={{ fontWeight: "700" }}>Toronto</div>
                                <div>
                                    <i
                                        className="far fa-bell"
                                        style={{
                                            fontSize: "20px",
                                            color: "rgb(115, 114, 114)",
                                        }}
                                    ></i>{" "}
                                    <b style={{ fontSize: "20px" }}>23</b>
                                </div>
                            </div>
                            <br />
                          
                           
                            <div style={{ padding: "0px", margin: "0px" }}>
                                <button type="button" className="btn btn-outline-secondary btn-sm" style={{ borderColor: "rgba(28, 28, 28, 0.688)", fontSize: "9px", padding: "3px" }}><dt>12</dt> In Stage </button>
                                <button type="button" className="btn btn-outline-secondary btn-sm" style={{ borderColor: "rgba(28, 28, 28, 0.688)", fontSize: "9px", padding: "3px", marginLeft: "2px" }}><dt>15</dt> Mapped </button>
                                <button type="button" className="btn btn-outline-secondary btn-sm" style={{ borderColor: "rgba(28, 28, 28, 0.688)", fontSize: "9px", padding: "3px", marginLeft: "2px" }}><dt>10</dt> Missing </button>
                            </div><br /><div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <button type="button" className="btn btn-success btn-sm" style={{ /*backgroundColor: "#454B1B", borderColor:"#62A4A8",*/ padding: "0px", width: "100px", fontSize:"20px" }} > Total  35 </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div> </div>

    );
};

export default Mainbody;




