import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='light-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Welcome to Emoji Connect!</h1>

                    <div className='buttons'>
                        <Link to='/login' className='btn btn-light'>Login</Link>
                        <br></br>
                        <Link to='/register' className='btn btn-light'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;