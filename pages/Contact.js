import React from 'react';
import Image from 'next/image';
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
					Whether it&apos;s a birthday or just a
					party of friends we can accommodate
					groups up to 20. <br />
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
				<Image
					src={largeParty}
					alt="People outside at a picnic table in a park"
					className="contactImg"
				/>
			</ImageContainer>
		</ContactSection>
	);
}

const ContactSection = styled.div`
	${mq({ width: ['90%', '80%', '70%'] })};
	${mq({
		margin: ['20vh auto', '20vh auto', '10vh auto']
	})};
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.cyanBlue};
`;

const ContactText = styled.div`
	text-align: center;
	${mq({ width: ['90%', '80%', '40%'] })};
	${mq({
		margin: [
			'2rem 1rem',
			'2rem 1rem',
			'6rem 0 6rem 1rem'
		]
	})};

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
	display: inline-block;
	cursor: pointer;
	background-color: ${colors.lightLavender};
	color: ${colors.darkText};
	font-size: 1.2rem;
	font-weight: bold;
	font-style: italic;
	padding: 0.5rem 2rem;
	margin: 2rem;
	text-decoration: none;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	${mq({
		margin: ['0 1rem 2rem 1rem', '2rem 0', '2rem 0']
	})};
	${mq({ width: ['90%', '80%', '80%'] })};

	.contactImg {
		overflow: visible;
		width: 100%;
		${mq({
			transform: [
				'none',
				'none',
				'translate(10%, 0%) scale(1.1)'
			]
		})};
	}
`;
