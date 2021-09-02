import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from '../themes';

export default function Hamburger() {
	return (
		<BarContainer>
			<Bars icon={['fas', 'bars']} />
		</BarContainer>
	);
}

const Bars = styled(FontAwesomeIcon)`
	display: flex;
	// width: 2.5rem;
	// margin: 1rem;
	color: ${colors.grayChateau};
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
      outline: none;
    }
  
`;

const BarContainer = styled.div`
    border: 1px solid blue;
    width: 2rem;
    height: 0.25rem;
    background: ${colors.lightLavender};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
`;