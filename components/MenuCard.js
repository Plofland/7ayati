import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../themes/index';
import logo from '../public/Fayati logo light lilac bg200.jpg';

export default function MenuCard(props) {
	const { info } = props;
	return (
		<>
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
		</>
	);
}

const CardContainer = styled.div`
	text-align: center;
	${mq({ margin: ['1rem', '2rem', '4rem'] })};
	${mq({ width: ['150px', '200px', '275px'] })};
	display: flex;
	aspect-ratio: 1/1;
	background-color: ${colors.cyanBlue};
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	${mq({ width: ['60%', '55%', '50%'] })};
`;

const ImageContainer = styled.div`
	margin: auto 0;
	position: relative;
	${mq({ width: ['40%', '45%', '50%'] })};
	height: 100%;
	display: flex;
	align-items: center;

	img {
		position: absolute;
		max-width: 150%;
		max-height: 150%;
		z-index: 2;
	}
`;

const Title = styled.p`
	${mq({ fontSize: ['0.7rem', '1rem', '1.2rem'] })};
	${mq({
		padding: [
			'1rem 0.5rem 0.4rem 0.5rem',
			'1rem 0.8rem 0.4rem 0.8rem',
			'1rem'
		]
	})};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
`;

const Text = styled.div`
	${mq({ fontSize: ['0.4rem', '0.45rem', '0.5rem'] })};
	height: 70%;
	display: flex;
	flex-direction: column;
`;

const Prices = styled.div`
	display: flex;
	justify-content: center;
`;

const Description = styled.div`
	height: 100%;
	${mq({
		padding: [
			'0.4rem 0.5rem',
			'0.6rem 0.7rem',
			'1rem 0.75rem'
		]
	})};
	${mq({ fontSize: ['0.4rem', '0.55rem', '0.7rem'] })};
`;
