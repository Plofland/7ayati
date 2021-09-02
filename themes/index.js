import facepaint from 'facepaint';
import { createGlobalStyle } from 'styled-components';

// export const theme = {
// 	grayChateau: '#9EA9B3',
// 	darkLavender: '#0A1926',
// 	lightLavender: '#EBDBEB',
// 	darkText: '#222222',
// 	lightText: '#F9F9F9',
// 	cyanBlue: '#173755',
// 	cyanBlueTrans: 'rgba(23, 55, 85, 0.7)'
//   }

export const breakpoints = {
	mobile: '480px',
	tablet: '768px',
	desktop: '1024px'
};

export const mq = facepaint(
	Object.values(breakpoints).map(
		(bp) => `@media (min-width: ${bp})`
	)
);

export const colors = {
	grayChateau: '#9EA9B3',
	darkLavender: '#0A1926',
	lightLavender: '#EBDBEB',
	darkText: '#222222',
	lightText: '#F9F9F9',
	cyanBlue: '#173755',
	cyanBlueTrans: 'rgba(23, 55, 85, 0.7)'
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
	display: flex;
	background: ${colors.darkLavender};
	color: ${colors.lightText};
	font-family: 'Hammersmith One', sans-serif;
	height: 100vh;
	// align-items: center;
    // justify-content: center;
    text-rendering: optimizeLegibility;
  }
`;
