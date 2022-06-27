import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
    .container-search {
        border-radius: 16px;
        background-color: #d4d4d4;
        box-shadow: 0 0 8px #8537867a;
        .page-search {
            border-radius: 24px;
        }
        button {
            background-color: #853786;
            border-color: #853786;
            border-radius: 16px;
            &:hover,
            &:active,
            &:focus {
                background-color: #79237a !important;
                border-color: #79237a !important;
            }
        }
        .card-search {
            border-radius: 16px;
            align-items: center;
            .img-profile {
                width: 160px;
                height: 160px;
                object-fit: cover;
            }
            .status-circle {
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
            .card-name {
                position: relative;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .buttons-card {
                justify-content: center;
                gap: 20px;
            }
        }
    }
`;

const Search = (props) => {
    return <StyledSearch {...props} />;
};

export default Search;
