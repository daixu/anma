import React from 'react';

import './index.css';
import img_back from './../../static/img_back.png';
import { Toast } from "antd-mobile";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    async submitLogin() {
        const mobile = this.refs.phoneNumber.value;
        const password = this.refs.passwords.value;
        if (mobile.length === 0) {
            Toast.info('账号不能为空');
            return;
        }
        if (password.length === 0) {
            Toast.info('密码不能为空');
            return;
        }
        axios.get('/api/userinfo/login-user', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                account: mobile,
                loginpass: password,
                channel: 1001
            },
        }).then((response) => {
            const data = response.data;
            console.log('data= ', data);
            if (data.code === 1) {
                Toast.info('登录成功');
                localStorage.setItem('userId', data.data.userid);
                this.goBack();
            } else {
                const msg = data.msg;
                if (null === msg || msg === '' || msg === 'undefined') {
                    Toast.info('登录失败');
                } else {
                    Toast.info(data.msg);
                }
                console.log('fail');
            }
        }).catch(() => {
            console.log("error")
        })
    }

    render() {
        return (
            <div>
                <div className="nav-cont">
                    <span className="nav-back">
                        <div onClick={() => this.goBack()}>
                            <img src={img_back} alt="back" />
                        </div>
                    </span>
                    <span className="nav-text">
                        登录
                    </span>
                </div>

                <div className="login-content">
                    <div className="div-input">
                        <input type="text" ref="phoneNumber" placeholder="手机号" className="mobile" maxLength={11}/>
                    </div>
                    <div className="div-input">
                        <input type="password" ref="passwords" placeholder="密码" className="pwd" maxLength={16}/>
                    </div>
                    <button className="login-btn" onClick={this.submitLogin.bind(this)}>登录</button>

                    <div className="login-option">
                        <span className="forget-pwd">忘记密码</span>
                        <Link to={'/register'}>
                            <span className="register">手机注册</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
