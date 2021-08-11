import '../styles/index.css';
import Navbar from '../components/Navbar';
import Head from 'next/head'

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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
