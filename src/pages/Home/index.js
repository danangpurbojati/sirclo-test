import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

const Home = () => {
    const {customers} = useSelector(state => state.customers);
    return (
        <div className="home-wrapper">
            <h1>List Customers</h1>
            <div className="user-wrapper">
                {
                    customers.map(customer => (
                        <Link className="customer-badge" to={`/customer/${customer.id}`} key={customer.id}>{customer.email}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
