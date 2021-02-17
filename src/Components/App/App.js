import React from 'react'
import Login from './../Login/Login';
import SignUp from './../SignUp/SignUp';
import UserProfile from './../UserProfile/UserProfile';
import UserLanding from './../UserLanding/UserLanding';
import Blogs from './../Blogs/Blogs';
import {Route, Switch,BrowserRouter} from "react-router-dom";
import ForgotPassword from './../ForgotPassword/ForgotPassword';
const App=()=>{
    return(
        <>
            <BrowserRouter>
            <h1>HELLO WORLD</h1> 
            <Switch>
                <Route exact path="/"   component={Login} />
                <Route exact path="/signup"   component={SignUp} />
                <Route exact path="/userprofile"   component={UserProfile} />
                <Route exact path="/userlanding"   component={UserLanding} />
                <Route exact path="/blogs"   component={Blogs} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
            </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;

