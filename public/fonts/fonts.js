import { createGlobalStyle } from 'styled-components';
import greatVibes from './GreatVibes-Regular-webfont.woff'
import hammersmith from './HammersmithOne-Regular.woff'

export const GlobalFonts = createGlobalStyle`

	@font-face {
		font-family: 'Great Vibes';
		src: local('Great Vibes Regular'),
			url(${greatVibes});
		font-style: normal;
		font-weight: normal;
	}
	@font-face {
		font-family: 'Hammersmith One';
		src: local('Hammersmith One Regular'),
			url(${hammersmith}) format('woff');
		font-style: normal;
		font-weight: normal;
	}
	@font-face {
		font-family: 'Nymphette';
		src: local ('Nymphette'),
			url('./Nymphette-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}
`;
