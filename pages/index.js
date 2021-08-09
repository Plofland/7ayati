import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { colors } from '../themes';

export default function Home() {
	return (
		<HomeDiv>
			<Head>
				<title>7ayati</title>
				<meta
					name="description"
					content="Ohio Cafe and Hookah Lounge"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>
				<h1>7ayati</h1>
			</main>

			<footer></footer>
		</HomeDiv>
	);
}

const HomeDiv = styled.div`
	background-color: ${colors.darkLavender};
	height: 100vh;
`;
