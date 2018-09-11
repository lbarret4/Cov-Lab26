import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Links from './Links';
import Films from './Films';
import Home from './Home';
import Film from './Film';


class App extends Component {

        constructor(props){
            super(props);
            this.state ={
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
                        <Route  path="/films/:id" component={Film} /> 
                    </Switch>
                </div>
            </Router>
        );
    }



}

export default App;