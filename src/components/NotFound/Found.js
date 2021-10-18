import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
import './Found.css'

const Found = () => {
    return (
        <div>
            <img  className="images" src={notFound} alt="" /> <br />
            <Link to="/"><button className="details-btn">Go Back</button></Link>
        </div>
    );
};

export default Found;