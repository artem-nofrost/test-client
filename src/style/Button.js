import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const StyledButton = styled.button`
    width: 100%;
    color: #fff !important;
    background-color: ${colors.lightViolet}!important;
    border-color: ${colors.lightViolet} !important;
    border-radius: 16px;
    padding: 0.5rem 1rem;
    transition: 0.5s;
    &:hover,
    &:active {
        background-color: ${colors.darkViolet} !important;
        border-color: ${colors.darkViolet} !important;
    }
`;

const Button = (props) => {
    return <StyledButton {...props} />;
};

export default Button;
