import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Routes from './routes/Routes';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import SelectEmoji from './pages/SelectEmoji'
//import Emojis from './pages/Emojis'
//import Users from './pages/Users'
//import ListOfEmojis from './pages/ListOfEmojis'
//import PropTypes from 'prop-types'

const App = () => {
  return (

    <Router>
      <Fragment>
        <Navbar />
        <SelectEmoji />
 
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>

        
      </Fragment>

     
    </Router>

    // <div className="App">

    //   <header>
    //     {/* <h1>Welcome to Emoji Connect!</h1> */}
    //   </header>

    //   <Navbar />
    //   <Landing />

    //   {/* <ListOfEmojis /> */}

    //   {/* <Emojis /> */}

    //   {/* <Users /> */}

    // </div>
  );
}

export default App;



