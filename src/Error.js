import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function Error() {
    return (
        <div className="center">
            <h1>Error 404..!!</h1>
            <br/>
            <Link to="/"><b>Click here for Home Page</b></Link>
        </div>
    );
  }
export default Error;