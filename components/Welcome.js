import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';
import coalSparks from '../assets/depositphotos_237726120_2-stock-photo-hot-red-coals-for-shisha.jpeg';

export default function Welcome() {
	return (
		<WelcomeSection>
			<SectionTitle>
				Café and Hookah Lounge
			</SectionTitle>
			<Text>
				<p>
					Contrary to popular belief, Lorem Ipsum
					is not simply random text. It has roots
					in a piece of classical Latin literature
					from 45 BC, making it over 2000 years
					old.{' '}
				</p>
				<p>
					Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia,
					looked up one of the more obscure Latin
					words, consectetur, from a Lorem Ipsum
					passage, and going through the cites of
					the word in classical literature, di
				</p>
			</Text>
			<img
				src={coalSparks.src}
				alt="Glowing how cube shaped coals"
			/>
		</WelcomeSection>
	);
}

const WelcomeSection = styled.div`
	background-color: ${colors.cyanBlue};
    background-image: url('../../assets/coals-for-hookah-on-wooden-background-with-dry-oranges-place-for-text_126267-41.jpeg');
	width: 40%;
	margin: 30vh auto;
    // display: inline-block;
`;

const Text = styled.div`
	margin: 1rem;
`;

const SectionTitle = styled.div`
	font-size: 3rem;
`;
