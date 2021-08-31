import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../themes/index';
import logo from '../public/Fayati logo light lilac bg200.jpg';

export default function MenuCard(props) {
	const { info } = props;
	return (
		<SingleItem>
			<CardContainer>
				<CardInfo>
					<Title>{info.name}</Title>
					<Text>
						<Prices>
							<p>{info.price}</p>
							{info.tinPrice && (
								<p>
									&nbsp; • {info.tinPrice}
								</p>
							)}
						</Prices>
						<Description>
							{info.description}
						</Description>
					</Text>
				</CardInfo>
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
	// border: 2px solid white;
`;

const CardContainer = styled.div`
	// border: 1px solid yellow;
	text-align: center;
	${mq({ margin: ['1rem', '4rem'] })};
	${mq({ width: ['150px', '275px'] })};
	display: flex;
	aspect-ratio: 1/1;
	background-color: ${colors.cyanBlue};
`;

const CardInfo = styled.div`
	// border: 2px solid white;
	display: flex;
	flex-direction: column;
	${mq({ width: ['60%', '50%'] })};
`;

const ImageContainer = styled.div`
	// border: 2px solid blue;
	margin: auto 0;
	position: relative;
	${mq({ width: ['40%', '50%'] })};
	height: 100%;
	display: flex;
	align-items: center;

	img {
		position: absolute;
		max-width: 150%;
		max-height: 150%;
	}
`;

const Title = styled.p`
	// border: 1px solid white;
	${mq({ fontSize: ['.8rem', '1.2rem'] })};
	${mq({ padding: ['.2rem', '1rem'] })};

	display: flex;
	height: 30%;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	// border: 1px solid limegreen;
	${mq({ fontSize: ['0.4rem', '0.65rem'] })};
	height: 70%;
	display: flex;
	flex-direction: column;
`;

const Prices = styled.div`
	display: flex;
	justify-content: center;
`;

const Description = styled.div`
	// border: 2px solid red;
	${mq({ padding: ['.4rem .5rem', '1rem 0.75rem'] })};
	height: 100%;
`;
