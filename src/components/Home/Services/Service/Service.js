import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,name,description,img}=props.service;
    return (
        <div className="service p-4">
            <img className="image" src={img} alt="" />
            <h3 className="mt-2 service-name">{name}</h3>
            <p>{description.slice(0,90)}</p>
            <Link to={`details/${id}`}><button className="btn service-btn">View Details</button>
            </Link>
        </div>
    );
};

export default Service;