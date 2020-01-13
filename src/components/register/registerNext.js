import React from 'react';

import './registerNext.css';
import img_back from './../../static/img_back.png';
import { Toast } from "antd-mobile";
import axios from "axios";

class RegisterNext extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    async submitRegister(mobile, password) {
        const code = this.refs.code.value;
        if (code.length === 0) {
            Toast.info('验证码不能为空');
            return;
        }
        console.log('code=', code);
        axios.get('/api/userinfo/reg-user', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                phone: mobile,
                loginpass: password,
                smscode: code,
                logonpass: password,
                regtype: 0,
                channel: 1001
            },
        }).then((response) => {
            const data = response.data;
            console.log('data= ', data);
            if (data.code === 1) {
                Toast.info('注册成功');
                localStorage.setItem('userId', data.data.userid);
                this.props.history.push('/index')
            } else {
                const msg = data.msg;
                if (null === msg || msg === '' || msg === 'undefined') {
                    Toast.info('注册失败');
                } else {
                    Toast.info(data.msg);
                }
                console.log('fail');
            }
        }).catch(() => {
            console.log("error")
        })
    }

    async getCode(mobile) {
        axios.get('/api/userinfo/get-code', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                phone: mobile,
                channel: 1001
            },
        }).then((response) => {
            const data = response.data;
            console.log('data= ', data);
            if (data.code === 1) {
                Toast.info('验证码已发送，请注意查收');
            } else {
                const msg = data.msg;
                if (null === msg || msg === '' || msg === 'undefined') {
                    Toast.info('验证码获取失败');
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
        const data = this.props.location.state;
        if (null == data) {
            Toast.info("页面加载错误，请返回重试");
            return <div>页面加载错误，请返回重试</div>
        }
        const { mobile, password } = data;
        console.log('mobile= ', mobile);
        console.log('password= ', password);
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
                    <div className="register-title-p">
                        <p>验证码已发送至{mobile}</p>
                    </div>
                    <div className="div-input">
                        <input type="text" ref="code" placeholder="请输入6位数验证码" className="ver-code" maxLength={11}/>
                        <span className="get-code" onClick={() => this.getCode(mobile)}>获取验证码</span>
                    </div>
                    <div className="div-btn">
                        <button className="register-next-btn" onClick={() => this.submitRegister(mobile, password)}>完成并登录</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterNext;
