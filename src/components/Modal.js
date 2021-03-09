import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const modalFade = keyframes`
0% {
    transform:translateX(0%);
    opacity:0;
}
100% {
    opacity:1;
    transform:translateX(0%)}

`;

const modalFadeOut = keyframes`
0% {
    transform:translateX(0%);
    opacity:1;
}

95%{opacity:0;
    transform:translateX(0%);

}
100% {
    opacity:0;
    transform:translateX(100%)}

`;

const ModalBackground = styled.div`
    background: rgba(0, 0, 0, 0.253);
    position: absolute;
    left: 0;
    right: 0;
    top: 8vh;
    width: 100%;
    z-index: 100;
    opacity: 0;
    transform: translateX(100%);
    border-radius: 5px;
    backface-visibility: hidden;

    ${(props) =>
        props.menuActive &&
        css`
            animation: ${modalFade} 0.3s ease-in forwards;
        `};

    ${(props) => {
        if (props.menuActive === null) return;
        if (!props.menuActive)
            return css`
                animation: ${modalFadeOut} 0.3s ease-in forwards;
            `;
    }};
`;

const ModalContainer = styled.nav`
    height: 39vh;
    background-color: white;
    margin: 5% auto;
    width: 80%;
    text-align: center;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 5s ease-out;
`;

const Navigation = styled.ul`
    list-style: none;
    text-align: center;
`;

const NavList = styled.li`
    color: black;
    margin-bottom: 2.2rem;
    transition: transform 0.1s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const Link = styled.a`
    cursor: pointer;
    font-size: 1.2rem;
    padding-bottom: 2px;

    ${(props) =>
        props.activePage && 'border-bottom: 5px solid var(--Lime-Green);'}

    &:hover {
        color: var(--Bright-Cyan);
        transform: scale(1.5);
    }
`;

const Modal = ({ menuActive, activePage, changePage }) => {
    const checkActivePage = (page) => activePage === page;
    return (
        <ModalBackground menuActive={menuActive}>
            <ModalContainer>
                <Navigation>
                    <NavList>
                        <Link
                            activePage={checkActivePage('Home')}
                            onClick={() => {
                                changePage('Home');
                            }}
                        >
                            Home
                        </Link>
                    </NavList>
                    <NavList>
                        <Link
                            activePage={checkActivePage('About')}
                            onClick={() => {
                                changePage('About');
                            }}
                        >
                            About
                        </Link>
                    </NavList>
                    <NavList>
                        <Link
                            activePage={checkActivePage('Contact')}
                            onClick={() => {
                                changePage('Contact');
                            }}
                        >
                            Contact
                        </Link>
                    </NavList>
                    <NavList>
                        <Link
                            activePage={checkActivePage('Blog')}
                            onClick={() => {
                                changePage('Blog');
                            }}
                        >
                            Blog
                        </Link>
                    </NavList>
                    <NavList>
                        <Link
                            activePage={checkActivePage('Careers')}
                            onClick={() => {
                                changePage('Careers');
                            }}
                        >
                            Careers
                        </Link>
                    </NavList>
                </Navigation>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
