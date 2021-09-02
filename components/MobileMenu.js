import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { colors } from '../themes';

export default function MobileMenu() {
	const [visible, setVisible] = useState(false);

	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

	useEffect(() => {
		isMobile ? setVisible(true) : setVisible(false);
	}, []);

	console.log(visible);
	return (
		<>
			<StyledMenu>
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
			</StyledMenu>
		</>
	);
}

const StyledMenu = styled.div`
	background-color: ${colors.grayChateau};
	width: 80%;
`;
const StyledNavLink = styled.div``;
