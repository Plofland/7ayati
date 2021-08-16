import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';

export default function Menu() {
	return (
		<StyledMenuSection>
			<MenuCard />
		</StyledMenuSection>
	);
}

const StyledMenuSection = styled.div`
	margin: 8rem;
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
