import React from 'react';
import styled from 'styled-components';
import imageConfetti from '../images/image-confetti.jpg';
import imageCurrency from '../images/image-currency.jpg';
import imagePlane from '../images/image-plane.jpg';
import imageRestaurant from '../images/image-restaurant.jpg';
import Card from './Card';

const ArticleContainer = styled.section`
    padding: 6rem 2rem;
    background-color: #fafafa;

    @media (min-width: 1000px) {
        min-height: 92vh;
        padding: 8rem 0;
    }
`;

const FlexBoxContainer = styled.div`
    @media (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;

    @media (min-width: 1000px) {
        text-align: left;
    }
`;

const Articles = () => {
    return (
        <ArticleContainer>
            <Wrapper>
                <Title>Latest Articles </Title>
                <FlexBoxContainer>
                    <Card
                        image={imageCurrency}
                        author={'By Claire Robinson'}
                        title={'Receive money in any currency with no fees'}
                        body={
                            'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
                        }
                    />
                    <Card
                        image={imageRestaurant}
                        author={'By Wilson Hutton'}
                        title={'Treat yourself without worrying about money'}
                        body={
                            'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
                        }
                    />
                    <Card
                        image={imagePlane}
                        author={'By Wilson Hutton'}
                        title={' Take your Easybank card wherever you go'}
                        body={
                            'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
                        }
                    />
                    <Card
                        image={imageConfetti}
                        author={'By Claire Robinson '}
                        title={'Our invite-only Beta accounts are now live!'}
                        body={
                            'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... '
                        }
                    />
                </FlexBoxContainer>
            </Wrapper>
        </ArticleContainer>
    );
};

export default Articles;
