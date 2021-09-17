import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import hayatiLogo from '../public/images/FayatiLogoNoBG200pxWhiteText.png';
import { colors, mq } from '../themes';

export default function Navbar() {
	return (
		<>
			<StyledNav>
				<Link href="/menu" passHref>
					<StyledNavLink>Menu</StyledNavLink>
				</Link>
				<Link href="/about" passHref>
					<StyledNavLink>About</StyledNavLink>
				</Link>
				<StyledLogo>
					<Link href="/">
						<a>
							<Image
								src={hayatiLogo}
								alt="7ayati company logo"
								height="120px"
								width="120px"
							/>
						</a>
					</Link>
				</StyledLogo>

				<Link href="/hours" passHref>
					<StyledNavLink>Hours</StyledNavLink>
				</Link>
				<Link href="/contact" passHref>
					<StyledNavLink>Contact</StyledNavLink>
				</Link>
				
			</StyledNav>
		</>
	);
}

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	${mq({ marginTop: ['0', '1rem', '0'] })};

`;

const StyledLogo = styled.div`
	img {
		height: 120px;
	}
`;


const StyledNavLink = styled.a`
	font-family: 'Great Vibes', 'Hammersmith', -apple-system;
	color: ${colors.lightText};
	padding: 1rem;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transform: translate(0, 1rem);
	}
`;
