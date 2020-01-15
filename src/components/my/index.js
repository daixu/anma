import React from 'react';

import './../../css/main.css';
import './index.css';
import default_avatar from './../../static/default-avatar.png';

import {connect} from 'react-redux';
import {loadUserInfo} from './../../store/actionCreators.js';
import arrow from "../../static/arrow.png";

class My extends React.Component {

    render() {

        return (
            <div>
                <div>
                    <div className="nav-cont">
                        <span className="nav-text">我的</span>
                    </div>

                    <div className="my-user-top">
                        <img className="my-user-avatar" src={default_avatar} alt="user-avatar"/>
                        <div className="my-user-info">
                            <p className="my-username">{this.props.dataUserInfo.get('nickname') || '点击登录'}</p>
                            <p className="my-use-time">{this.props.dataUserInfo.get('readTime') || '您还没有登录哦'}</p>
                        </div>
                        <span className="my-arrow">
                            <img src={arrow} alt="next"/>
                        </span>
                    </div>

                    <div className="my-user-money">
                        <span>闪闪币 {this.props.dataUserInfo.get('money') || 0}</span>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        const userId = localStorage.getItem('userId');
        if (userId === null || userId === '0') {
            console.log('用户未登录');
        } else {
            this.props.loadUserInfo(userId);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataUserInfo: state.get('dataUserInfo'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        loadUserInfo(userId) {
            const action = loadUserInfo(userId);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(My);
