import React from 'react'
import Login from './../Login/Login';
import SignUp from './../SignUp/SignUp';
import {Route, Switch} from 'react-router-dom';
const App=()=>{
    return(
        <>
            <Switch>
                <Route exact path="./" component={Login} />
                <Route exact path="./" component={Login} />
                <Route exact path="./" component={Login} />
                <Route exact path="./" component={Login} />
                <Route exact path="./" component={Login} />

            </Switch>
        </>
    );
}

export default App;

