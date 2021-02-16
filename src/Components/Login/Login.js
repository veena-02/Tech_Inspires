import React from 'react'
import img1 from './../../Assets/Login/loginWelcomeImg.png';
import './Login.css';

const Login = () =>{
    return(
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
                        <h1 className="">Login</h1>
                        <br />
                        <div >
                            <h4 className="text-left" >EMAIL</h4>
                            <div className="text-left"><input style={{fontSize:'22px'}} type="email" className="text-center" placeholder="Email"></input></div>
                            <br />
                            <br />
                            <h4 className="text-left">PASSWORD</h4>
                            <div className="text-left"><input style={{fontSize:'22px'}} type="password" className="text-center" placeholder="Password"></input></div>
                            <br />
                            <br />
                            <button type="submit" className="signin_button">Sign In</button>
                            </div>
                            <br />
                            <div className="text-left" style={{display:'flex', justifyContent:'space-between',paddingRight:'20px',fontSize:'24px'}}>
                                <a href="#"> Forgot Password?</a>
                                <a href="#"> Sign Up?</a>
                            </div>
                            
                            
                            
                        <div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};
export default Login;