import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../images/icon-instagram.svg';
import { ReactComponent as PinterestIcon } from '../images/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg';
import { ReactComponent as YoutubeIcon } from '../images/icon-youtube.svg';
import logo from '../images/Logo-white.png';
import PrimaryButton from './PrimaryButton';

const FooterContainer = styled.div`
    background-color: #2d314e;
    padding: 3rem 0rem;

    @media (min-width: 1000px) {
        padding: 5rem 0rem;
    }
`;

const GridContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 2.5fr;
        grid-template-areas: 'icons links links-two button';
        justify-content: space-between;
        text-align: left;
    }
`;

const IconContainer = styled.div`
    grid-area: icons;

    @media (min-width: 1000px) {
    }
`;

const Logo = styled.img`
    margin-bottom: 1.8rem;
    cursor: pointer;

    @media (min-width: 1000px) {
        margin-bottom: 3rem;
    }
`;

const LinksOne = styled.ul`
    grid-area: links;
    list-style: none;
    text-align: center;

    @media (min-width: 1000px) {
        text-align: left;
    }

    li {
        color: white;
        padding: 0.4rem 0;
        cursor: pointer;
        &:hover {
            filter: brightness(0.8);
        }

        @media (min-width: 1000px) {
            padding-bottom: 0.6rem;
        }
    }
`;

const LinksTwo = styled(LinksOne)`
    grid-area: links-two;
`;

const ButtonContainer = styled.div`
    grid-area: button;

    @media (min-width: 1000px) {
        text-align: right;
    }
`;

const Copyright = styled.p`
    color: grey;
    font-size: 1rem;
    align-self: flex-start;
`;

const FooterButton = styled(PrimaryButton)`
    @media (min-width: 1000px) {
        margin-bottom: 1.4rem;
    }
`;

const IconFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin: 0 auto 1.8rem auto;
    cursor: pointer;

    * {
        &:hover {
            filter: brightness(0.8);
        }
    }

    @media (min-width: 1000px) {
        margin: 0;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <GridContainer>
                <IconContainer>
                    <Logo src={logo}></Logo>
                    <IconFlexBox>
                        <FacebookIcon />
                        <InstagramIcon />
                        <PinterestIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </IconFlexBox>
                </IconContainer>
                <LinksOne>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </LinksOne>
                <LinksTwo>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </LinksTwo>
                <ButtonContainer>
                    <FooterButton>Request Invite</FooterButton>
                    <Copyright>© Easybank. All Rights Reserved</Copyright>
                </ButtonContainer>
            </GridContainer>
        </FooterContainer>
    );
};

export default Footer;
