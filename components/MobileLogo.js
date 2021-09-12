import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Fayati logo no bg 200px white text.png';
import styled from 'styled-components';

export default function MobileLogo() {
	return (
		<StyledContainer>
			<Link href="/" passHref>
				<Wrapper>
					<Image
						src={logo}
						alt="7ayati company logo"
						layout="fill"
					/>
				</Wrapper>
			</Link>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	height: 6rem;
	display: flex;
	justify-content: flex-end;
`;

const Wrapper = styled.div`
	right: 2rem;
    top: 1.5rem;
	height: 4rem;
	aspect-ratio: 1/1;
	position: relative;
`;
