import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import FilmCard from './FilmCard';
import Header from './Home';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }

    }

    async componentDidMount() {
        let url = `https://ghibliapi.herokuapp.com${this.props.match.url}`;
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

        let film = this.state.data;


        return (
            <Fragment>
                <Header />
            <div className="d-flex justify-content-center">
                <div className="card-group" style={{ maxWidth: "35rem" }}>
                    <FilmCard title={film.title} rt={film.rt_score} desc={film.description} direc={film.director} prod={film.producer} date={film.release_date} key={film.id} />
                </div>
            </div>
            </Fragment>
        );

    }
}

export default Film;
