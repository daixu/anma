import React from 'react';

import './../../css/main.css';
import img_back from "../../static/img_back.png";
import {Link} from "react-router-dom";
import axios from "axios";
import {Toast} from "antd-mobile";

class BookList extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    async getMore() {
        this.loadBookList(28519, ++this.state.pageIndex, 5, 2, 2);
    }

    async loadBookList(userId, page, pageSize, moduleId, maleChannel) {
        axios.get('/api/newbookinfo/get-bookmodulepage', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                page: page,
                pagesize: pageSize,
                moduleId: moduleId,
                malechannel: maleChannel,
                channel: 1001
            },
        }).then((response) => {
            const data = response.data;
            console.log('data= ', data.data);
            console.log('pageIndex= ', this.state.pageIndex);
            if (data.data.pagedata.length === 0) {
                Toast.info('已经没有更多数据了');
                this.setState({
                    hasMore: false
                })
            } else {
                this.setState({
                    pagedata: this.state.pagedata.concat(data.data.pagedata)
                })
            }
        }).catch(() => {
            console.log("error")
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pagedata: [],
            hasMore: true,
        };
    }

    render() {
        const pageData = this.state.pagedata;
        const hasMore = this.state.hasMore;
        {console.log('hasMore= ', hasMore)}
        return (
            pageData === undefined ? <div>loading...</div> :
                <div>
                    <div className="nav-cont">
                        <span className="nav-back" onClick={() => this.goBack()}>
                            <img src={img_back} alt="back"/>
                        </span>
                        <span className="nav-text">书籍列表</span>
                    </div>

                    <div className="recommend-list">
                        <div className="recommend-list-content">
                            <ul className="recommend-book-ul">
                                {
                                    pageData.map(function (item) {
                                        return (
                                            <li key={item.bookid} className="recommend-book-li">
                                                <Link to={'/detail/' + item.bookid}>
                                                    <div className="recommend-book-info">
                                                        <img src={item.bookcover} className="recommend-book-cover"
                                                             alt=""/>

                                                        <div className="recommend-book-content">
                                                            <p className="recommend-book-title">{item.bookname}</p>
                                                            <span
                                                                className="recommend-author">{item.author}·{item.classname}·{item.serstatus}·{item.wordnumbers}</span>

                                                            <div className="recommend-book-rand-a">
                                                                <div
                                                                    className="recommend-book-rand-content">{item.synopsis}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                                {
                                    hasMore !== true ? <div className="layout-flow-more">没有更多了</div> :
                                        <div className="layout-flow-more">
                                            <span onClick={() => this.getMore()}>
                                                <cite>加载更多</cite>
                                            </span>
                                        </div>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }

    componentDidMount() {
        this.loadBookList(28519, this.state.pageIndex, 5, 2, 2);
    }
}

export default BookList;
