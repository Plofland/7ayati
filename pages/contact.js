import Image from 'next/image';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { colors, mq } from '../themes';
import largeParty from '../public/images/largeParty.jpeg';

export default function Contact() {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

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
				<Wrapper>
					<Image
						src={largeParty}
						alt="People outside at a picnic table in a park"
						quality={isMobile ? 10 : 75}
						layout="fill"
						objectFit="scale-down"
					/>
				</Wrapper>
			</ImageContainer>
		</ContactSection>
	);
}

const ContactSection = styled.div`
	${mq({ maxWidth: ['90%', '70%', '75%'] })};
	${mq({
		margin: ['10vh auto', '5vh auto', '10vh auto']
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
			'2rem 0 2rem 2rem'
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
`;

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	${mq({ height: ['220px', '400px', '460px'] })};
	${mq({
		transform: [
			'none',
			'none',
			'translate(8%, 0%)'
		]
	})};
`;
