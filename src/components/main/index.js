import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../style/Button';
import MainWrapper from '../../style/MainWrapper';

const Home = () => {
    const isAuth = useSelector((state) => state.user.is_auth);
    const history = useHistory();
    return (
        <Container className="d-flex flex-grow-1 mt-4 mt-sm-0 mb-4 mb-sm-0">
            <MainWrapper>
                <div className="wrapper-main">
                    <Image src="/images/logo.png" />
                    <div className="main-caption mt-3">Вход Fintech</div>
                    <div className="mt-2 pt-3 pb-3 d-flex cont-main-buttons">
                        <Button
                            onClick={() => {
                                isAuth
                                    ? history.push('/')
                                    : history.push('/login');
                            }}
                        >
                            Войти
                        </Button>
                        <Button
                            onClick={() => {
                                isAuth
                                    ? history.push('/')
                                    : history.push('/registration');
                            }}
                        >
                            Регистрация
                        </Button>
                    </div>
                </div>
            </MainWrapper>
        </Container>
    );
};

export default Home;
