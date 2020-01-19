import React from 'react';

import './../../css/main.css';

import {connect} from 'react-redux';
import img_back from "../../static/img_back.png";
import { loadBookList } from './../../store/actionCreators.js';
import {Link} from "react-router-dom";

class BookList extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    render() {
        return (
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
                                this.props.dataBookList.get('pagedata').map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="recommend-book-li">
                                            <Link to={'/detail/' + item.get('bookid')}>
                                                <div className="recommend-book-info">
                                                    <img src={item.get('bookcover')} className="recommend-book-cover" alt=""/>

                                                    <div className="recommend-book-content">
                                                        <p className="recommend-book-title">{item.get('bookname')}</p>
                                                        <span className="recommend-author">{item.get('author')}·{item.get('classname')}·{item.get('serstatus')}·{item.get('wordnumbers')}</span>

                                                        <div className="recommend-book-rand-a">
                                                            <div className="recommend-book-rand-content">{item.get('synopsis')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.initList(28519, 1, 20, 2, 2);
    }
}

const mapStateToProps = (state) => {
    return {
        dataBookList: state.get('dataBookList'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initList(userId, page, pageSize, moduleId, maleChannel) {
            const action = loadBookList(userId, page, pageSize, moduleId, maleChannel);
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
