import React, { Component } from 'react';
import HomeDiv01 from './HomeDiv01';
import HomeDiv02 from './HomeDiv02';
import HomeDiv03 from './HomeDiv03';
import Search from '../Search';



class Home extends Component {
    render() {
        return (
            
            <div>
                      

                <section id="home" className="home">
                <Search/>
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