import React from 'react';
import { faBook,  faBookReader,  faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';
import { Link } from 'react-router-dom';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title:    <Link className="nav-item nav-link" to="/portal/book">Stocks</Link>,
            count: 1500,
            colors: "success",
            icon: faBook
        },
        {
            title: <Link className="nav-item nav-link" to="/portal/book">Sold</Link>,
            count: 3000,
            colors: "warning",
            icon: faBookReader
        },
        {
            title: <Link className="nav-item nav-link" to="/portal/book">New Arrival</Link>,
            count: 350,
            colors: "info",
            icon: faUsers,

        },
        {
            title: <Link className="nav-item nav-link" to="/portal/book">Upcoming Products</Link>,
            count: "58",
            colors: "danger",
            icon: faUserPlus
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
         
        </div>
    );
}
