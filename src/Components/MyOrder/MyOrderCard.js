import React from 'react';
import './MyOrderCard.css'
const MyOrderCard = ({order}) => {
    const {serviceImg, serviceName, status,_id} = order; 
    const handelDelete=(id) => {
        const url=`http://localhost:5000/delete/${id}`
        fetch(url,{
            method: 'DELETE'
        })
    }
    return (
           <div className='order-container'>
           <img className="w-25" src={serviceImg} alt={serviceName}/>
            <h6>{serviceName}</h6>
            <button className=" btn btn-outline-success">{status}</button>
            <button onClick={() =>handelDelete(_id)} className=" btn btn-outline-success">delete</button>
           </div>
       
    );
};

export default MyOrderCard;