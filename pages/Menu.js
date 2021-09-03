import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { menuData } from '../MenuItems';
import { breakpoints, mq } from '../themes';
import { useMediaQuery } from 'react-responsive';

export default function Menu() {
	const isMobile = useMediaQuery({
		maxWidth: breakpoints.mobile
	});

	return (
		<StyledMenu>
			<MenuSection>
				<SectionTitle>Drinks</SectionTitle>
				<MenuItems>
					{menuData &&
						menuData.drinks.map((foodItem) => (
							<MenuCard
								key={foodItem.index}
								info={foodItem}
							/>
						))}
				</MenuItems>
			</MenuSection>
			<MenuSection>
				<SectionTitle>Food</SectionTitle>
				<MenuItems>
					{menuData &&
						menuData.food.map((foodItem) => (
							<MenuCard
								key={foodItem.index}
								info={foodItem}
							/>
						))}
				</MenuItems>
			</MenuSection>
			<MenuSection>
				<SectionTitle>Shisha</SectionTitle>
				<MenuItems>
					{menuData &&
						menuData.hookah.map((foodItem) => (
							<MenuCard
								key={foodItem.index}
								info={foodItem}
							/>
						))}
				</MenuItems>
			</MenuSection>
		</StyledMenu>
	);
}

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
`;

const MenuSection = styled.div`
	margin-top: 4rem;
	text-align: center;
`;

const SectionTitle = styled.p`
	font-family: 'Great Vibes', cursive;
	${mq({ fontSize: ['2rem', '2rem', '3rem'] })};
	font-weight: bold;
	margin: 0;
`;

const MenuItems = styled.div`
	display: flex;
	flex-direction: row;
	${mq({ margin: ['0 1rem', '0 2rem', '0 4rem'] })};
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
