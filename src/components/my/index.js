import React from 'react';

import './../../css/main.css';
import './index.css';
import default_avatar from '../../static/default_avatar.png';

import {connect} from 'react-redux';
import {loadUserInfo} from './../../store/actionCreators.js';
import arrow from "../../static/arrow.png";
import icon_sign from '../../static/icon_sign.png';
import icon_message from '../../static/icon_message.png';
import icon_service from '../../static/icon_service.png';
import icon_welfare from '../../static/icon_welfare.png';
import {Link} from "react-router-dom";

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
                            {console.log('readTime=', this.props.dataUserInfo.get('readTime'))}
                            <p className="my-use-time">{this.props.dataUserInfo.get('readTime') || '您还没有登录哦'}</p>
                        </div>
                        <span className="my-arrow">
                            <img src={arrow} alt="next"/>
                        </span>
                    </div>

                    <div className="my-user-money">
                        <span className="my-user-ss-money">闪闪币 </span>
                        <span className="my-user-money-number">{this.props.dataUserInfo.get('money') || 0}</span>
                        <div className="my-user-btn">
                            <button className="my-user-account-btn">账户</button>
                            <button className="my-user-recharge-btn">充值</button>
                        </div>
                    </div>

                    <div className="my-option-1">
                        <div className="my-option-content">
                            <ul className="my-option-list page current">
                                <li className="option-content">
                                    <Link to={'/detail/'} className="strong-list-a">
                                        <img src={icon_sign} className="my-option-img-a" alt=""/>
                                        <p className="story-name">签到</p>
                                    </Link>
                                </li>
                                <li className="option-content">
                                    <Link to={'/detail/'} className="strong-list-a">
                                        <img src={icon_welfare} className="my-option-img-a" alt=""/>
                                        <p className="story-name">福利</p>
                                    </Link>
                                </li>
                                <li className="option-content">
                                    <Link to={'/detail/'} className="strong-list-a">
                                        <img src={icon_message} className="my-option-img-a" alt=""/>
                                        <p className="story-name">消息</p>
                                    </Link>
                                </li>
                                <li className="option-content">
                                    <Link to={'/detail/'} className="strong-list-a">
                                        <img src={icon_service} className="my-option-img-b" alt=""/>
                                        <p className="story-name">客服</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
