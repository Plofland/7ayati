import React from 'react';
import styled from 'styled-components';
import {popularData} from '../MenuItems'
import MenuCard from './MenuCard';
import { mq } from '../themes/index';


export default function PopularItems() {
	return (
		<MenuSection>
			<SectionTitle>Popular</SectionTitle>
			<MenuItems>
				{popularData &&
					popularData.map((item) => (
						<MenuCard
							key={item.index}
							info={item}
						/>
					))}
			</MenuItems>
		</MenuSection>
	);
}

const MenuSection = styled.div`
	border: 2px solid orange;
	margin: 4rem 0;
	text-align: center;
`;

const SectionTitle = styled.p`
	border: 2px solid red;
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
`;

const MenuItems = styled.div`
	border: 2px solid black;
	display: flex;
	${mq({ margin: ['0', '0 4rem'] })};

	flex-wrap: wrap;
	justify-content: center;
`;
