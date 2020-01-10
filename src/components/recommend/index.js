import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css'

class Recommend extends React.Component {

    render() {
        return (
            <div>
                <div className="recommend">
                    <div className="home-recommend-title">
                        <a href="http://www.baidu.com" className="recommend-a">
                            <p>强力推荐</p>
                            <span className="arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="recommend-list">
                    <div className="recommend-list-content">
                        <ul className="home-book-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="home-book-li">
                                            <a href="https://www.baidu.com">
                                                <div className="book-info">
                                                    <img src={item.get('bookcover')} className="home-book-cover" alt=""/>

                                                    <div className="home-book-content">
                                                        <p className="home-book-title">{item.get('bookname')}</p>
                                                        <span className="home-author">{item.get('author')}&nbsp;著</span>

                                                        <div className="home-book-rand-a">
                                                            <div className="home-book-rand-content">{item.get('synopsis')}</div>
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
