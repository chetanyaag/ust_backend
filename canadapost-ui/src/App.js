import './App.css';
import React, { useState } from 'react';
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import Upperbody from "./Components/Upperbody";
import Mainbody from "./Components/Mainbody";
import Footer from "./Components/Footer";
import Drawer from "./Components/Drawer"






function App() {

  const [showDrawer, setShowDrawer] = useState(false)

  const handleDrawer =(data)=>{
    setShowDrawer(data)
  }
  const showDraw =()=>{
    return(
      <div >
        {showDrawer?<Drawer onCond={handleDrawer}></Drawer>:null}
      </div>

    )
  }



  return (
    <div className=''> 

      <Header onCond={handleDrawer}></Header>
      <div className='container'>
      <Timer></Timer>
      <Upperbody></Upperbody><br/><br/>
      <Mainbody></Mainbody>
      {/* <Pending></Pending> */}
      </div><br/><br/>
      <Footer></Footer>
      {/* <Drawer></Drawer> */}
      {showDraw()}
    </div>
  );
}

export default App;