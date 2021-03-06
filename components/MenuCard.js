import Image from 'next/image';
import styled from 'styled-components';
import { colors, mq } from '../themes/index';
import logo from '../public/images/FayatiLogoLightLilacBG500.jpg';

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
	${mq({ width: ['200px', '240px', '300px'] })};
	display: flex;
	aspect-ratio: 1/1;
	background-color: ${colors.cyanBlue};
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	${mq({ width: ['70%', '55%', '50%'] })};
`;

const ImageContainer = styled.div`
	position: relative;
	${mq({ width: ['30%', '45%', '50%'] })};
	display: flex;
	align-items: center;
	width: 50%;
`;

const Wrapper = styled.div`
	position: absolute;
	${mq({ width: ['100px', '150px', '200px'] })};
	aspect-ratio: 1/1;
`;

const Title = styled.p`
	${mq({ fontSize: ['0.8rem', '1rem', '1.2rem'] })};
	${mq({
		padding: [
			'1rem 0.2rem 0.6rem 0.1rem',
			'1rem 0.8rem 0.4rem 0.6rem',
			'1rem 0.8rem'
		]
	})};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	height: 26%;
`;

const Text = styled.div`
	${mq({ fontSize: ['0.6rem', '0.7rem', '0.8rem'] })};
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Prices = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 0.4rem;

	p {
		margin: 0;
	}
`;

const Description = styled.div`
	flex-grow: 1;
	${mq({
		padding: [
			'0.4rem 0.6rem',
			'0.6rem 0.7rem',
			'1rem 0.75rem'
		]
	})};
`;
