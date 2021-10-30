import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState();
    useEffect(() =>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    })
    return (
        <div className="row w-100 ">
           {
              orders && orders.map(order => <MyOrderCard order={order} key={order._id}></MyOrderCard>)
           }
        </div>
    );
};

export default MyOrder;