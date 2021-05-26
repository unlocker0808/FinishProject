import React, { Component } from 'react';
import Search from './Search';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav" style={{ backgroundColor: '#009cd7' }}>
                    <div className="container"><a className="navbar-brand js-scroll-trigger" href="/"><i style={{ fontSize: '30px' }}>Covid 247</i></a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {this.props.sections.map((section) => (
                                    <li key={section.id} className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link js-scroll-trigger" href={section.url}>{section.title} </a>
                                    </li>
                                ))}
                            </ul>
                           <Search/>
                            <a className="btn btn-primary" role="button" href="/login">Đăng nhập</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;