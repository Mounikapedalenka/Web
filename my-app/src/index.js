import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import App from './App';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import About from './About';
import New from './New';
import New1 from './New1';
import Admin from './Admin';
import Adminpage from './Adminpage';
import Student from './Student';
import Studentpage from './Studentpage';
import Trainer from './Trainer';
import Edit from './Edit';
import Pay from './Pay';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<App/>}></Route>
<Route path='Home' element={<Home/>}></Route>
 <Route path="signup" element={<Signup/>}></Route>
 <Route path="Login" element={<Login/>}></Route>
 <Route path="About" element={<About/>}></Route>
 <Route path="New" element={<New/>}></Route>
 <Route path="New1" element={<New1/>}></Route>
 <Route path="Admin" element={<Admin/>}></Route>
 <Route path="Adminpage" element={<Adminpage/>}></Route>
 <Route path="Student" element={<Student/>}></Route>
  <Route path="Studentpage/:id" element={<Studentpage/>}></Route>
 <Route path="Trainer" element={<Trainer/>}></Route>
 <Route path="Edit" element={<Edit/>}></Route>
 <Route path="Pay" element={<Pay/>}></Route>
</Routes>
</BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();