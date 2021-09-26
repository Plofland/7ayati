import { useState, useRef } from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from '../utils/hook';
import { GlobalStyles } from '../themes/index';
import { GlobalFonts } from '../public/fonts/fonts';

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
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<GlobalFonts />
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
					<MobileLogo />
				</div>
			) : (
				<div>
					<Navbar />
					<Socialbar vertical={true} />
				</div>
			)}
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default App;
