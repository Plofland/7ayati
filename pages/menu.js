import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { menuData } from '../MenuItems';
import { colors, breakpoints, mq } from '../themes';
import { useMediaQuery } from 'react-responsive';

export default function Menu() {
	const isMobile = useMediaQuery({
		maxWidth: breakpoints.mobile
	});

	return (
		<StyledMenu>
			<MenuSection>
				<SectionTitle>
					<span>Drinks</span>
				</SectionTitle>
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
				<SectionTitle>
					<span>Food</span>
				</SectionTitle>
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
				<SectionTitle>
					<span>Shisha</span>
				</SectionTitle>
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
	// border:1px solid white;
	font-weight: bold;
	margin: 0;
	
	span {
		// display: inline-block;
		position: relative;
	}
	
	span:before, span:after {
		content: "";
		position: absolute;
		height: 12px;
		top: 50%;
		// width: 600px;
		${mq({width: ['200px', '400px', '600px']})}
		border-radius: 2px;
	}
	span:before {
		 background: linear-gradient(
			to bottom left,
			${colors.lightText},
			${colors.darkLavender} 30%
		   );
		right: 100%;
		margin-right: 1rem;
	  }
	  span:after {
		background: linear-gradient(
			to bottom right,
			${colors.lightText},
			${colors.darkLavender} 30%
		  );
		left: 100%;
		margin-left: 1rem;
	  }

  }
`;

const MenuItems = styled.div`
	display: flex;
	flex-direction: row;
	${mq({ margin: ['0 1rem', '0 2rem', '0 4rem'] })};
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
