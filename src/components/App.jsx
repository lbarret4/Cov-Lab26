import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Links from './Links';


class App extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                    <Links />
                    <Switch>
                        {/* <Route exact path="/" component={} />
                        <Route path="/" component={} />
                        <Route path="/" component={} /> */}
                    </Switch>
                </Fragment>
            </Router>
        );
    }



}

export default App;