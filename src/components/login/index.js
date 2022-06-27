import React, { useState, useEffect } from 'react';
import { API_post } from '../../server/api';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import FormWrapper from '../../style/FormWrapper';
import Button from '../../style/Button';

const Login = () => {
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [errorData, setErrorData] = useState();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorData('');
        }, 3000);
        return () => clearTimeout(timer);
    }, [errorData]);

    const submit = async (e) => {
        e.preventDefault();
        if (!fetching) {
            setFetching(true);
            const userData = await API_post('/user/auth', user);
            setFetching(false);
            if (userData[0] === 'errorData') {
                setErrorData(userData[1]);
            } else if (userData[0] === 'error') {
                setError(userData[1]);
            } else {
                const data = userData[1];
                localStorage.access_token = data.access_token;

                window.location.reload();
            }
        }
    };

    return error ? (
        <div className="d-flex justify-conetent-center flex-column m-auto">
            <h2 className="text-center">Ошибка сервера</h2>
            <img className="error-img p-5" src="/images/logo.png" alt="" />
        </div>
    ) : (
        <Container className="d-flex flex-grow-1 mt-4 mt-sm-0 mb-4 mb-sm-0">
            <FormWrapper>
                <h3 className="caption text-center">
                    <div>Авторизация</div>
                </h3>
                <Form className="form-login" onSubmit={submit}>
                    {errorData && (
                        <div className="err-form">
                            {errorData}
                            <div
                                className="remove"
                                onClick={(e) => setErrorData('')}
                            >
                                &times;
                            </div>
                        </div>
                    )}
                    <Form.Group size="lg">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            name="user[email]"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </Form.Group>
                    <Form.Group size="lg">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            name="user[password]"
                            value={user.password}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                            autoComplete="on"
                        />
                    </Form.Group>
                    <Button>Войти</Button>
                    <p className="mt-3 text-center">
                        Нет, аккаунта?
                        <Link className="p-2 follow-reg" to="/registration">
                            Регистрация
                        </Link>
                    </p>
                </Form>
            </FormWrapper>
        </Container>
    );
};

export default Login;
