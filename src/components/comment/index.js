import React from 'react';
import './index.css';
import icon_like from './../../static/icon_like.png';
import icon_comment from './../../static/icon_comment.png';

class Comment extends React.Component {

    render() {
        return (
            <div>
                <ul className="book-comment-ul">
                    {
                        this.props.data.map(function (item) {
                            return (
                                <li key={item.comid} className="book-comment-li">
                                    <div className="book-comment-info">
                                        <img src={item.headimgurl} alt="avatar" className="book-comment-avatar"/>
                                        <div className="book-comment-detail">
                                            <p className="book-comment-title">{item.nickname}</p>
                                            <p className="book-comment-content">{item.comment}</p>
                                            <div className="book-other-info">
                                                <span className="book-comment-time">{item.creatortime}</span>
                                                <div className="book-comment-number-info">
                                                    <img src={icon_like} alt="icon-like"
                                                         className="book-comment-number-img"/>
                                                    <span
                                                        className="book-comment-number-span">{item.pracount}</span>
                                                    <img src={icon_comment} alt="icon-comment"
                                                         className="book-comment-number-img"/>
                                                    <span
                                                        className="book-comment-number-span-a">{item.replycount}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="book-comment-review">
                    <a href="http://www.baidu.com" className="write-comment">
                        写书评
                    </a>
                    <a href="http://www.baidu.com" className="look-comment">
                        查看全部书评
                    </a>
                </div>
            </div>
        )
    }
}

export default Comment;
