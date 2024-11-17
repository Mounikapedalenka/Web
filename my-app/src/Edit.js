import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState,useEffect,} from "react";
import { } from 'react-router-dom';
import { useParams} from 'react-router-dom';
export default function Edit()
{
const {id}=useParams();
// const [dropval,setDrop] = useState([])
console.log('id',id);
const[data,setData]=useState({Username:'',Email:'',totalfee:'',discount:'',balance:'',duedate:'',cleardfee:'',})
const[show,setShow]=useState(false);
// const usenav=useNavigate();
const handler=(e)=>
{
const{name,value}=e.target;
setData((prevState)=>
({...prevState,[name]:value}))
}
const submitHandler=()=>{
setShow(true);
const details={username:data.username,email:data.email,totalfee:data.totalfee,discount:data.discount,balance:data.balance,duedate:data.duedate,cleardfee:data.cleardfee}
axios.post(`http://localhost:8000/Edit/${id}`,details).then((res)=>{
setData(res.data[0]); 
console.log(res.data[0])
data.details='' 
})
}
useEffect(() => {
console.log('this is useEffect')
axios.get(`http://localhost:8000/singleuser/${id}`).then((res)=>{
console.log(res.data[0])
setData({username:res.data[0].username,email:res.data[0].email,totalfee:res.data[0].totalfee,discount:res.data[0].discount,balance:res.data[0].balance,duedate:res.data[0].duedate,cleardfee:res.data[0].cleardfee})
})
},[])
return(
<div style={{backgroundImage: 
`url("https://static2.tripoto.com/media/filter/nl/img/950250/TripDocument/1542527715_psx_20181118_131605.jpg")`}}>
<div>
{/* <section class="h-100 h-custom" style="background-color: 
#8fc4b7;"> */}
<div class="container py-5 h-100">
<div class="row d-flex justify-content-center align-items-center h-100">
<div class="col-lg-8 col-xl-6">
<div class="row mb-1 pb-2 pb-md-0 mb-md-5">
<div class="col-md-6">
<div class="form-outline">
<input type="text" class="form-control-er" name="Username" 
value={data.Username} placeholder="username" onChange={handler} required />
<label class="form-label" 
for="form3Example1w">username</label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" name="Email" 
value={data.Email} placeholder="email" onChange={handler} required />
<label class="form-label" 
for="form3Example1w">email</label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" name="totalfee" 
value={data.totalfee} placeholder="totalfee" onChange={handler} required
/> 
<label class="form-label" 
for="form3Example1w">totalfee </label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" name="discount" 
value={data.discount} placeholder="discount" onChange={handler} required
/> 
66
<label class="form-label" 
for="form3Example1w">discount</label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" name="balance" 
value={data.balance} placeholder="balance" onChange={handler} required
/> 
<label class="form-label" 
for="form3Example1w">balance</label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" name="duedate" 
value={data.duedate} placeholder="duedate" onChange={handler} required
/> 
<label class="form-label" 
for="form3Example1w">duedate</label>
</div>
<div class="form-outline">
<input type="text" class="form-control-er" 
name="cleardfee" value={data.cleardfee} placeholder="cleardfee" 
onChange={handler} required /> 
<label class="form-label" 
for="form3Example1w">cleardfee</label>
</div>
<button type="submit" class="btn btn-success btn-lg mb1" onClick={submitHandler}>submit</button><br/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}