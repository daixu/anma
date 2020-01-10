import React from 'react';
import arrow from "../../static/arrow.png";
import list_icon from "../../static/list-icon0.png";
import './index.css';

class BestsellerList extends React.Component {
    render() {
        return (
            <div>
                <div className="home-bestseller-recommend">
                    <div className="home-bestseller-title">
                        <a href="http://www.baidu.com" className="next">
                            <p>畅销书单</p>
                            <span className="arrow">
                            <img src={arrow} alt=""/>
                        </span>
                        </a>
                    </div>
                </div>
                <div className="rank-list">
                    <div className="rank-list-content">
                        <ul className="rank-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')}>
                                            <a href="http://www.baidu.com">
                                                <img src={list_icon} className="rank-img" alt=""/>
                                                <span className="bestseller-book-name">{item.get('bookname')}</span>
                                                <span className="bestseller-book-author">{item.get('author')}&nbsp;著</span>
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

export default BestsellerList;
