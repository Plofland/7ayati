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
			<Head>
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
			</Head>
			<StyledContainer>
				<StyledLogoBG />
			</StyledContainer>
			<StyledNav>
				<StyledNavLink>
					<Link
						href="/menu"
						className=""
						passHref
					>
						<A>Menu</A>
					</Link>
				</StyledNavLink>
				<StyledNavLink>
					<Link
						href="/about"
						className=""
						passHref
					>
						<A>About</A>
					</Link>
				</StyledNavLink>

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
				<StyledNavLink>
					<Link href="/hours" className="">
						<A>Hours</A>
					</Link>
				</StyledNavLink>
				<StyledNavLink>
					<Link href="/contact" className="">
						<A>Contact</A>
					</Link>
				</StyledNavLink>
			</StyledNav>
		</>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	left: -1.5%;
`;

const StyledLogoBG = styled.div`
	background-color: ${colors.grayChateau};
	border-radius: 50%;
	width: 25%;
	height: 26%;
	position: relative;
`;

const StyledNav = styled.nav`
	background-color: ${colors.grayChateau};
	display: flex;
	justify-content: space-evenly;
	align-items: start;
`;

const StyledNavLink = styled.div`
	border: 1px solid orange;
	font-family: 'Great Vibes', cursive;
	cursor: pointer;
	padding: 2rem;
`;

const A = styled.a`
	font-weight: bold;
	font-size: 2rem;
	&:hover {
		color: red;
	}
`;

const StyledLogo = styled.div`
	margin-bottom: -6%;
`;
