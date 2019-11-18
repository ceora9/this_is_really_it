import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Emojis from '../pages/Emojis'
import SelectEmoji from '../pages/SelectEmoji'
import Navbar from '../layout/Navbar'
import Landing from '../layout/Landing'
// import Register from '../auth/Register';
// import Login from '../auth/Login';
// import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routes/PrivateRoute';

const Routes = () => {
    return (
        <section className='container'>

            <Switch>
                <Route exact path='/pages' component={Emojis} />
                <Route exact path='/pages' component={SelectEmoji} />
                <Route exact path='/layout' component={Landing} />
                <Route exact path='/layout' component={Navbar} />

                {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
                {/* <Route component={NotFound} /> */}
            </Switch>
        </section>
    );
};

export default Routes;
