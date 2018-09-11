import React from 'react';

let PeopleCard = (props) => {

    let url = `https://ghibliapi.herokuapp.com/people/${props.id}`

    let title = (
        <div className="card-footer  ">
            Appeared in Film:  {props.title}

        </div>
    );

    let list = (
        <ul className="list-group list-group-flush ">
            <li className="list-group-item  bg-warning d-flex justify-content-between align-items-center"> Gender: {props.gender} <span>Age: <span className="badge badge-primary badge-pill text-center"> {props.age} </span></span></li>
            <li className="list-group-item  bg-warning">Eye Color: {props.eyes}</li>
            <li className="list-group-item bg-warning">Hair Color: {props.hair}</li>
            <li className="list-group-item  bg-warning"> Species: {props.species}</li>

        </ul >
    );



    let personJson = <a href={url} className=" btn btn-dark ">{props.name}'s JSON </a>;

    return (
        < div className="card bg-warning">
            <div className="card-header text-center">
                <h4> {props.name} </h4>
            </div>

            {props.title !== undefined ? title : props.title}

            {props.eyes !== undefined && props.gender && props.species && props.gender !== undefined && props.gender !== undefined ? list : props.eyes}

            <div className="card-body d-flex flex-column">
                {props.link !== undefined ? props.link : personJson}
            </div>
        </ div>

    );



}

export default PeopleCard;