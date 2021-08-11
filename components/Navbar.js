import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';
import { colors } from '../themes';

export default function Navbar() {
	return (
		<>
			{/* <Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
					rel="stylesheet"
				/>
			</Head> */}
			<StyledLogoBG />
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
							<Image
								src={hayatiLogo}
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
	margin-bottom: -6%;
`;

const StyledLogoBG = styled.div`
	background-color: ${colors.grayChateau};
	border-radius: 50%;
	width: 25%;
	height: 26%;
	position: absolute;
	z-index: -1;
	margin: 0 36%;
`;

const StyledNav = styled.nav`
	background-color: ${colors.grayChateau};
	display: flex;
	justify-content: space-evenly;
	align-items: start;
`;

const StyledNavLink = styled.div`
	font-family: 'Great Vibes', cursive;
	color: ${colors.darkText};
	padding: 2rem;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
`;
