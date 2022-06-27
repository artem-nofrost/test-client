import React from 'react';
import styled from 'styled-components';
import { fade_in } from './animations';

const StyledForm = styled.div`
    display: block;
    width: 315px;
    margin: auto;
    .form-login {
        padding: 2rem;
        border-radius: 5%;
        background-color: rgb(212, 212, 212);
        box-shadow: 0 0 8px #8537867a;
        .err-form {
            background-color: #d6ad16;
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            line-height: 2.5;
            height: auto;
            font-size: 1.5rem;
            text-align: center;
            color: black;
            animation: ${fade_in} 0.5s ease 1;
            .remove {
                position: absolute;
                bottom: 6px;
                right: 11px;
                cursor: pointer;
            }
        }
    }
`;

const FormWrapper = (props) => {
    return <StyledForm {...props} />;
};

export default FormWrapper;
