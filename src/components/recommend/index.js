import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css';

class Recommend extends React.Component {

    render() {
        return (
            <div>
                <div className="recommend-header">
                    <div className="recommend-title">
                        <a href="http://www.baidu.com" className="next">
                            <p>强力推荐</p>
                            <span className="arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="recommend-list">
                    <div className="recommend-list-content">
                        <ul className="recommend-book-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="recommend-book-li">
                                            <a href="https://www.baidu.com">
                                                <div className="recommend-book-info">
                                                    <img src={item.get('bookcover')} className="recommend-book-cover" alt=""/>

                                                    <div className="recommend-book-content">
                                                        <p className="recommend-book-title">{item.get('bookname')}</p>
                                                        <span className="recommend-author">{item.get('author')}&nbsp;著</span>

                                                        <div className="recommend-book-rand-a">
                                                            <div className="recommend-book-rand-content">{item.get('synopsis')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
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
}

export default Recommend;
