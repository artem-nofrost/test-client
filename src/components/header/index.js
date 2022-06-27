import React from 'react';
import NonAuthNav from './NonAuthNav';
import AuthNav from './AuthNav';

import { useSelector } from 'react-redux';

export default function Header() {
    const isAuth = useSelector((state) => state.user.is_auth);

    return isAuth ? <AuthNav /> : <NonAuthNav />;
}
