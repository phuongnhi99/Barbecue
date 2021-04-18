import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="col-lg-3 pt-40">
                <div className="product-item">
                    <div className="card mb-4 box-shadow">
                        <div className="product-img">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1588791174744-7e9bf4378277?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Product" />
                        </div>
                        <div className="card-body">
                            <div className="product-name">Hải Sản Xóc Tỏi Ớt Chiên Giòn</div>
                            <div className="product-description pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="product-price pt-10">820.000 VND</div>
                            <div className="d-flex justify-content-between align-items-center pt-20">
                                <div className="btn-group w-100">
                                    <button type="button" className="btn-add-to-card w-100">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;