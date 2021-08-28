import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDetailCustomer } from '../../features/Customers/actions';
import { useParams } from 'react-router-dom';
import './style.css';

const DetailCustomer = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const detailCustomer = useSelector(state => (state.customers.selectedCustomer[0]));

    useEffect(() => {
        dispatch(showDetailCustomer(id))
    }, [dispatch, id])
    return (
        <div className="home-wrapper">
           <h1>Halaman detail</h1>

           {
               detailCustomer ? (
                   <div className="detail-wrapper">
                        <p>Nama: {detailCustomer.name}</p>
                        <p>Email: {detailCustomer.email}</p>
                        <p>Telp: {detailCustomer.telp}</p>
                        <p>Alamat: {detailCustomer.address}</p>
                   </div>
               ) : (
                   <p>loading</p>
               )
           }


        </div>
    )
}

export default DetailCustomer
