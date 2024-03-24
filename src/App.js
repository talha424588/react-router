import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Store from './component/Store';
import Navbar from './component/Navbar';
import NotFound from './component/NotFound';
import User from './component/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/store' element={<Store/>}/>
        {/* <Route path="/*" element={<NotFound/>}/> */}
        {/* //When user enter wrmng path and you want to redirect it then user navigate */}
        <Route path="/*" element={<Navigate to={"/"}/>}/>
        <Route path="/user/:name" element={<User/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
