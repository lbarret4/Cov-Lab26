import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import FilmCard from './FilmCard';
import { Link } from 'react-router-dom';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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


        let cards = this.state.data.map((film) => {
            let filmLink = <Link className="btn btn-dark text-center" to={`/films/${film.id}`} key={`/films/${film.id}`} >{film.title}</Link>;

            return (


                    <FilmCard title={film.title} rt={film.rt_score} desc={film.description} direc={film.director} prod={film.producer} date={film.release_date} link={filmLink} key={film.id} />
            );
        });
        return (
            <div className="card-columns">
                {cards}
            </div>
        );

    }
}

export default Films;
