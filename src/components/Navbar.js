import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import Hamburger from './Hamburger';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    z-index: 99999;
`;

const NavbarContainer = styled.header`
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    padding: 0 2rem;
    position: relative;
    z-index: 99999;
    background-color: white;

    @media (min-width: 1000px) {
        padding: 0;
    }
`;

const Navigation = styled.ul`
    display: none;

    @media (min-width: 1000px) {
        display: flex;
    }
`;

const NavItem = styled.li`
    margin-left: 3rem;
    list-style: none;
`;

const Link = styled.a`
    color: var(--Grayish-Blue);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.1s ease-in;
    padding-bottom: 2px;

    &:hover {
        color: var(--Dark-Blue);

        &::after {
            display: block;
            content: '';
            height: 5px;
            width: 70px;
            position: absolute;
            top: 93%;
            background-image: linear-gradient(
                to right,
                var(--Lime-Green),
                var(--Bright-Cyan)
            );
        }
    }
`;

const PrimaryButtonNavbar = styled(PrimaryButton)`
    display: none;
    margin-right: 5px;

    @media (min-width: 1000px) {
        display: block;
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;

const Navbar = () => {
    const [menuActive, toggleMenu] = useState(null);
    const [activePage, changePage] = useState('Home');

    return (
        <Wrapper>
            <NavbarContainer>
                <Logo src={logo} alt="logo" />
                <Navigation>
                    <NavItem>
                        <Link>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Contact</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Blog</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Careers</Link>
                    </NavItem>
                </Navigation>
                <PrimaryButtonNavbar style={{}}>
                    Request Invite
                </PrimaryButtonNavbar>
                <Hamburger toggleMenu={toggleMenu} menuActive={menuActive} />
                <Modal
                    menuActive={menuActive}
                    activePage={activePage}
                    changePage={changePage}
                />
            </NavbarContainer>
        </Wrapper>
    );
};

export default Navbar;
