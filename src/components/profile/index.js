import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { API_post } from '../../server/api';
import { getAge } from '../../lib/age';
import ProfileWrapper from '../../style/Profile';

const Profile = () => {
    const [error, setError] = useState(null);
    const [errorData, setErrorData] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const [fetching, setFetching] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getUser = async () => {
            let userData = await API_post('/search/get_current_user', { id });
            setFetching(false);
            if (userData[0] === 'errorData') {
                setErrorData(userData[1]);
            } else if (userData[0] === 'error') {
                setError(userData[1]);
            } else {
                const data = userData[1];
                setCurrentUser(data);
            }
        };
        getUser();
    }, [id]);

    return error ? (
        <div className="d-flex justify-conetent-center flex-column m-auto">
            <h2 className="text-center">Ошибка сервера</h2>
        </div>
    ) : (
        <>
            {errorData ? (
                <div className="d-flex justify-conetent-center flex-column m-auto">
                    <h2 className="text-center">{errorData}</h2>
                    <img
                        className="error-img p-5"
                        src="/images/logo.png"
                        alt=""
                    />
                </div>
            ) : !fetching ? (
                <ProfileWrapper>
                    <div className="p-5 container-profile">
                        <Card className="card-search mt-4">
                            <Row
                                xs={1}
                                lg={2}
                                className="m-auto w-100 p-0 p-sm-4"
                            >
                                <Col className="col-body">
                                    <Card.Body className="justify-content-center mw-100 p-4">
                                        <Card.Title>
                                            <div className="card-name text-center">
                                                <h2 className="display-3 text-left">
                                                    <span className="position-relative">
                                                        {currentUser.fname}
                                                        <div className="status-circle-profile">
                                                            <div
                                                                className={
                                                                    currentUser.is_online
                                                                        ? 'online '
                                                                        : null
                                                                }
                                                            ></div>
                                                        </div>
                                                    </span>
                                                </h2>
                                            </div>
                                        </Card.Title>
                                        <Card.Text className="h5 text-muted text-left">
                                            Возраст:{' '}
                                            {currentUser.date !== undefined &&
                                                getAge(currentUser.date)}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-center mt-3 mt-lg-0">
                                        <div className="position-relative">
                                            <Card.Img
                                                variant="top"
                                                src={
                                                    currentUser.avatarUrl
                                                        ? 'http://localhost:7500' +
                                                          currentUser.avatarUrl
                                                        : require(`../../images/no-avatar.png`)
                                                }
                                                className="rounded-circle img-fluid p-4"
                                                style={{
                                                    width: '300px',
                                                    height: '300px',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                            <div className="status-circle-profile-mobile">
                                                <div
                                                    className={
                                                        currentUser.is_online
                                                            ? 'online '
                                                            : null
                                                    }
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </ProfileWrapper>
            ) : (
                <Container className="preload h-100">
                    <img src="/images/logo.png" alt="" />
                </Container>
            )}
        </>
    );
};

export default Profile;
