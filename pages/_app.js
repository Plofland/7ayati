import '../styles/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Socialbar from '../components/Socialbar';

library.add(fab, faEnvelope);

function MyApp({ Component, pageProps }) {
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
			<Navbar />
			<Socialbar vertical={true} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
