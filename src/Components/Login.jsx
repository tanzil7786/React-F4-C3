import React ,{useState,useContext,useEffect} from 'react';
import axios from 'axios';
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login=()=>{

const{ profileInfo,setProfileInfo}=useContext(UserContext);
const [loginInfo,setLoginInfo]=useState({username:'',email:'',password:''});

const navigate=useNavigate();

const {username,email,password}=loginInfo;


useEffect(() => {
    if(JSON.parse(localStorage.getItem('userInfo'))){
     navigate('/profile');
    }
   }, [])


async function loginUser(event){
    event.preventDefault();
    
    if(!username || !email || !password){
        alert('Please fill all the fields !');
        return;
    }
    try{
      const response=await axios.post('https://dummyjson.com/auth/login',{username,password},{
        headers:{
            'Content-Type':'application/json'
        }
      })
      console.log(response.data);
      setProfileInfo(response.data);
      localStorage.setItem('userInfo',JSON.stringify(response.data));
      alert('Login SuccessFully !');
      navigate('/profile');
    }
    catch(error){
         console.log('Error: ',error.response.data.message);
         alert(error.response.data.message);
    }
}
    return (
        <div className="login-container">
               <div className="form-container">
               <p>Welcome back! 👋</p>
            <h2 className='login-heading'>Sign in to your account</h2>
            <form onSubmit={loginUser}>
                <section>
                    <label htmlFor="username" >Your Username</label><br />
                    <input type="text" id='username' value={loginInfo.username} onChange={(e)=>setLoginInfo({...loginInfo,username:e.target.value})}/>
                </section>
                <section>
                    <label htmlFor="email" >Your email</label><br />
                    <input type="email" id='email' value={loginInfo.email} onChange={(e)=>setLoginInfo({...loginInfo,email:e.target.value})}/>
                </section>
                <section>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id='password' value={loginInfo.password} onChange={(e)=>setLoginInfo({...loginInfo,password:e.target.value})}/>
                </section>
                <br />
                <button type="submit" id='login-btn'>CONTINUE</button>
            </form>
             <h6 className='forgotPassword'>Forget your password?</h6>
               </div>
             <div className='message'>Don't have an account? <span className='signup-redirection'>Sign up</span></div>
        </div>
    );
}
export default Login;