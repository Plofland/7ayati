import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';
import { colors } from '../themes';

export default function Navbar() {
	return (
		<>
			<StyledBackground>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
						class="shape-fill"
					></path>
				</svg>
			</StyledBackground>
			<StyledNav>
				<Link href="/menu" className="" passHref>
					<StyledNavLink>
						<p>Menu</p>
					</StyledNavLink>
				</Link>
				<Link href="/about" className="" passHref>
					<StyledNavLink>
						<p>About</p>
					</StyledNavLink>
				</Link>
				<StyledLogo>
					<Link href="/" className="">
						<a>
							<img
								src={hayatiLogo.src}
								alt="7ayati company logo"
							/>
						</a>
					</Link>
				</StyledLogo>
				<Link href="/hours" className="" passHref>
					<StyledNavLink>
						<p>Hours</p>
					</StyledNavLink>
				</Link>
				<Link href="/contact" className="" passHref>
					<StyledNavLink>
						<p>Contact</p>
					</StyledNavLink>
				</Link>
			</StyledNav>
		</>
	);
}

const StyledLogo = styled.div`
	margin-bottom: -7%;
	img {
		height: 120px;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
`;

const StyledBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	z-index: -1;

	svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 140px;
	}
	.shape-fill {
		fill: ${colors.grayChateau};
	}
`;

const StyledNavLink = styled.div`
	font-family: 'Great Vibes', cursive;
	color: ${colors.darkText};
	padding: 1rem;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
`;
