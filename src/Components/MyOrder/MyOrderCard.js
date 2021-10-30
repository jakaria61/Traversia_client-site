import React from 'react';

const MyOrderCard = ({order}) => {
    const {serviceImg, serviceName, status} = order;
    return (
        <div>
            <img className="w-25" src={serviceImg} alt={serviceName}/>
            <h6>{serviceName}</h6>
            <button className=" btn btn-outline-success">{status}</button>
        </div>
    );
};

export default MyOrderCard;