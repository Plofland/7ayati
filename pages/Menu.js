import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { menuData } from '../assets/MenuItems';

export default function Menu() {
	return (
		<StyledMenu>
			<MenuSection>
				{menuData &&
					menuData.drinks.map((foodItem) => (
						<MenuCard
							key={foodItem.index}
							info={foodItem}
						/>
					))}
			</MenuSection>
			<MenuSection>
				{menuData &&
					menuData.food.map((foodItem) => (
						<MenuCard
							key={foodItem.index}
							info={foodItem}
						/>
					))}
			</MenuSection>
			<MenuSection>
				{menuData &&
					menuData.hookah.map((foodItem) => (
						<MenuCard
							key={foodItem.index}
							info={foodItem}
						/>
					))}
			</MenuSection>
		</StyledMenu>
	);
}

const StyledMenu = styled.div`
    display: flex;
`;

const MenuSection = styled.div`
	margin: 8rem;
    border: 2px solid black;
`;



// use aspect ratio to make squares for the menu cards
// .square {
//     background: #2ecc71;
//     width: 25rem;
//     aspect-ratio: 1/1;
//   }

// declaring a CSS variable
//     :root {
//     --text-color: hsl(145, 63%, 49%);
//     }

//     p {
//     color: var(--text-color);
//     }
