import React, {useState, useEffect} from 'react';
import axios, { all } from "axios";
import { useNavigate, Link} from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [username, setUsername] = useState('')

 async function submit(e) {
  e.preventDefault();

  try{
    await axios.post("http://localhost:3002/signup", {
      email, password, username
    })
    .then( res=>{
      if(res.data=== "exist"){
        alert("user exist");
        
    }
    else if(res.data==="notexist"){
      window.location.href = "http://localhost:3002/dashboard";
       
     
    }
   })
   .catch(e=>{
    alert("wrong details");
    console.log(e);
   })
    
  }
  catch{
    console.log(e);
  }
 }
  return (
    <div className='mt-5'>
      <input className='mt-5' type='email' onChange={(e) => {setEmail(e.target.value)}} name='email' placeholder='Email'/>
      <input type='password' name='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
      <input type='text' name='username' onChange={(e) => {setUsername(e.target.value)}} placeholder='Username'/>
      <input type='submit' onClick={submit}/>

      <br/>
      <p>Or,</p>
      <br/>
      <Link to='/login'>login account</Link>
    </div>
  )
}

export default SignUp