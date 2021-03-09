import styled, { keyframes } from 'styled-components';

const pulse = keyframes`

	0% {
		box-shadow: 0 0 0 0 rgba(45,49,77, .8);
	}

	50% {
		box-shadow: 0 0 0 5px rgba(45,49,77,.3);
	}

	100% {
        box-shadow: 0px 0px 100px rgba(45,49,77,0);
	}
`;

const PrimaryButton = styled.button`
    background-color: white;
    margin: 1.8rem 0;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.9rem 2.2rem;
    border: none;
    border-radius: 50px;
    color: white;
    transition: transform 0.3s ease;
    cursor: pointer;
    outline: none;
    background-image: linear-gradient(
        to right,
        var(--Lime-Green),
        var(--Bright-Cyan)
    );

    &:hover {
        animation: ${pulse} 1s ease-out infinite;
    }

    &:active {
        background-image: linear-gradient(
            to right,
            var(--Bright-Cyan),
            var(--Lime-Green)
        );
    }
`;

export default PrimaryButton;
