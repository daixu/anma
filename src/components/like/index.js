import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

class Like extends React.Component {
    render() {
        return (
            <div className="like-book">
                <div className="new-book-content">
                    <ul className="new-book-list page current">
                        {
                            this.props.data.map(function (item) {
                                return (
                                    <li key={item.get('bookid')} className="book-content">
                                        <Link to={'/detail/' + item.get('bookid')} className="strong-list-a">
                                            <img src={item.get('bookcover')} className="img-new-book" alt=""/>

                                            <p className="story-title">{item.get('bookname')}</p>
                                            <p className="story-name">{item.get('author')}&nbsp;著</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Like;
