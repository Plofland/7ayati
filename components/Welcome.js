import React from 'react';
import styled from 'styled-components';
import hookah from '../public/hookahFlip.png';
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
		</WelcomeSection>
	);
}

const WelcomeSection = styled.div`
	// border: 1px solid white;
	${mq({ width: ['90%', '70%'] })};
	height: 70vh;
	margin: 10vh auto 30vh auto;
	background-image: url(${hookah.src});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	display: flex;
`;

const WelcomeDiv = styled.div`
	// border: 1px solid black;
	display: flex;
	${mq({ width: ['100%', '45%'] })};
	flex-direction: column;
	justify-content: center;
	${mq({ paddingRight: ['0', '4rem'] })};

	background-image: linear-gradient(
		to right,
		${colors.cyanBlue},
		${colors.cyanBlueTrans} 60%,
		rgba(255, 0, 0, 0)
	);
`;

const SectionTitle = styled.div`
	// border: 1px solid orange;
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	${mq({ fontSize: ['2rem', '3rem'] })};
	font-weight: bold;
	text-align: center;
	margin-bottom: 2rem;
`;

const Text = styled.div`
	// border: 1px solid green;
	text-align: center;
	margin: 0 auto;
	font-size: 0.8rem;

	p {
		padding: 1rem;
	}
`;
