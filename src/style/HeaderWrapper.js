import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    .navbar {
        @media screen and (max-width: 500px) {
            justify-content: center !important;
        }

        .navbar-brand {
            @media screen and (max-width: 767.5px) {
                flex: 0 0 100%;
                max-width: 100%;
                text-align: center;
                margin-right: 0 !important;
            }
        }
        .cont-navbar {
            display: flex;
            align-items: center;
            min-width: 100%;
            overflow-x: clip;
        }
        form {
            transition: 0.5s;
            @media screen and (max-width: 400px) {
                flex-basis: 0;
            }
            #main-search {
                height: 36px;
                margin-right: 10px;
                border-radius: 24px;
                transition: 0.5s;
                @media screen and (max-width: 400px) {
                    padding: 0;
                    border: 0;
                    width: 0;
                    opacity: 0;
                }
            }
            #search-btn {
                height: 36px;
                min-width: 36px;
                background: rgba(255, 255, 255, 0);
                border-radius: 50%;
                border-color: rgba(255, 255, 255, 0);
                color: #535a52;
                transition: 0.25s;
                &:hover {
                    background-color: #efefef;
                    text-decoration: none;
                }
            }
        }
        @media screen and (max-width: 420px) {
            .show {
                flex: 1 0 100%;
                opacity: 1 !important;
                input {
                    width: 100% !important;
                    opacity: 1 !important;
                    padding: 0 !important;
                    padding: 0.375rem 0.75rem !important;
                    border: 1px solid #ced4da !important;
                }
            }
        }

        .d-flex {
            .theme-toggle {
                margin-left: 9px;
            }
        }

        .profile-logo {
            transition: 0.25s;
            .user-circle {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                transition: 0.25s;
                user-select: none;
                cursor: pointer;
                &:hover {
                    background-color: #efefef;
                }
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background-color: #efefef;
                }
            }
            a {
                .user-circle-2 {
                    width: 36px;
                    height: 36px;
                    transition: 0.25s;
                    user-select: none;
                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        transition: 0.25s;
                        &:hover {
                            background-color: #efefef;
                        }
                        &:hover .unread-message {
                            top: 0;
                            right: 0;
                            width: 17px;
                            height: 17px;
                            background: #e94b4b;
                        }
                    }
                    .unread-message {
                        position: absolute;
                        top: 1px;
                        right: 1px;
                        width: 15px;
                        height: 15px;
                        background: #e94b4b;
                        color: white;
                        border-radius: 50%;
                        box-shadow: 0 0 8px #8537867a;
                    }
                }
            }
            .account-options {
                position: absolute;
                right: 0;
                top: 85px;
                background: rgb(255, 255, 255);
                min-height: 40px;
                min-width: 250px;
                max-height: 90vh;
                max-width: 90vw;
                border-radius: 16px;
                box-shadow: 0 0 8px #8537867a;
                z-index: 1;
                @media screen and (max-width: 767.5px) {
                    top: 150px;
                }
                a {
                    display: block;
                    border-radius: 16px;
                    transition: 0.25s;
                    text-decoration: none !important;
                    &:hover {
                        background: #efefef;
                    }
                    .account-picture {
                        background-color: #efefef;
                        font-weight: 700;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    .account-name {
                        max-width: 180px;
                        font-weight: 700;
                        .account-name-line {
                            font-size: 1.5rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: 100%;
                        }
                    }
                    .account-email {
                        max-width: 180px;
                        .account-email-line {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: 100%;
                        }
                    }
                }
                .out {
                    border-radius: 16px;
                    cursor: pointer;
                    transition: 0.25s;
                    &:hover {
                        background: #efefef;
                    }
                }
            }
            .account-visible {
                visibility: visible;
            }
        }
    }
`;

const HeaderWrapper = (props) => {
    return <StyledHeader {...props} />;
};

export default HeaderWrapper;
