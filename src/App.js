import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Store from './component/Store';
import Navbar from './component/Navbar';
import NotFound from './component/NotFound';
import User from './component/User';
import Company from './component/Company';
import Login from './component/Security/Login';
import Protected from './component/Security/Protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/about/" element={ <Protected Component={About}/>}>
          <Route path="company" element={<Protected Component={Company}/>}/>
        </Route>
        <Route path='/store' element={<Protected Component={Store}/>}/>
        {/* <Route path="/*" element={<NotFound/>}/> */}
        {/* //When user enter wrmng path and you want to redirect it then user navigate */}
        <Route path="/*" element={<Navigate to={"/"}/>}/>
        <Route path="/user/:name"  element={<Protected Component={User}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
