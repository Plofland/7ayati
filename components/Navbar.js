import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';
import { colors } from '../themes';

export default function Navbar() {
	return (
		<>
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
					{/* <StyledBackground>
						<svg
							id="triangle"
							viewBox="0 0 100 100"
						>
							<polygon
								fill={colors.grayChateau}
								points="50 15, 100 100, 0 100,"
							/>
						</svg>
					</StyledBackground> */}
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

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	margin-top: 0.25rem;
	width: 100vw;
`;

const StyledLogo = styled.div`
	img {
		height: 120px;
	}
`;

// const StyledBackground = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	overflow: hidden;
// 	// line-height: 0;
// 	z-index: -1;
// 	transform: rotate(180deg);
// 	// display: flex;
// 	// justify-content: center;

// 	svg {
// 		// position: relative;
// 		// display: block;
// 		// width: calc(100% + 1.3px);
// 		// width: 10%;
// 		height: 220px;
// 		// margin: 0 auto;
// 		// margin-left: 43vw;
// 		// margin-right: 51%;
// 	}
// `;

const StyledNavLink = styled.div`
	font-family: 'Great Vibes', cursive;
	color: ${colors.lightText};
	padding: 1rem;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		transform: translate(0, 1rem);
	}
`;
