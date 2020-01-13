import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css';
import {Link} from "react-router-dom";

class ChoiceMore extends React.Component {

    render() {
        return (
            <div>
                <div className="choice-more-header">
                    <div className="choice-more-title">
                        <a href="http://www.baidu.com" className="next-a">
                            <p>大家都在看</p>
                            <span className="arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="recommend-list">
                    <div className="choice-more-list-content">
                        <ul className="choice-more-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="choice-more-li">
                                            <Link to={'/detail/' + item.get('bookid')}>
                                                <div className="choice-more-book-info">
                                                    <img src={item.get('bookcover')} className="choice-more-cover" alt=""/>

                                                    <div className="choice-more-content">
                                                        <p className="choice-more-title-1">{item.get('bookname')}</p>
                                                        <span className="choice-more-author">{item.get('author')}&nbsp;著</span>
                                                        <div className="choice-more-rand-a">
                                                            <div className="choice-more-rand-content">{item.get('synopsis')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                            <div className="layout-flow-more">
                                <a href="https://www.baidu.com">
                                    <cite>加载更多</cite>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChoiceMore;
