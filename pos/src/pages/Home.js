import React from 'react';
import Header from '../components/Header';
function Home() {
  return (
    <div class='container'>
        <Header/>
      <div className='home'>
        <img src={"https://mybk.hcmut.edu.vn/tuyensinh/images/sl1.jpg"} alt="img" style={{  height: "900px",width: "auto"}}/>
      </div>
    </div>
  );
}

export default Home;