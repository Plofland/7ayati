import Head from 'next/head';
import PopularItems from '../components/PopularItems';
import Welcome from '../components/Welcome';

export default function Home() {
	return (
		<>
			<Head>
				<title>7ayati</title>
				<meta
					name="description"
					content="Ohio Cafe and Hookah Lounge"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Welcome />
				<PopularItems />
			</main>
		</>
	);
}
