import styled from 'styled-components';
import { popularData } from '../MenuItems';
import MenuCard from './MenuCard';
import { colors, mq } from '../themes/index';

export default function PopularItems() {
	return (
		<MenuSection>
			<SectionTitle>
				<span>Popular</span>
			</SectionTitle>
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
	margin: 2rem 0;
	text-align: center;
`;

const SectionTitle = styled.p`
	font-family: 'Great Vibes', cursive;
	${mq({ fontSize: ['2rem', '3rem'] })};
	font-weight: bold;

	span {
		position: relative;
	}

	span:before,
	span:after {
		content: '';
		position: absolute;
		height: 12px;
		top: 50%;
		${mq({ width: ['25vw', '400px', '600px'] })}
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
`;

const MenuItems = styled.div`
	display: flex;
	${mq({ margin: ['0 1rem', '0 4rem'] })};
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
