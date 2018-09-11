import React from 'react';

let FilmCard = (props) => {




    return (

        < div className="card bg-warning">
            <div className="card-header text-center">
                <h4> {props.title} </h4>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                Released: {props.date} <span>Rotten Tomato: <span className="badge badge-danger badge-pill text-center"> {props.rt}% </span></span>
            </div>
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
                <span className="d-flex justify-content-center"> {props.link}</span>

            </div>
            <div className="card-footer ">
                <div className="d-flex justify-content-between">
                    <p className="card-text">Directed by </p>
                    <p className="card-text">{props.direc}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Produced by </p>
                    <p className="card-text">{props.prod}</p>
                </div>
            </div>

        </ div>

    );



}

export default FilmCard;