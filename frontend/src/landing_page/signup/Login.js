import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:3002/login",{
                email, password
            })
            .then( res=>{
                if(res.data=== "exist"){
                    window.location.href = "http://localhost:3002/dashboard";
                }
                else if(res.data==="notexist"){
                    alert("user not exist");
                 
                }
        }
       )}
        catch(e){
             console.log(e);
        }
    }
  return (
    <div className='container mt-5'>
        <h1 className='mt-5'>Login</h1>
        <from>
            <input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <input type='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

            <input  type='submit' onClick={submit}/>
        </from>
        <br/>
        <p>Or,</p>
        <br/>
        <Link to='/signup'>create account</Link>

        
    </div>
  )
}

export default Login