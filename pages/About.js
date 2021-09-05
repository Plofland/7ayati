import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import RazPortrait from '../public/RazPortrait.JPG';
import { colors, mq } from '../themes';

export default function About() {
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
				<p>hello world</p>
			</main>
		</>
	);
}

