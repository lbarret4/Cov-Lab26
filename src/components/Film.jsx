import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import FilmCard from './FilmCard';


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
            
            <div className=/* "card-columns" */ "card-group" style={{maxWidth: "30vw"}}>
                <FilmCard title={film.title} rt={film.rt_score} desc={film.description} direc={film.director} prod={film.producer} date={film.release_date} key={film.id+"a23"} />
            </div>
        );

    }
}

export default Film;
