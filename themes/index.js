import facepaint from 'facepaint'

const breakpoints = {
    mobile: "750px",
    desktop: "1024px",
}

const colors = {
	grayChateau: '#9EA9B3',
	darkLavender: '#0A1926',
	darkText: '#3A3A3A',
    lightText: '#F9F9F9',
    cyanBlue: '#173755',
};

export const mq = facepaint(
    Object.values(breakpoints).map((bp) => `@media (min-width: ${bp})`)
)

export const theme = {
    breakpoints,
    colors,
}