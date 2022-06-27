import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Navbrand from './Navbrand';
import ProfileLogo from './ProfileLogo';
import HeaderWrapper from '../../style/HeaderWrapper';

function AuthNav() {
    return (
        <HeaderWrapper>
            <Navbar expand="lg" className="pt-4 pb-4">
                <Navbrand />
                <div className="d-flex flex-grow-1">
                    <div className="cont-navbar">
                        <Search />
                        <ProfileLogo></ProfileLogo>
                    </div>
                </div>
            </Navbar>
        </HeaderWrapper>
    );
}

export default AuthNav;
