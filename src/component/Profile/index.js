import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import user from "../../img/user.svg";

class Profile extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                                <img
                                    src={user}
                                    className="rounded mx-auto d-block" alt=""/>
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Admin
                                </div>
                                <div className="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                            <div className="profile-userbuttons">
                                <button type="button" className="btn btn-success btn-sm">Follow</button>
                                <button type="button" className="btn btn-danger btn-sm">Message</button>
                            </div>
                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li className="active">
                                        <a href="#">
                                            <i className="glyphicon glyphicon-home"/>
                                            Overview </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-user"/>
                                            Account Settings </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="glyphicon glyphicon-ok"/>
                                            Tasks </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-flag"/>
                                            Help </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">
                            Some user related content goes here...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
