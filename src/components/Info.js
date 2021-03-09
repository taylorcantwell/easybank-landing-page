import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ApiIcon } from '../images/icon-api.svg';
import { ReactComponent as OnboardingIcon } from '../images/icon-onboarding.svg';
import {
    ReactComponent as BudgettingIcon,
    ReactComponent as CardIcon,
} from '../images/icon-online.svg';

const InfoSection = styled.div`
    background-color: #f4f5f7;
    padding: 6rem 2rem;

    @media (min-width: 1000px) {
        min-height: 92vh;
        padding: 8rem 0;
    }
`;

const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
        max-width: 1440px;
        justify-content: space-between;
    }
`;

const IntroductionContainer = styled.div`
    text-align: center;
    margin-bottom: 1rem;

    @media (min-width: 1000px) {
        text-align: left;
        margin-bottom: 3rem;
    }
`;

const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 300;

    @media (min-width: 1000px) {
        font-size: 3rem;
        margin-bottom: 1rem;
        text-align: left;
    }
`;

const Body = styled.p`
    color: grey;
    font-size: 1.2rem;

    @media (min-width: 1000px) {
        font-size: 1.45rem;
    }
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 1000px) {
        justify-content: space-between;
        flex-direction: row;
        text-align: left;
    }
`;

const InfoSectionContainer = styled.div`
    padding: 2rem 0rem;

    @media (min-width: 1000px) {
        flex-basis: 23%;
        padding: 0;
        padding: 1.3rem 0rem;
    }
`;

const InfoSubheading = styled.h3`
    color: var(--Dark-Blue);
    font-weight: 300;
    font-size: 1.7rem;
    margin: 1rem 0rem 1rem 0rem;

    @media (min-width: 1000px) {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        margin: 1.5rem 0rem 2rem 0rem;
    }
`;

const Info = () => {
    return (
        <InfoSection>
            <Container>
                <IntroductionContainer>
                    <Title className="title">Why choose Easybank?</Title>
                    <Body className="body">
                        We leverage Open Banking to turn your bank account into
                        your financial hub.
                        <br /> Control your finances like never before.
                    </Body>
                </IntroductionContainer>
                <CardContainer>
                    <InfoSectionContainer>
                        <CardIcon />
                        <InfoSubheading>Online Banking</InfoSubheading>
                        <Body>
                            Our modern web and mobile applications allow you to
                            keep track of your finances wherever you are in the
                            world.
                        </Body>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <BudgettingIcon />
                        <InfoSubheading>Simple Budgeting</InfoSubheading>
                        <Body>
                            See exactly where your money goes each month.
                            Receive notifications when you’re close to hitting
                            your limits.
                        </Body>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <OnboardingIcon />
                        <InfoSubheading>Fast Onboarding</InfoSubheading>
                        <Body>
                            We don’t do branches. Open your account in minutes
                            online and start taking control of your finances
                            right away.
                        </Body>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <ApiIcon />
                        <InfoSubheading>Fast Onboarding</InfoSubheading>
                        <Body>
                            We don’t do branches. Open your account in minutes
                            online and start taking control of your finances
                            right away.
                        </Body>
                    </InfoSectionContainer>
                </CardContainer>
            </Container>
        </InfoSection>
    );
};

export default Info;
