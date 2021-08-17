import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { menuData } from '../assets/MenuItems';

export default function Menu() {
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
	margin-top: 7rem;
`;

const MenuSection = styled.div`
	// border: 2px solid orange;
	margin-top: 4rem;
	text-align: center;
`;

const SectionTitle = styled.p`
	// border: 2px solid red;
	font-family: 'Great Vibes', cursive;
	font-size: 3rem;
	font-weight: bold;
    margin-top: 2rem;
`;

const MenuItems = styled.div`
	// border: 2px solid black;
	display: flex;
	flex-direction: row;
	margin: 0 4rem;
	flex-wrap: wrap;
	justify-content: center;
`;
