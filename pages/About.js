import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import RazPortrait from '../public/RazPortrait.JPG';
import { colors } from '../themes';

export default function About() {
	return (
		<AboutSection>
			<AboutCard>
				<AboutText>
					<StyledTitle>About Us</StyledTitle>
					<p>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Aliquam
						ac pulvinar vitae ipsum, lectus
						nisi.
					</p>
					<p>
						Consectetur dui interdum congue
						vitae ultrices. Lobortis vel id
						facilisi netus. Potenti habitasse id
						tellus est , aenean. Laoreet ac
						etiam pharetra faucibus integer
						purus duis elit at. Convallis semper
						quis aliquam dis leo pellentesque
						aliquet orci arcu. Maecenas lobortis
						proin commodo quis magna arcu
						senectus non tincidunt. A nisl netus
						pellentesque a consequat lacus et.
					</p>
					<p>
						Purus felis semper consequat lectus
						orci, sed. Quis elit ac sagittis
						ipsum purus mauris duis tincidunt
						in. At luctus volutpat nisl,
						dignissim egestas.
					</p>
				</AboutText>
				{/* <Image src={RazPortrait.src} alt="Owner Portrait" /> */}
				<ImageContainer>
					<img
						src={RazPortrait.src}
						alt="Owner Portrait"
					/>
				</ImageContainer>
				<DummyDiv />
			</AboutCard>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	width: 80%;
	margin: 15% auto;
`;

const AboutCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.cyanBlue};
`;

const ImageContainer = styled.div`
	// border: 2px solid white;
	margin: auto 0;
    display: inline-block;
	position: relative;

	img {
		display: block;
        max-width: none;
		position: absolute;
		top: 50%;
		left: 50%;
		min-height: 100%;
		min-width: 100%;
		transform: translate(-50%, -50%);
	}
`;

const AboutText = styled.div`
	// border: 2px solid green;
	text-align: center;
	width: 50%;
    margin: 1rem;

	p {
		padding: 1rem;
		font-size: 0.75rem;
	}
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 0;
	text-align: center;
`;

const DummyDiv = styled.div`
	// background-color: ${colors.darkLavender};
	// border: 2px solid yellow;
	width: 3%;
`;
