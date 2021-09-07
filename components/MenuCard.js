import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { colors, mq } from '../themes/index';
import logo from '../public/Fayati logo light lilac bg500.jpg';

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
					<Wrapper>
						<Image
							src={logo}
							alt="Menu item picture"
							layout="fill"
							objectFit="contain"
						/>
					</Wrapper>
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
	position: relative;
	${mq({ width: ['40%', '45%', '50%'] })};
	display: flex;
	align-items: center;
	width: 50%;
`;

const Wrapper = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid red;
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
	height: 30%;
`;

const Text = styled.div`
	${mq({ fontSize: ['0.4rem', '0.5rem', '0.6rem'] })};
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Prices = styled.div`
	display: flex;
	justify-content: center;
`;

const Description = styled.div`
	flex-grow: 1;
	${mq({
		padding: [
			'0.4rem 0.5rem',
			'0.6rem 0.7rem',
			'1rem 0.75rem'
		]
	})};
	${mq({ fontSize: ['0.4rem', '0.55rem', '0.7rem'] })};
`;
