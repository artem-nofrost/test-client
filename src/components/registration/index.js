import React, { useState, useEffect } from 'react';
import { API_post, API_upload } from '../../server/api';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from '../../style/Button';
import FormWrapper from '../../style/FormWrapper';

const Registration = () => {
    const [error, setError] = useState(null);
    const [errorData, setErrorData] = useState();
    const [fetching, setFetching] = useState(false);
    const [user, setUser] = useState({
        fname: '',
        date: '',
        gender: '',
        email: '',
        password: '',
    });
    const [file, setFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');

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
            let fileUrl = '';
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                let fileData = await API_upload(formData);

                if (fileData[0]) {
                    setFetching(false);
                    return setErrorData(fileData[1]);
                }
                fileUrl = fileData[1];
                setAvatarUrl(fileData[1]);
            }

            const [userError, userData] = await API_post('/user/add', {
                ...user,
                avatarUrl: fileUrl,
            });
            setFetching(false);
            if (userError === 'errorData') {
                setErrorData(userData);
            } else if (userError === 'error') {
                setError(userData);
            } else {
                const data = userData;
                localStorage.access_token = data.access_token;
                window.location.reload();
            }
        }
    };

    return error ? (
        <div>Ошибка сервера</div>
    ) : (
        <Container className="d-flex flex-grow-1 mt-4 mt-sm-0 mb-4 mb-sm-0">
            <FormWrapper>
                <h3 className="caption text-center">Регистрация</h3>
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
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            autoFocus
                            type="fname"
                            name="user[fname]"
                            value={user.fname}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    fname: e.target.value.trim(),
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group size="lg">
                        <Form.Label>Дата рождения</Form.Label>
                        <Form.Control
                            type="date"
                            name="user[date]"
                            value={user.date}
                            onChange={(e) =>
                                setUser({ ...user, date: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group size="lg">
                        <Form.Label className="w-100">Пол</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Мужчина"
                            name="user[gender]"
                            id="gender-male"
                            value="Male"
                            checked={user.gender === 'Male'}
                            onChange={(e) =>
                                setUser({ ...user, gender: e.target.value })
                            }
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Женщина"
                            name="user[gender]"
                            id="gender-female"
                            value="Female"
                            checked={user.gender === 'Female'}
                            onChange={(e) =>
                                setUser({ ...user, gender: e.target.value })
                            }
                        />
                    </Form.Group>

                    <img
                        src={
                            avatarUrl === ''
                                ? file === null
                                    ? ''
                                    : URL.createObjectURL(file)
                                : 'http://localhost:7500' + avatarUrl
                        }
                        alt=""
                        className="mw-100"
                    />

                    <Form.Group size="lg">
                        <Form.Label>Фото профиля</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => {
                                if (e?.target?.files.length > 0)
                                    setFile(e.target.files[0]);
                            }}
                        />
                    </Form.Group>

                    <Form.Group size="lg">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
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
                                setUser({
                                    ...user,
                                    password: e.target.value.trim(),
                                })
                            }
                            autoComplete="on"
                        />
                    </Form.Group>
                    <Button>Зарегистрироваться</Button>
                </Form>
            </FormWrapper>
        </Container>
    );
};

export default Registration;
