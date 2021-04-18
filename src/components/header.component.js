import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container">
                            <img className="logo" src="https://image.freepik.com/free-vector/barbecue-grill-logo-template-premium-vector_144543-93.jpg" alt="Logo"></img>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link">Khuyến mãi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Về chúng tôi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;