import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import RazPortrait from '../public/RazPortrait.JPG';
import { colors, mq } from '../themes';

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
			</AboutCard>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	${mq({ margin: ['20vh auto', '20vh auto', '20vh auto'] })};
	${mq({ width: ['90%', '80%', '70%'] })};
`;

const AboutCard = styled.div`
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.cyanBlue};
`;

const AboutText = styled.div`
	// border: 2px solid green;
	text-align: center;
	${mq({ width: ['90%', '70%', '50%'] })};
	margin: 1rem;

	p {
		padding: 1rem;
		font-size: 0.75rem;
	}
`;

const ImageContainer = styled.div`
	// border: 2px solid white;
	display: flex;
	justify-content: center;
	position: relative;
	margin: 2rem 1rem;
	${mq({ width: ['80%','50%', '30%'] })};

	img {
		${mq({ position: ['static', 'static', 'absolute'] })};
		${mq({
			transform: ['none', 'none', 'translate(-25%, -50%)']
		})};
	}
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 0;
	text-align: center;
`;
