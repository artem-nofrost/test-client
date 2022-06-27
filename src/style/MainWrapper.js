import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
    display: block;
    width: 315px;
    margin: auto;
    .wrapper-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        border-radius: 5%;
        background-color: #d4d4d4;
        box-shadow: 0 0 8px #8537867a;
        .main-caption {
            font-size: 20px;
            line-height: 24px;
        }
        .cont-main-buttons {
            gap: 15px;
            @media screen and (max-width: 575.5px) {
                justify-content: center;
            }
        }
    }
`;

const MainWrapper = (props) => {
    return <StyledMain {...props} />;
};

export default MainWrapper;
