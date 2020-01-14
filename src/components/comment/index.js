import React from 'react';
import './index.css';

class Comment extends React.Component {

    render() {
        {
            console.log('data= ', this.props.data)
        }
        return (
            <div>
                <ul className="book-comment-ul">
                    {
                        this.props.data.map(function (item) {
                            return (
                                <li key={item.get('comid')} className="book-comment-li">
                                    <div className="book-comment-info">
                                        <img src={item.get('headimgurl')} alt="avatar" className="book-comment-avatar"/>
                                        <div className="book-comment-detail">
                                            <p className="book-comment-title">{item.get('nickname')}</p>
                                            <p className="book-comment-content">{item.get('comment')}</p>
                                            <div className="book-other-info">
                                                <span className="book-comment-time">{item.get('creatortime')}</span>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Comment;
