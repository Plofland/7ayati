import Image from 'next/dist/client/image';
import styled from 'styled-components';
import hookah from '../public/hookahFlipCompressed.png';
import { colors, mq } from '../themes';

export default function Welcome() {
	return (
		<WelcomeSection>
			<WelcomeDiv>
				<SectionTitle>
					Café and Hookah Lounge
				</SectionTitle>
				<Text>
					<p>
						Contrary to popular belief, Lorem
						Ipsum is not simply random text. It
						has roots in a piece of classical
						Latin literature from 45 BC, making
						it over 2000 years old.{' '}
					</p>
					<p>
						Richard McClintock, a Latin
						professor at Hampden-Sydney College
						in Virginia, looked up one of the
						more obscure Latin words
					</p>
				</Text>
			</WelcomeDiv>
			<ImageContainer>
				<Image
					src={hookah}
					alt="Hookah on table next to an iced drink"
					layout="fill"
					objectFit="cover"
					objectPosition="bottom"
				/>
			</ImageContainer>
		</WelcomeSection>
	);
}

const WelcomeSection = styled.div`
	${mq({ width: ['90%', '80%', '70%'] })};
	${mq({
		margin: [
			'10vh auto',
			'20vh auto',
			'10vh auto 30vh auto'
		]
	})};
	height: 70vh;
	display: flex;
	position: relative;
`;

const WelcomeDiv = styled.div`
	display: flex;
	${mq({ width: ['100%', '100%', '45%'] })};
	flex-direction: column;
	justify-content: center;
	${mq({ paddingRight: ['0', '0', '4rem'] })};

	background-image: linear-gradient(
		to right,
		${colors.cyanBlue},
		${colors.cyanBlueTrans} 60%,
		rgba(255, 0, 0, 0)
	);
`;

const SectionTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	${mq({ fontSize: ['2rem', '2.5rem', '3rem'] })};
	font-weight: bold;
	text-align: center;
	margin-bottom: 2rem;
`;

const Text = styled.div`
	text-align: center;
	margin: 0 auto;
	font-size: 0.8rem;

	p {
		padding: 1rem;
	}
`;

const ImageContainer = styled.div`
	z-index: -2;
`;
