import React, { Component } from 'react';
import Home from './component/Home'
import Main from './component/Main'
import News from './component/News'
import Header from './component/Header/index';
import Footer from './component/Footer/index';
import NotFound from './component/NotFound'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter} from "react-router-dom";
import Profile from './component/Profile/index';
import 'bootstrap/dist/css/bootstrap.css';
import './component/App.css'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

class Login extends Component {

    state = {
        user: '',
        key:'',
        redirectToReferrer: false,
        errorMsg: false

    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className='container'>
                <form className='row mt-3 ' onSubmit={this.hundleSumbit}>
                    <div className="col-md-4 mb-3 col-lg-12">
                        <label>Login</label>
                        <input  value={this.state.user} placeholder="Username"
                                onChange={this.hundleChange('user')}
                                className={this.getClassName('user')}/>
                    </div>
                    <div className="col-md-4 mb-3 col-lg-12">
                        <label>Password</label>
                        <input type="password" className="form-control"  value={this.state.key}
                               onChange={this.hundleChange('key')}
                               className={this.getClassName('key')}
                               placeholder="Password" />
                        <div className=" mt-1">
                            <input className="btn btn-primary" type='submit' value = 'submit' />
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    hundleSumbit = ev => {
        ev.preventDefault()
        this.setState({
            user:'',
            key: ''
        })

        if(this.state.user === 'Admin' && this.state.key === '12345'){
            fakeAuth.authenticate(() => {
                this.setState(() => ({
                    redirectToReferrer: true
                }))
            })
        } else {
            console.log('Валидация','Имя пользователя или пароль введены не верно')
        }

        console.log('---','ввод пароля', this.state.user, this.state.key)
    }

    validation

    //Валидация.
    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    //Проверяет условие при изменение состояния,если количество сивмолов больше то не дает писать дальше. если нет то меняет состояние
    hundleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type ]: value
        })
    }
}
const limits = {
    user :{
        min: 5,
        max: 15
    },
    key: {
        min:20,
        max:50
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

export default function App () {
        return (
            <Router>
                <div>
                    <Header />
                    <AuthButton/>
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route  path = "/login" component={Login}/>
                        <Route path = "/news" component={News}/>
                        <PrivateRoute path = "/profile" component={Profile}/>
                        <Route  component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

        );
}
