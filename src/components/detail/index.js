import React from 'react';

import './index.css';
import default_book_cover from './../../static/default_bookcover.jpg';
import {Button} from "antd-mobile";
import img_back from './../../static/img_back.png';
import {Link} from "react-router-dom";
import arrow from "../../static/arrow.png";
import Comment from './../comment';
import Like from "../like";
import axios from "axios";

class Detail extends React.Component {
    state = {
        detailsdata:{},
        likedata: [],
        sumreplycount: 0,
        comdata: []
    };
    login() {
        this.props.history.push("/login");
    }

    goBack() {
        this.props.history.go(-1)
    }

    startReading() {
        const userId = localStorage.getItem('userId');
        if (userId === null || userId === '0') {
            this.login();
        } else {
            console.log('开始阅读');
        }
    }

    async getDetail(userId, bookId) {
        await axios.get('/api/bookinfo/get-bookdetails', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                channel: 1001,
                platform: 2,
                bookid: bookId,
                clicktype: 101
            },
        }).then((response) => {
            const data = response.data;
            console.log('detail data= ', data);
            this.setState({
                detailsdata: data.data.detailsdata,
                likedata: data.data.likedata
            })
        }).catch(() => {
            console.log("error")
        })
    }

    async getComment(userId, bookId) {
        await axios.get('/api/comment/get-comdata', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                bookid: bookId
            },
        }).then((response) => {
            const data = response.data;
            console.log('detail comment data= ', data.data.sumreplycount);
            this.setState({
                sumreplycount: data.data.sumreplycount,
                comdata:data.data.comdata
            })
        }).catch(() => {
            console.log("error")
        })
    }

    render() {
        const {detailsdata, likedata, comdata, sumreplycount} = this.state;
        console.log('detailsdata=', detailsdata);
        console.log('detailsdata=', detailsdata === {});
        return (
            <div>
                <div className="nav-cont">
                        <span className="nav-back" onClick={() => this.goBack()}>
                            <img src={img_back} alt="back"/>
                        </span>
                    <span className="nav-text">书籍详情</span>
                </div>

                <div className="book-detail-info">
                    <div className="book-img">
                        <img src={detailsdata.bookcover || default_book_cover} alt=""
                             className="book-cover"/>
                        <div className="book-info">
                            <p className="book-title">{detailsdata.bookname}</p>
                            <p className="book-author">作者: {detailsdata.author}</p>
                            <p className="book-author">类别: {detailsdata.classname}</p>
                            <p className="book-author">字数: {detailsdata.wordnumbers} | {detailsdata.serstatus}</p>
                            <p className="book-author">点击: {detailsdata.clicknumber}</p>
                        </div>
                    </div>
                </div>

                <div className="book-detail-content">
                    <div className="detail-button">
                        <Button type="warning" inline style={{width: '48%'}} onClick={this.startReading.bind(this)}>开始阅读</Button>
                        <Button type="primary" inline style={{
                            width: '48%',
                            float: 'right',
                            background: '#f5f5f5',
                            color: '#2d2d2d'
                        }} onClick={() => this.login()}>加入书架</Button>
                    </div>

                    <div className="book-synopsis">
                        <div className="detail-book-synopsis">
                            <div className="detail-book-synopsis-container">
                                <div className="detail-book-synopsis-content">内容简介:{detailsdata.synopsis}</div>
                            </div>
                        </div>
                    </div>

                    <div className="book-detail-catalog">
                        <Link to={'/directory/' + detailsdata.bookid} className="book-detail-catalog-a">
                            <span>目录</span>
                            <span className="book-detail-arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </Link>
                    </div>

                    <div className="book-detail-middle">
                        <Link className="book-detail-comment" to={'/index'}>
                            <span className="book-detail-comment-header">书评区</span>
                            <span className="book-detail-comment-number">{sumreplycount}人评论</span>
                            <span className="book-detail-arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </Link>

                        <Comment data={comdata}/>

                        <Link className="book-detail-comment" to={'/index'}>
                            <span className="book-detail-comment-header">猜你喜欢</span>
                            <span className="book-detail-arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </Link>

                        <Like data={likedata}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const bookId = this.props.match.params.id;
        this.getDetail(28519, bookId);
        this.getComment(28519, bookId);
    }
}

export default (Detail);
