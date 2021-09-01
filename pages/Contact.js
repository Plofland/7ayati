import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../themes';
import largeParty from '../public/largeParty.jpeg';

export default function Contact() {
	return (
		<ContactSection>
			<ContactText>
				<StyledTitle>Large Party?</StyledTitle>
				<CTAButton
					href="mailto: ploflan@gmail.com"
					target="_blank"
				>
					Get in Touch
				</CTAButton>
				<p>
					Whether it's a birthday or just a party
					of friends we can accommodate groups up
					to 20. <br />
					Just drop us a line.
				</p>
				<p>
					We will get in touch with you as soon as
					possible.
				</p>
				<p>
					If you are looking to rent 7ayati as a
					venue for the day or just a night,
					please give us a 4 week notice.
				</p>
			</ContactText>
			<ImageContainer>
				<img
					src={largeParty.src}
					alt="Owner Portrait"
				/>
			</ImageContainer>
		</ContactSection>
	);
}

const ContactSection = styled.div`
	// border: 1px solid yellow;
	background-color: gray;
	${mq({ width: ['90%', '70%'] })};
	margin: 15% auto;
	display: flex;
	${mq({ flexDirection: ['column', 'row'] })};
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.cyanBlue};
`;

const ContactText = styled.div`
	// border: 2px solid green;
	text-align: center;
	${mq({ width: ['90%', '50%'] })};
	${mq({ margin: ['2rem 1rem', '2rem 0 2rem 1rem'] })};

	p {
		padding: 1rem;
		font-size: 0.75rem;
	}
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	text-align: center;
`;

const CTAButton = styled.a`
	// border: 1px solid #3866a3;
	display: inline-block;
	cursor: pointer;
	background-color: ${colors.lightLavender};
	color: ${colors.darkText};
	font-size: 1.2rem;
	font-weight: bold;
	font-style: italic;
	padding: 0.5rem 2rem;
	margin: 2rem;
`;

const ImageContainer = styled.div`
	// border: 2px solid white;
	display: flex;
	position: relative;
	${mq({ margin: ['0 1rem 2rem 1rem', '2rem 0'] })};
	${mq({ width: ['90%', '100%'] })};
	align-items: center;

	img {
		${mq({
			transform: ['none', 'translate(8%, 0%)']
		})};
	}

`;
