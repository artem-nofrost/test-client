import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';

function Navbrand() {
    const isAuth = useSelector((state) => state.user.is_auth);
    return (
        <Navbar.Brand href={isAuth ? '/search' : '/'}>
            <Image src="/images/logo.png" />
        </Navbar.Brand>
    );
}

export default Navbrand;
