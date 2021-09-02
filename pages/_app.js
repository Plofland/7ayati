import '../styles/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Socialbar from '../components/Socialbar';
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../components/Hamburger';
import MobileMenu from '../components/MobileMenu';


library.add(fab, fas, far, faEnvelope);

function MyApp({ Component, pageProps }) {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

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
			{isMobile ? <Hamburger /> : <Navbar />}
			{/* {isMobile ? <MobileMenu/> : <Navbar />} */}
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
