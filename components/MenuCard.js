import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../themes/index';
import logo from '../public/Fayati logo light lilac bg200.jpg';


export default function MenuCard(props) {
	const { info } = props;
	return (
		<SingleItem>
			<CardContainer>
				<Card>
					<Title>{info.name}</Title>
					<Text>
						<p>{info.price}</p>
						<Description>
							{info.description}
						</Description>
					</Text>
				</Card>
				<ImageContainer>
					<img
						src={logo.src}
						alt="Menu item picture"
					/>
				</ImageContainer>
			</CardContainer>
		</SingleItem>
	);
}

const SingleItem = styled.div`
	border: 2px solid white;
`;

const CardContainer = styled.div`
	border: 1px solid yellow;
	text-align: center;
	${mq({ margin: ['1rem', '4rem'] })};
	${mq({ width: ['150px', '300px'] })};
	display: flex;
	aspect-ratio: 1/1;
	background-color: ${colors.cyanBlue};
`;

const Card = styled.div`
	border: 2px solid white;
	display: flex;
	flex-direction: column;
	${mq({ width: ['150px', '200px'] })};

`;

const ImageContainer = styled.div`
	// border: 2px solid white;
	margin: auto 0;

	img {
		max-width: 150%;
		max-height: 150%;
	}
`;

const Title = styled.p`
	// border: 1px solid white;
	font-size: 1.2rem;
	display: flex;
	padding: 1rem;
	height: 30%;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	// border: 1px solid limegreen;
	// font-size: 0.65rem;
	${mq({ fontSize: ['0.45rem', '0.65rem'] })};
	display: flex;
	flex-direction: column;
	flex-grow: 6;
`;

const Description = styled.div`
	// border: 2px solid red;
	padding: 1rem;
	flex-grow: inherit;
`;
