import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/header.component';
import Index from './components/index.component';
import Footer from './components/footer.component';
class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Index />
                <Footer />
            </Router>
        );
    }
}

export default App;