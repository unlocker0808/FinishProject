import React, { Component } from 'react';
import HomeDiv01 from './HomeDiv01';
import HomeDiv02 from './HomeDiv02';
import HomeDiv03 from './HomeDiv03';


class Home extends Component {
    render() {
        return (
            <div>
                <p className="back-to-top1">Trang chủ</p>
                <section id="home" className="home">
                    <div className="container">
                        <HomeDiv01 />
                        <HomeDiv02 />
                        <HomeDiv03 />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;