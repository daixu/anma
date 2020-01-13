import React from 'react';

import './index.css';
import img_back from './../../static/img_back.png';
import { Toast } from "antd-mobile";

class Register extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    async register() {
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
        if (password.length < 6) {
            Toast.info('密码长度不能少于6位');
            return;
        }
        const data = {
            mobile,
            password
        };
        const path = {
            pathname:'/registerNext',
            state:data,
        };
        this.props.history.push(path);
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
                        手机注册
                    </span>
                </div>

                <div className="register-content">
                    <div className="div-input">
                        <input type="text" ref="phoneNumber" placeholder="请输入手机号码" className="mobile" maxLength={11}/>
                    </div>
                    <div className="div-input">
                        <input type="password" ref="passwords" placeholder="请设置登录密码,不少于6位" className="pwd" maxLength={16}/>
                    </div>
                    <div className="div-btn">
                        <button className="register-btn" onClick={this.register.bind(this)}>下一步</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
