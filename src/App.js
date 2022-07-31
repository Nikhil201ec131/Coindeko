import React from 'react';
import {Link,Route,Routes} from "react-router-dom";
import {Layout,Typography,Space} from "antd"; 
import { BrowserRouter as Router } from "react-router-dom";
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails} from "./Components";

import "./App.css"
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar></Navbar>
        </div>
        <div className='main'>
    <Layout>
    
    <div className='routes'>
      
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        
      </Routes>
      
    </div>
    </Layout>
       
        <div className='footer' >
           <Typography.Title level={5} style={{color : 'white',textAlign:'center'}}>
              Coindeko<br/>
              All rights reserved
           </Typography.Title>
           <space>
            <Link to="/"> Home</Link>
            <Link to="/news"> News</Link>
            <Link to="/exchanges"> Exchanges</Link>
           </space>
           </div>
        </div>

     
    </div>
  );
}

export default App;
