import React, { useEffect,useState } from 'react'
import img1 from './../../Assets/Login/loginWelcomeImg.png';
import './Login.css';
import { NavLink, Redirect } from 'react-router-dom';
import { auth } from './../../firebase';
import UserLanding from './../UserLanding/UserLanding'

const Login = () =>{
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [hasAccount,setHasAccount]=useState(true);

    const clearInput =()=>{
        setEmail("");
        setPassword("");
    }
    const clearError =()=>{
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin =(email,password)=>{
        clearInput();
        clearError();
        auth.signInWithEmailAndPassword(email,password)
        .catch(err=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;    
            }
        });
    }
    const handleSignUp =(email,password)=>{
        clearInput();
        clearError();
        auth.createUserWithEmailAndPassword(email,password)
        .catch(err=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;    
            }
        });
    }
    const SignOut=()=>{
        auth.signOut();
        setUser("");
    }
    const authListener = () =>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                clearInput();
                setUser(user);
                console.log(user);
            }else{
                setUser("");
            }
        });
    };
    useEffect(()=>{
        authListener();
    },[]);
    return(
        <>
        {user?<UserLanding signOut={SignOut} />:
            <>
            <div className='container-fluid'>
                <div className="col-lg-8 col-md-10 mx-auto give_border">
                <div className='row justify-content-center text-center'>  
                    <div className="col-lg-6 pt-5 pb-5 border_right">
                        <h1>Welcome to CampusX</h1>
                        <h5 >The all in one college community </h5>
                        <img src={img1}  className="img-fluid" />
                    </div>
                    <div className="col-lg-6  pt-5 pb-5 pl-5 pr-2 ">
                        <h1 className="">{hasAccount?"Login":"SignUp"}</h1>
                        <br />
                        <div >
                            <h4 className="text-left" >EMAIL</h4>
                            <div className="text-left">
                                <input 
                                    style={{fontSize:'22px'}} 
                                    type="email" 
                                    className="text-center" 
                                    placeholder="Email"
                                    onChange={(e)=>{setEmail(e.target.value)}}>
                                </input>
                            </div>
                            <br />
                            <br />
                            <h4 className="text-left">PASSWORD</h4>
                            <div className="text-left">
                                <input 
                                    style={{fontSize:'22px'}}   
                                    type="password" 
                                    className="text-center" 
                                    placeholder="Password"
                                    onChange={(e)=>{setPassword(e.target.value)}}>
                                </input>
                            </div>
                            <br />
                            </div>
                            <div style={{color:'red',fontSize:'20px'}}>{emailError}</div>
                            <br />
                            <div style={{color:'red',fontSize:'20px'}}>{passwordError}</div>
                            <br />
                            {hasAccount?
                            <>
                                 <button type="submit" className="signin_button" onClick={()=>{handleLogin(email,password)}} >Sign In</button>
                                <div className="text-left" style={{display:'flex', justifyContent:'space-between',padding:'25px',fontSize:'21px'}}>
                                <NavLink to="/forgotpassword" style={{textDecoration: 'none'}}> Forgot Password? </NavLink>
                                <NavLink to="/" 
                                         style={{textDecoration: 'none'}}
                                         onClick={()=>{setHasAccount(false)}}>
                                     Sign Up?
                                </NavLink>
                                </div>
                            </>:
                            <>
                                <button type="submit" className="signin_button" onClick={()=>{handleSignUp(email,password)}} >Sign Up</button>
                                <div style={{color:'midnightblue'}} 
                                     className="text-center">
                                     Already have an account
                                </div>
                                <NavLink to="/" 
                                         style={{textDecoration: 'none'}}
                                         onClick={()=>{setHasAccount(true)}}>
                                     Login?
                                </NavLink>
                            </>}
                            
                        <div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        }
        </>
        
    );
};
export default Login;