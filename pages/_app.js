import React, {useState} from 'react';
import '../styles/index.css';
import Head from 'next/head';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Socialbar from '../components/Socialbar';
import Hamburger from '../components/Hamburger';
import MobileMenu from '../components/MobileMenu';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faEnvelope);

function MyApp({ Component, pageProps }) {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

	const [ visible, setVisible ] = useState(false);

	return (
		<StyledApp>
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{isMobile ? (
				<div>
					<Hamburger visible={visible} setVisible={setVisible}/>
					<MobileMenu visible={visible} setVisible={setVisible}/>
				</div>
			) : (
				<Navbar />
			)}
			{!isMobile && <Socialbar vertical={true} />}
			<Component {...pageProps} />
			<Footer />
		</StyledApp>
	);
}

export default MyApp;

const StyledApp = styled.div`
	font-family: 'Hammersmith One', sans-serif;
`;
