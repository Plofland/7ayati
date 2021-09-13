import { useState, useRef } from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from '../utils/hook';
import { GlobalStyles } from '../themes';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Socialbar from '../components/Socialbar';
import Hamburger from '../components/Hamburger';
import MobileMenu from '../components/MobileMenu';
import MobileLogo from '../components/MobileLogo';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faEnvelope);

function App({ Component, pageProps }) {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

	const [visible, setVisible] = useState(false);

	const node = useRef();
	useOnClickOutside(node, () => setVisible(false));

	return (
		<>
			<Head>
				<title>7ayati</title>
				<meta
					name="description"
					content="Ohio Cafe and Hookah Lounge"
				/>
				{/* <link
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
				/> */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<GlobalStyles />
			{isMobile ? (
				<div ref={node}>
					<Hamburger
						visible={visible}
						setVisible={setVisible}
					/>
					<MobileMenu
						visible={visible}
						setVisible={setVisible}
					/>
				</div>
			) : (
				<Navbar />
			)}

			{isMobile && <MobileLogo />}
			{!isMobile && <Socialbar vertical={true} />}
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default App;
