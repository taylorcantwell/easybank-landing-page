import React, { useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 40px;
    height: 2px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.2s;
`;
const Bar1 = styled(Bar)`
    ${(props) =>
        props.menuActive && ' transform: rotate(-45deg) translate(-3px, 3px);'}
`;
const Bar2 = styled(Bar)`
    ${(props) => props.menuActive && ' opacity: 0;'}
`;
const Bar3 = styled(Bar)`
    ${(props) =>
        props.menuActive && ' transform: rotate(45deg) translate(-8px, -8px);'}
`;

const HamburgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;

    @media (min-width: 1000px) {
        display: none;
    }
`;

const Hamburger = ({ toggleMenu, menuActive }) => {
    console.log(menuActive);
    return (
        <HamburgerContainer
            onClick={() => {
                toggleMenu(!menuActive);
            }}
        >
            <Bar1 menuActive={menuActive} />
            <Bar2 menuActive={menuActive} />
            <Bar3 menuActive={menuActive} />
        </HamburgerContainer>
    );
};

export default Hamburger;
