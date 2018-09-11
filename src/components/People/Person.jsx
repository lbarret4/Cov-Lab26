import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import PeopleCard from './PeopleCard';
import Header from '../Home';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            filmData: {},
            speciesData: {}

        }
    }

    async componentDidMount() {
        let url = `https://ghibliapi.herokuapp.com${this.props.match.url}`

        try {
            let results = await fetch(url);
            results = await results.json();
            let url2 = results.films;
            let url3 = results.species;
            let [res2, res3] = await Promise.all([fetch(url2), fetch(url3)]);
            [res2, res3] = await [res2.json(), res3.json()];
            this.setState({
                data: results,
                filmData: await res2,
                speciesData: await res3


            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        let person = this.state.data;
        let filmTitle = this.state.filmData.title;
        let species = this.state.speciesData.name;
        return (
            <Fragment>
                <Header />
                <div className="d-flex justify-content-center">
                    <div className="card-group" style={{ maxWidth: "50rem" }}>
                        <PeopleCard name={person.name} key={person.id} gender={person.gender} age={person.age} hair={person.hair_color} eyes={person.eye_color} id={person.id} title={filmTitle} species={species} />
                    </div>
                </div>
            </Fragment>
        );

    }



}

export default Person;