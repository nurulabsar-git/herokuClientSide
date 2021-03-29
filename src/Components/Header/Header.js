import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
            <Link className="Link" to="/">Home</Link>
            <Link className="Link" to="/dashboard">Dashboard</Link>
            <Link className="Link" to="/addEvent">Add Event</Link>
            </nav>
        </div>
    );
};

export default Header;