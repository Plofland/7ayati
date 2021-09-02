import Head from 'next/head';
import styled from 'styled-components';
import PopularItems from '../components/PopularItems';
import Welcome from '../components/Welcome';
import { colors } from '../themes';

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

// const HomeDiv = styled.div`
// 	background-color: ${colors.darkLavender};
// `;
