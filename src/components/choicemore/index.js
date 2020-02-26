import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css';
import {Link} from "react-router-dom";
import axios from 'axios';

class ChoiceMore extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageIndex: 1,
            pagedata:[]
        };
    }

    getMore() {
        axios.get('/api/newbookinfo/get-bookdatapage', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: 28519,
                page: this.state.pageIndex++,
                pagesize: 7,
                malechannel: 2,
                channel: 1001,
                status: 0,
            },
        }).then((response) => {
            const data = response.data;
            console.log('choicemore data= ', data.data.pagedata);
            console.log('this.pagedata= ', this.state.pagedata);
            this.setState({
                pagedata: this.state.pagedata.concat(data.data.pagedata),
            })
        }).catch(() => {
            console.log("error")
        })
    }

    render() {
        const {pagedata} = this.state;
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
                                pagedata.map(function (item) {
                                    return (
                                        <li key={item.bookid} className="choice-more-li">
                                            <Link to={'/detail/' + item.bookid}>
                                                <div className="choice-more-book-info">
                                                    <img src={item.bookcover} className="choice-more-cover" alt=""/>

                                                    <div className="choice-more-content">
                                                        <p className="choice-more-title-1">{item.bookname}</p>
                                                        <span className="choice-more-author">{item.author}&nbsp;著</span>
                                                        <div className="choice-more-rand-a">
                                                            <div className="choice-more-rand-content">{item.synopsis}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                            <div className="layout-flow-more">
                                <span onClick={() => this.getMore()}>
                                    <cite>加载更多</cite>
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getMore();        
    }
}

export default ChoiceMore;
