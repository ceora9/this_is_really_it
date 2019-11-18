import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
//import Dashboard from '../pages/Dashboard'


class Navbar extends Component {

    static defaultProps = {
        title: 'Emoji Connect',
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {

        return (
            <nav className='navbar bg-primary'>
                <h1>{this.props.title}</h1>
                {/* <ul><li>
                    <Link to='../pages/Dashboard'>Dashboard</Link>
                </li></ul> */}
            </nav>
        )
    }
}

export default Navbar





// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const links = (
//         <ul>
//             <li>
//                 <Link to='/login'>Login</Link>
//             </li>
//             <li>
//                 <Link to='/pages/emojis'>Emojis</Link>
//             </li>
//             <li>
//                 <Link to='/dashboard'>
//                     <i className='fas fa-user' />{' '}
//                     <span className='hide-sm'>Dashboard</span>
//                 </Link>
//             </li>
//         </ul>
//     );

//     return (
//         <nav className='navbar bg-dark'>
//             <h1>
//                 <Link to='/'><i className='fas fa-code' /> Emoji Connect</Link>
//             </h1>
//             <Fragment>{links}</Fragment>
//         </nav>
//     );
// }

// export default Navbar