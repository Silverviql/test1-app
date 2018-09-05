import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import {Redirect} from "react-router-dom";

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
    static defaultProps = {

    };

    static propTypes = {

    };

    state = {
        user: '',
        key:'',
        redirectToReferrer: false
    };

    /*login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }*/

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
        console.log('вот сука бля',this.state.redirectToReferrer)
        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        console.log('айтификация',fakeAuth.isAuthenticated)
        console.log('эсукабля',this.state.redirectToReferrer)
        return (
            <div className='container'>
                    <form className='row mt-3 ' onSubmit={this.hundleSumbit}>
                        <div className="col-md-4 mb-3 col-lg-12">
                            <label>Login</label>
                         <input  value={this.state.user}
                                    onChange={this.hundleChange('user')}
                                    className={this.getClassName('user')}/>
                        </div>
                        <div className="col-md-4 mb-3 col-lg-12">
                            <label>Password</label>
                            <input type="password" className="form-control" value={this.state.key}
                                               onChange={this.hundleChange('key')}
                                               className={this.getClassName('key')}/>
                            <div className=" mt-1">
                              <input className="btn btn-primary" type='submit' value = 'submit' />
                            </div>
                        </div>
                    </form>
                {/*<button onClick={this.login}>Log in</button>*/}
            </div>
        );
    }

    hundleSumbit = ev => {
        ev.preventDefault()
        /* this.props.addComment(this.state, this.props.articleId)*/
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
           console.log('---','Валидация')
       }

        console.log('---','ввод пароля', this.state.user, this.state.key)
    }


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


export default Login;
