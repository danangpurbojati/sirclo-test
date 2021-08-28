import React from 'react'

// redux things
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import DetailCustomer from './pages/DetailCustomer';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/customer/:id" component={DetailCustomer} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App

