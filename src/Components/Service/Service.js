import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { _id, name, description, img } = service;

    const url = `/placeOrder/${_id}`;

    return (
        <div className="col-md-4">

            <img src={img} alt="" className="img-fluid" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={url}><button className='btn btn-outline-success '>Book Now </button></Link>
        </div>
    );
};

export default Service;