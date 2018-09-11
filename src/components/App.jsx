import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Links from './Links';
import Films from './Film/Films';
import Home from './Home';
import Film from './Film/Film';
import People from './People/People';
import Person from './People/Person';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cardtype: ""
        }

    }


    render() {
        return (
            <Router>
                <div className="container">
                    <Links />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route path="/films/:id" component={Film} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={Person} />
                    </Switch>
                </div>
            </Router>
        );
    }



}

export default App;