import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopAppBar from './navbar'
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FindPage from './find';
import BallRecs from './ballrecs';
import ClubRecs from './clubrecs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function App() {
    return(
        <Router>
            <div className = "app">
                <TopAppBar />
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/find" component = {FindPage} />
                    <Route path = "/ballrecs" component = {BallRecs} />
                    <Route path = "/clubrecs" component = {ClubRecs} />
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));