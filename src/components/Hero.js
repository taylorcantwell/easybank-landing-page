import React from 'react';
import styled from 'styled-components';
import backgroundImageDesktop from '../images/bg-intro-desktop.svg';
import backgroundImageMobile from '../images/bg-intro-mobile.svg';
import mobilePhones from '../images/image-mockups.png';
import PrimaryButton from './PrimaryButton';

const Wrapper = styled.div`
    @media (min-width: 1000px) {
        max-width: 1440px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;

const HeroContainer = styled.section`
    height: 92vh;
    margin: 0 auto;
    text-align: center;
    padding: 6rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    background-image: url(${backgroundImageMobile});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top -30% right;
    background-color: #fafafa;

    @media (min-width: 1000px) {
        justify-content: normal;
        text-align: left;
        background-image: url(${backgroundImageDesktop});
        background-size: 100%;
        background-position: top -450px right -800px;
        background-repeat: no-repeat;
        padding: 6rem 0rem;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    margin-top: 1rem;
    line-height: 1.2;
    @media (min-width: 1000px) {
        font-size: 3.8rem;
    }
`;

const Body = styled.p`
    line-height: 1.6;
    margin-top: 1.5rem;
    font-size: 1.2rem;

    @media (min-width: 1000px) {
        margin-right: 52rem;
        font-size: 1.5rem;
    }
`;

const HeroImage = styled.img`
    position: absolute;
    width: 93%;
    top: -20%;
    right: 3%;

    @media (min-width: 1000px) {
        max-width: 55%;
        width: 55%;
        z-index: 30;
        position: absolute;
        right: -10.5%;
        top: -5%;
    }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <Wrapper>
                <Title>
                    Next generation <br /> digital banking
                </Title>
                <Body>
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </Body>
                <PrimaryButton style={{ marginBottom: '0' }}>
                    Request Invite
                </PrimaryButton>
            </Wrapper>
            <HeroImage alt="image of phones" src={mobilePhones} />
        </HeroContainer>
    );
};

export default Hero;
