import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    margin: 3rem 0rem;

    @media (min-width: 1000px) {
        flex-basis: 23%;
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;

    @media (min-width: 1000px) {
        height: 220px;
        object-fit: cover;
    }
`;

const Author = styled.p`
    font-size: 0.9rem;
    color: grey;
`;

const Wrapper = styled.div`
    padding: 2rem;
`;

const Title = styled.h3`
    font-weight: 500;
    font-size: 1.4rem;
    margin: 1rem 0;
    cursor: pointer;

    &:hover {
        color: var(--Grayish-Blue);
    }

    @media (min-width: 1000px) {
        margin: 0.5rem 0;
    }
`;

const Body = styled.p`
    color: grey;
    line-height: 1.6;

    @media (min-width: 1000px) {
        font-size: 1.1rem;
    }
`;

const Card = ({ image, author, title, body }) => {
    return (
        <CardContainer>
            <Image src={image} />
            <Wrapper>
                <Author>{author}</Author>
                <Title>{title}</Title>
                <Body>{body}</Body>
            </Wrapper>
        </CardContainer>
    );
};

export default Card;
