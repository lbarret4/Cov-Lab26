import React from 'react';
import{ Link }from 'react-router-dom';


const Links = () => {

    return (
        <div class="btn-group" role="group">
            <Link className="btn btn-primary" to="/">Go Home</Link>
            <Link className="btn btn-primary" to="films">View Films</Link>
            <Link className="btn btn-primary" to="/people">View People</Link>
        </div>

    );
}

export default Links;