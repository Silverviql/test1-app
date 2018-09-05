import React, { Component } from 'react';
import Home from './component/Home'
import Main from './component/Main'
import Login from './component/Login/index'
import News from './component/News'
import Header from './component/Header/index';
import Footer from './component/Footer/index';
import {BrowserRouter, Route, Redirect, withRouter} from "react-router-dom";
import Profile from './component/Profile/index';
import 'bootstrap/dist/css/bootstrap.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Login.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const AuthButton = withRouter(({ history }) => (
    Login.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            Login.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div>
          <div>
              <Header />
          </div>
          <Route path = "/home" component={Home}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/news" component={News}/>
          <PrivateRoute path = "/profile" component={Profile}/>
          <AuthButton/>
          <div>
              <Footer />
          </div>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
