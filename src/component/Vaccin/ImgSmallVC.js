import React, { Component } from 'react';


class ImgSmallVC extends Component {
    render() {
        return (
            <div style={{ float: 'left' }}>
                <img src={this.props.path} style={{ maxWidth: "150px", maxHeight: "160px" }} />
            </div>
        );
    }
}

export default ImgSmallVC;