import React from 'react'
import book_stored from "../static/book_stored.png";
import ancientc from "../static/ancientc.png";
import heartae from "../static/heartae.png";
import listc from "../static/listc.png";
import rechargec from "../static/rechargec.png";

class Choice extends React.Component {
    render() {
        return (
            <ul className="icon-list page current">
                <li className="icon">
                    <a href="https://www.baidu.com/">
                        <div className="div-a">
                            <img src={book_stored} className="img-a" alt=""/>
                        </div>
                        <div className="text-a">书库</div>
                    </a>
                </li>
                <li className="icon">
                    <a href="https://www.baidu.com/">
                        <div className="div-a">
                            <img src={ancientc} className="img-b" alt=""/>
                        </div>
                        <div className="text-a">古言</div>
                    </a>
                </li>

                <li className="icon">
                    <a href="https://www.baidu.com/">
                        <div className="div-a">
                            <img src={heartae} className="img-a" alt=""/>
                        </div>
                        <div className="text-a">现言</div>
                    </a>
                </li>
                <li className="icon">
                    <a href="https://www.baidu.com/">
                        <div className="div-a">
                            <img src={listc} className="img-d" alt=""/>
                        </div>
                        <div className="text-a">排行</div>
                    </a>
                </li>
                <li className="icon">
                    <a href="https://www.baidu.com/">
                        <div className="div-a">
                            <img src={rechargec} className="img-e" alt=""/>
                        </div>
                        <div className="text-a">充值</div>
                    </a>
                </li>
            </ul>
        )
    }
}

export default Choice;
