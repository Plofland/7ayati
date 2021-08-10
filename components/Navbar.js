import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';
import { colors } from '../themes';

export default function Navbar() {
	return (
		<>
			<StyledContainer>
				<StyledLogoBG />
			</StyledContainer>
			<StyledNav>
				<StyledDiv>
					<Link
						href="/menu"
						className=""
						passHref
					>
						<a>Menu</a>
					</Link>
				</StyledDiv>
				<StyledDiv>
					<Link
						href="/about"
						className=""
						passHref
					>
						<a>About</a>
					</Link>
				</StyledDiv>

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
				<StyledDiv>
					<Link href="/hours" className="">
						<a>Hours</a>
					</Link>
				</StyledDiv>
				<StyledDiv>
					<Link href="/contact" className="">
						<a>Contact</a>
					</Link>
				</StyledDiv>
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
	z-index: -1;
`;

const StyledLogoBG = styled.div`
	background-color: ${colors.grayChateau};
	background-color: black;
	border-radius: 50%;
	border: 1px solid black;
	width: 30%;
	height: 30%;
	position: relative;
`;

const StyledNav = styled.nav`
	background-color: ${colors.grayChateau};
	display: flex;
	justify-content: space-evenly;
	align-items: start;
	border: 1px solid white;
`;

const StyledDiv = styled.div`
	border: 1px solid orange;
	margin-top: 5vh;
`;

const StyledLogo = styled.div`
	border: 1px solid red;
	margin-bottom: -6%;
`;
