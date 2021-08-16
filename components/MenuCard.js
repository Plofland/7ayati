import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes/index';
import logo from '../public/Fayati logo light lilac bg200.jpg';

export default function MenuCard(props) {
    const {info} = props
    console.log(info)
	return (
		<StyledContainer>
			<StyledMenuCard>
				<StyledMenuText>
					<StyledTitle>
						{info.name}
					</StyledTitle>
					<StyledText>
						<p>{info.price}</p>
						<StyledDescription>
							{info.description}
						</StyledDescription>
					</StyledText>
				</StyledMenuText>
			</StyledMenuCard>
			<img src={logo.src} alt="Menu item picture" />
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	// border: 1px solid yellow;
	text-align: center;
	margin: 4rem;
	width: 300px;
	aspect-ratio: 1/1;
	position: relative;
	background-color: ${colors.cyanBlue};

	img {
		position: absolute;
		right: -100px;
		top: 50px;
		max-width: 100%;
		max-height: 80%;
	}
`;

const StyledMenuCard = styled.div`
	// border: 2px solid white;
	display: flex;
	width: 200px;
	height: 100%;
`;

const StyledMenuText = styled.div`
	// border: 2px solid black;
	display: flex;
	flex-direction: column;
`;

const StyledTitle = styled.p`
	// border: 2px solid white;
	font-size: 1.2rem;
	padding: 1.5rem;
`;

const StyledText = styled.div`
	// border: 2px solid red;
	font-size: 0.75rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const StyledDescription = styled.div`
	// border: 2px solid limegreen;
	padding: 1rem;
	flex-grow: 1;
	overflow: hidden;
`;
