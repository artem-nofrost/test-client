import React, { useState } from 'react';
import { API_post } from '../../server/api';

export const LogoutButton = () => {
    const [error, setError] = useState(null);
    const logout = async () => {
        const userData = await API_post('/user/out');
        if (userData[0] === 'error') {
            setError(userData[1]);
        } else {
            localStorage.removeItem('access_token');
            window.location.reload();
        }
    };

    return error ? (
        <div className="d-flex justify-conetent-center flex-column m-auto">
            <h2 className="text-center">Ошибка сервера</h2>
            <img className="error-img p-5" src="/images/logo.png" alt="" />
        </div>
    ) : (
        <div className="out" onClick={logout}>
            <div className="ml-2 p-2 text-dark">Выйти</div>
        </div>
    );
};
