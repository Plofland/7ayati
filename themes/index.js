import facepaint from 'facepaint'

export const breakpoints = {
    mobile: "750px",
    desktop: "1024px",
}

export const colors = {
	grayChateau: '#9EA9B3',
	darkLavender: '#0A1926',
	darkText: '#222222',
    lightText: '#F9F9F9',
    cyanBlue: '#173755',
};

export const mq = facepaint(
    Object.values(breakpoints).map((bp) => `@media (min-width: ${bp})`)
)

// export const theme = {
//     breakpoints,
//     colors,
// }