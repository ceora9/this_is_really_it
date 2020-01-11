import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navbar = () => {

    const navLinks = (
        <ul>
            <li>
                <Link to='/SignIn'>sign in</Link>
            </li>
            <li>
                <Link to='/Register'>register</Link>
            </li>
            <li>
                <Link to='/About'>about</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>Emoji Connect</Link>
            </h1>
            <Fragment>{navLinks}</Fragment>
        </nav>
    )

}

export default Navbar


