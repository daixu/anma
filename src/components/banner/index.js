import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import {Link} from "react-router-dom";

class Banner extends React.Component {

    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    {
                        this.props.data.map((item) => {
                            return (
                                <Link to={'/detail/' + item.bookid} key={item.bookid}>
                                    <div className="banner-div">
                                        <img src={item.imgurl} alt="" className="banner-img"/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}

export default Banner;
