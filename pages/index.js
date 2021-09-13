import Head from 'next/head';
import PopularItems from '../components/PopularItems';
import Welcome from '../components/Welcome';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Welcome />
				<PopularItems />
			</main>
		</>
	);
}
