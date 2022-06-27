import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import styled from 'styled-components';

import store from './redux';
import Container from 'react-bootstrap/Container';

import Connect from './server/Connect';
import Header from './components/header';
import Router from './Router';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from './redux/reducers/actions';
import { get_access_token } from './server/user_token';
import { signIn } from './server/Auth';

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const FollowAuthorization = () => {
    let canAuthenticate = get_access_token(); // наличие токены
    const defaultState = canAuthenticate ? 'waiting' : 'initial'; // есть токен или нету
    const [state, setState] = useState(defaultState);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.is_auth);
    const socket_state = useSelector((state) => state.socket.state);

    useEffect(() => {
        if (state === 'waiting') {
            setState('loading');
            signIn().then(([data, success]) => {
                if (success) {
                    dispatch(
                        setUserData({
                            is_auth: true,
                            id: data.id,
                            date: data.date,
                            email: data.email,
                            fname: data.fname,
                            gender: data.gender,
                        }),
                    );
                } else {
                    setState('not_authenticated');
                }
            });
        }
    }, [state, dispatch]);

    useEffect(() => {
        if (isAuth) {
            setState('authenticated');
        }
    }, [isAuth]);

    if (state === 'loading' || state === 'waiting') {
        return <Container></Container>;
    }

    return (
        <>
            <Connect />
            <Container className="d-flex flex-column min-vh-100">
                {socket_state === 'connected' && (
                    <>
                        <Header />
                        <Router />
                    </>
                )}
            </Container>
        </>
    );
};

function App() {
    return (
        <AppWrapper>
            <Provider store={store}>
                <FollowAuthorization />
            </Provider>
        </AppWrapper>
    );
}

export default App;
