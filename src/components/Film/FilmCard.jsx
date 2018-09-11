import React from 'react';

let FilmCard = (props) => {

    let producer = (
        <div className="d-flex justify-content-between">
            <p className="card-text">Produced by </p>
            <p className="card-text">{props.prod}</p>
        </div>
    );

    let director = (
        <div className="d-flex justify-content-between">
            <p className="card-text">Directed by </p>
            <p className="card-text">{props.direc}</p>
        </div>
    );

    let ratingAndDate = (
        <div className="card-footer d-flex justify-content-between align-items-center">
            Released: {props.date} <span>Rotten Tomato: <span className="badge badge-danger badge-pill text-center"> {props.rt}% </span></span>
        </div>)

    let description = <p className="card-text">{props.desc}</p>;

    return (

        < div className="card bg-warning">
            <div className="card-header text-center">
                <h4> {props.title} </h4>
            </div>
            { props.date !== undefined && props.rt ? ratingAndDate : props.date}
            <div className="card-body">
            {props.desc !== undefined ? description : props.desc}
                <span className="d-flex justify-content-center"> {props.link}</span>

            </div>
            <div className="card-footer ">
                {props.direc !== undefined ? director : props.direc}
                {props.prod !== undefined ? producer : props.prod}

            </div>

        </ div>

    );



}

export default FilmCard;