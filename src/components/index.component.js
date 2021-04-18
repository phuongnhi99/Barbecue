import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Item from './item.component';
import Banner from './banner.component';

class Index extends Component {
    render() {
        return (
            <Router>
                <Banner />
                <div className="container">
                    <div className="row pb-40">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;