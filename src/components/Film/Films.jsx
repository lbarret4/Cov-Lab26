import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import FilmCard from './FilmCard';
import { Link } from 'react-router-dom';
import Header from '../Home';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    async componentDidMount() {
        let url = 'https://ghibliapi.herokuapp.com/films';
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


        let cards = this.state.data.map((film) => {
            let filmLink = <Link className="btn btn-dark text-center" to={`/films/${film.id}`} key={`/films/${film.id}`}>More Info</Link>;

            return (
                <FilmCard title={film.title} link={filmLink} key={film.id} />

            );
        });
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

export default Films;
