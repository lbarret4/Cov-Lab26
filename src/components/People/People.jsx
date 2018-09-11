import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import PeopleCard from './PeopleCard';
import { Link } from 'react-router-dom';
import Header from '../Home';

class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let url = `https://ghibliapi.herokuapp.com/people`;
        try {
            let results = await fetch(url);
            results = await results.json();
            this.setState({
                data: results
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let cards = this.state.data.map((people) => {
            let personLink = <Link className="btn btn-dark text-center" to={`/people/${people.id}`} key={`/people/${people.id}`}>More Info</Link>;

            return <PeopleCard name={people.name} link={personLink} key={people.id} />


        })

        return (
            <Fragment>
                <Header />
                <div className="card-columns">
                    {cards}
                </div>
            </Fragment>

        );


    }



}

export default People;