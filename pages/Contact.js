import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';
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
					venue for the day or just a night, please give us
					a 4 week notice.
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
    // border: 1px solid white;
	background-color: gray;
	width: 70%;
	margin: 8rem auto 6rem auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: ${colors.cyanBlue};
`;

const ImageContainer = styled.div`
	// border: 2px solid white;
	margin: auto 0;
	display: inline-block;
	position: relative;
	width: 100%;

	img {
		display: block;
		position: absolute;
		left: 55%;
		// min-height: 100%;
		min-width: 300px;
		max-width: 600px;
		transform: translate(-50%, -50%);
	}
`;

const ContactText = styled.div`
	// border: 2px solid green;
	text-align: center;
	width: 60%;
	margin: 2rem 1rem;

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
	// text-decoration: none;
	margin: 2rem;
`;
