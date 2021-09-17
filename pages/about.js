import Head from 'next/head';
import Image from 'next/dist/client/image';
import styled from 'styled-components';
import RazPortrait from '../public/images/RazPortrait.JPG';
import { colors, mq } from '../themes';

export default function About() {
	return (
		<>
			<Head>
				<title>7ayati</title>
				<meta
					name="description"
					content="Ohio Cafe and Hookah Lounge"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<AboutSection>
					<AboutCard>
						<AboutText>
							<StyledTitle>
								About Us
							</StyledTitle>
							<p>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
								Aliquam ac pulvinar vitae
								ipsum, lectus nisi.
							</p>
							<p>
								Consectetur dui interdum
								congue vitae ultrices.
								Lobortis vel id facilisi
								netus. Potenti habitasse id
								tellus est , aenean. Laoreet
								ac etiam pharetra faucibus
								integer purus duis elit at.
								Convallis semper quis
								aliquam dis leo pellentesque
								aliquet orci arcu. Maecenas
								lobortis proin commodo quis
								magna arcu senectus non
								tincidunt. A nisl netus
								pellentesque a consequat
								lacus et.
							</p>
							<p>
								Purus felis semper consequat
								lectus orci, sed. Quis elit
								ac sagittis ipsum purus
								mauris duis tincidunt in. At
								luctus volutpat nisl,
								dignissim egestas.
							</p>
						</AboutText>
						<ImageContainer>
							<Wrapper>
								<Image
									src={RazPortrait}
									alt="Owner Portrait"
									layout="fill"
									objectFit="scale-down"
								/>
							</Wrapper>
						</ImageContainer>
					</AboutCard>
				</AboutSection>
			</main>
		</>
	);
}

const AboutSection = styled.div`
	${mq({
		margin: ['10vh auto', '5vh auto', '20vh auto']
	})};
	${mq({ width: ['90%', '70%', '70%'] })};
`;

const AboutCard = styled.div`
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.cyanBlue};
`;

const AboutText = styled.div`
	text-align: center;
	${mq({ width: ['90%', '70%', '50%'] })};
	margin: 1rem;

	p {
		padding: 1rem;
		font-size: 0.75rem;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	margin: 2rem 1rem;
	${mq({ width: ['80%', '60%', '30%'] })};
`;

const Wrapper = styled.div`
	${mq({
		position: ['static', 'static', 'absolute']
	})};
	${mq({
		transform: ['none', 'none', 'translate(-25%, -50%)']
	})};
	height: 450px;
	width: 350px;
`;

const StyledTitle = styled.div`
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 0;
	text-align: center;
`;
