import React,{useState}from "react";
import './Login.css';
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
export default function Login(){
    const [data,setData]=useState({email:'',password:''})
     // eslint-disable-next-line
const [show,setShow]=useState(false)
 const usenav = useNavigate();
 
const handler=(e)=>{
  const{name,value}=e.target;

  setData((prevState)=>
  ({...prevState,[name]:value}))
}
const submitHandler=()=>{
   setShow(true);
   const login = {email:data.email,password:data.password};
   axios.post('http://localhost:8000/Login',login).then((res)=>
   {
   
     console.log(res.data[0].login,res.data[0].roletype);
     localStorage.setItem('username',res.data[0].username)
   
   if(res.data[0].roletype==='admin' && res.data[0])
   {
    alert("logged in successfully");
    usenav(`/Adminpage`)
     
   }
   else if(res.data[0].roletype==='student' && res.data[0])
   {
    alert('logged in successfully');
    alert('hiiii');
   usenav(`/Studentpage/${res.data[0].id}`)
   }
   data.email=''
   
     })
  }
    return(
       
        <div class="container1">
        
          
      
              <h2>Login Page</h2>
      
                    
                    <i class="bi bi-envelope-at-fill"> Email  </i><br></br>
                    <input type="text"  class="form-control form-control-lg" name="email" placeholder="email"  value={data.email} onChange={handler} required/>
                    <label class="form-label" for="form2Example17"></label>
                    <br></br>              
                    <i>Password   </i><br></br>
                    <input type="password"  class="form-control form-control-lg" name="password" placeholder="password"  value={data.password} onChange={handler} required/>
                    <label class="form-label" for="form2Example17"></label>
                    <p class="small mb-5 pb-lg-2"><a class="text-black-50" href="#!">Forgot password?</a></p>
      
                    <button type="button" class="btn btn-outline-warning" onClick={submitHandler}>login</button>
      
                 
      
                  <div>
                    <p class="mb-5">Don't have an account? <a href="#!" class="text-black-50 fw-bold text-decoration-none"><Link to={'/Signup'}>Signup</Link></a>
                    </p>
                  </div>
                  </div>
      
      
    )
}