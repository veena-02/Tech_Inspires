import React from 'react'
import Login from './../Login/Login';
import UserProfile from './../UserProfile/UserProfile';
import UserLanding from './../UserLanding/UserLanding';
import Blogs from './../Blogs/Blogs';
import {Route, Switch,} from "react-router-dom";
import ForgotPassword from './../ForgotPassword/ForgotPassword';

const App=()=>{
    return(
        <>
                <Switch>
                    <Route exact path="/"   component={Login} />
                    <Route exact path="/userprofile"   component={UserProfile} />
                    <Route exact path="/userlanding"   component={UserLanding} />
                    <Route exact path="/blogs"   component={Blogs} />
                    <Route exact path="/forgotpassword" component={ForgotPassword} />
                </Switch>
        </>
    );
}

export default App;

