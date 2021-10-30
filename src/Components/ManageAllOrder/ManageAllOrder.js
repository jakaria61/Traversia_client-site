import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState();
    useEffect(() =>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data));
    })
    return (
        <div>
           {
              orders && orders.map(order => <OrderCard order={order} key={order._id}></OrderCard>)
           }
        </div>
    );
};

export default ManageAllOrder;