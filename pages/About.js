import React from 'react';
import styled from 'styled-components';
import Image from 'next';
import RazPortrait from '../public/RazPortrait.JPG';
import { colors } from '../themes';
import Navbar from '../components/Navbar';

export default function About() {
	return (
		<AboutDiv>
            <Navbar />
			<AboutSection>
				<AboutCard>
					<AboutText>
						<h2>About Me</h2>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
							Aliquam ac pulvinar vitae ipsum,
							lectus nisi.
						</p>
						<p>
							Consectetur dui interdum congue
							vitae ultrices. Lobortis vel id
							facilisi netus. Potenti
							habitasse id tellus est ,
							aenean. Laoreet ac etiam
							pharetra faucibus integer purus
							duis elit at. Convallis semper
							quis aliquam dis leo
							pellentesque aliquet orci arcu.
							Maecenas lobortis proin commodo
							quis magna arcu senectus non
							tincidunt. A nisl netus
							pellentesque a consequat lacus
							et.
						</p>
						<p>
							Purus felis semper consequat
							lectus orci, sed. Quis elit ac
							sagittis ipsum purus mauris duis
							tincidunt in. At luctus volutpat
							nisl, dignissim egestas.
						</p>
					</AboutText>
					{/* <Image src={RazPortrait.src} alt="Owner Portrait" /> */}
					<img
						src={RazPortrait.src}
						alt="Owner Portrait"
					/>
				</AboutCard>
			</AboutSection>
		</AboutDiv>
	);
}

const AboutDiv = styled.div`
    background-color: ${colors.darkLavender};
    height: 100vh;
`;
    
const AboutSection = styled.div`
	width: 70%;
    margin: 6rem auto;
`;

const AboutCard = styled.div`
	background-color: ${colors.cyanBlue};
	display: flex;
	align-items: center;
	justify-content: space-between;
    position: relative;

    img{
        position: absolute;
        right: 4rem;
        max-width: 100%;
        max-height: 120%;
    }
`;

const AboutText = styled.div`
	text-align: center;
	width: 50%;
    margin: 2rem;
`;
