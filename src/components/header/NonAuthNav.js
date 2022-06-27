import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navbrand from './Navbrand';

function NonAuthNav() {
    return (
        <Navbar expand="lg" className="pt-4 pb-4">
            <Navbrand />
        </Navbar>
    );
}

export default NonAuthNav;
