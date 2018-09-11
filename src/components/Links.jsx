import React from 'react';
import{ Link }from 'react-router-dom';


const Links = () => {

    return (
        <div className="btn-group mb-2 d-flex justify-content-center" role="group">
            <Link className="btn btn-dark" to="/">Go Home</Link>
            <Link className="btn btn-dark" to="/films">View Films</Link>
            <Link className="btn btn-dark" to="/people">View People</Link>
        </div>

    );
}

export default Links;