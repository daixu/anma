import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css';

class ChoiceMore extends React.Component {

    render() {
        return (
            <div>
                <div className="choice-more-recommend">
                    <div className="choice-more-title">
                        <a href="http://www.baidu.com" className="recommend-a">
                            <p>大家都在看</p>
                            <span className="arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="recommend-list">
                    <div className="recommend-list-content">
                        <ul className="book-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="book-li">
                                            <a href="https://www.baidu.com">
                                                <div className="book-info">
                                                    <img src={item.get('bookcover')} className="choice-more-cover" alt=""/>

                                                    <div className="choice-more-content">
                                                        <p className="choice-more-title-1">{item.get('bookname')}</p>
                                                        <span className="choice-more-author">{item.get('author')}&nbsp;著</span>
                                                        <div className="choice-more-rand-a">
                                                            <div className="choice-more-rand-content">{item.get('synopsis')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
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
