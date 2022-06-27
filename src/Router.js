import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './route/PrivateRouter';
import Login from './components/login';
import Registration from './components/registration';
import Main from './components/main';
import People from './components/people';
import Profile from './components/profile';
import { useSelector } from 'react-redux';

export default function Router() {
    const isAuth = useSelector((state) => state.user.is_auth);
    return (
        <>
            <Switch>
                <Route path="/login">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route path="/Registration">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        <Registration />
                    )}
                </Route>
                <Route exact path="/">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/people',
                            }}
                        />
                    ) : (
                        <Main />
                    )}
                </Route>
                <PrivateRoute exact path="/people">
                    <People />
                </PrivateRoute>
                <PrivateRoute exact path="/people/:id">
                    <Profile />
                </PrivateRoute>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}
