import React,{useState} from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import './Signup.css';

export default function Signup(){
   const [data,setData]=useState({username:"", email:"", password:"",roletype:"",totalfee:"",discount:"",balance:"",duedate:"",clearedfee:""});
    // eslint-disable-next-line
   const [show,setShow]=useState(false);

   const handler=(e)=>{
    const {name,value}=e.target;

    setData((prevstate)=>
        ({...prevstate,[name]:value})
    )
   }
   const submitHandler=()=>{
    setShow(true);
     // eslint-disable-next-line
    const username={username:data.username,email:data.email,password:data.password,roletype:'student',totalfee:'0',discount:'0',balance:'0',duedate:'0',clearedfee:'0'}
     // eslint-disable-next-line
    axios.post('http://localhost:8000/Signup',username).then((res)=>
   {
    setData(res.data)
    alert('registration sucessfully');
    console.log(res.data)
    username="";
   
   })
   }
    return(
        <div>
           <div class="form">
            <form>
                <div>
                <label>Username: </label>
                <br></br>
                <input type="text" class="from-control" name="username" placeholder="username" value={data.username} onChange={handler} requried />
                </div><br></br>
                <div>
                    <label>Email: </label>
                    <br></br>
                    <input type="text" class="from-control" name="email" placeholder="email" value={data.email} onChange={handler} required/>
                </div><br></br>
                <div>
                    <label>Password: </label>
                    <input type="password"  class="form-control form-control-lg" name="password" placeholder="password"  value={data.password} onChange={handler} required/>
                </div>
            <br></br>
             <button type="button" class="btn btn-primary" onClick={submitHandler}>submit</button>
                <Link to='/login'> <p class="text-center text-muted mt-1 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p></Link>
            </form>
           </div>
        </div>
    )
}