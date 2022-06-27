import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.div`
    .container-profile {
        border-radius: 16px;
        background-color: #d4d4d4;
        box-shadow: 0 0 8px #8537867a;
        h2,
        h3,
        p,
        .list-group {
            @media screen and (max-width: 991.5px) {
                text-align: center !important;
            }
        }
        span {
            @media screen and (max-width: 575.5px) {
                white-space: pre-wrap;
            }
        }

        .col-body {
            order: 1;
        }
        .card-img-top {
            @media screen and (max-width: 575.5px) {
                width: 160px !important;
                height: 160px !important;
            }
        }
        .status-circle-profile {
            position: absolute;
            bottom: 25px;
            right: -25px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: grey;
            border: 2px solid white;
            @media screen and (max-width: 575.5px) {
                display: none;
            }
            .online {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #3bba3b !important;
            }
        }
        .status-circle-profile-mobile {
            @media screen and (max-width: 575.5px) {
                position: absolute;
                bottom: 27px;
                right: 27px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: grey;
                border: 2px solid white;
                .online {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #3bba3b !important;
                }
            }
        }
    }
`;

const ProfileWrapper = (props) => {
    return <StyledProfile {...props} />;
};

export default ProfileWrapper;
