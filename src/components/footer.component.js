import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-20">
                            <div className="brand-name">
                                Barbecue The Grill
                            </div>

                            <div className="social-icon pt-20 pb-20">
                                <i className="fab fa-facebook fa-2x"></i>
                                <i className="fab fa-instagram fa-2x"></i>
                                <i className="fab fa-youtube fa-2x"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-20 pb-20">
                            <div className="brand-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br/>
                                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;