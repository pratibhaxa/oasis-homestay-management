import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Login } from './components/Login';
import { AddProperty } from './components/AddProperty';
import { ViewProperty } from './components/ViewProperty';
import { Property } from './components/Property';
import { AddGuestForm } from './forms/AddGuestForm';
import { ViewGuest } from './components/ViewGuest';
import { ViewGuestDemo } from './components/ViewGuestDemo';

function App() {
    return (
        <React.Fragment>
        {/* App Component */}
            <Routes>
                <Route path='/auth/register' Component={Register} />
                <Route path='/auth/login' Component={Login} />
                <Route path='/addproperty' Component={AddProperty} />
                <Route path='/viewproperty' Component={ViewProperty} />
                <Route path="/viewproperty/:id" Component={Property}>
                    <Route path="add-guest" Component={AddGuestForm} />
                    <Route path="view-guest" Component={ViewGuest} />
                    <Route path="view-guest-demo" Component={ViewGuestDemo} />
                </Route>
                <Route path="/viewproperty/:id" Component={ViewGuestDemo} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
