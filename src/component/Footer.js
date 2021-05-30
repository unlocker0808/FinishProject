import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-basic">
                    <footer data-aos="fade-up" data-aos-duration={1100}>
                        <div className="social"><a href="https://github.com/unlocker0808/FinishProject" target="_blank"><i className="fa fa-github" /></a><a href="https://hci2021group04.tk/" target="_blank"><i className="fa fa-globe" /></a><a href="https://hci2021group04.tk/member" target="_blank"><i className="icon ion-ios-people" /></a></div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="/">Trang chủ</a></li>
                            <li className="list-inline-item"><a href="/vietnam">Việt Nam</a></li>
                            <li className="list-inline-item"><a href="/world">Thế giới</a></li>
                            <li className="list-inline-item"><a href="/vaccin">Vaccin</a></li>
                            <li className="list-inline-item"><a href="/download">Tải app</a></li>
                        </ul>
                        <p className="copyright">Design by team 4 © Human computer interaction 2021</p>
                    </footer>
                </div>
                <a href="#" className="back-to-top" ><i className="fa fa-chevron-up" /></a>


                <div className="bt-cn">
                    <div className="material-button-anim">
                        <ul className="list-inline" id="options">
                            <li className="option">
                                <button className="material-button option1 bg-danger1" type="button">
                                    <a className="text-trang" href="#"><span className="fa fa-phone" aria-hidden="true" /></a>
                                </button>
                            </li>
                            <li className="option">
                                <button className="material-button option2 bg-success1" type="button">
                                    <i className="fa fa-map-o" />
                                </button>
                            </li>
                            <li className="option">
                                <button className="material-button option3" type="button">
                                    <a className="text-trang" href="/contact"><i className="fa fa-question" /></a>
                                </button>
                            </li>
                        </ul>
                        <button className="material-button material-button-toggle" type="button">
                            <span className="fa fa-plus" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;