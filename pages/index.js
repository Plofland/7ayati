import Head from 'next/head';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
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
			<main>
				<Welcome />
			</main>
		</HomeDiv>
	);
}

const HomeDiv = styled.div`
	background-color: ${colors.darkLavender};
	height: 100vh;
`;
