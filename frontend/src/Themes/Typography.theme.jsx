// function to make the font size responsive
const responsiveFontSize = (value) => {
    return `${value}vw`
}
const responsiveFontSizes = ({ sm, md, lg }) => {
    return {
        '@media (min-width:600px)': {
            fontSize: responsiveFontSize(sm)
        },
        '@media (min-width:900px)': {
            fontSize: responsiveFontSize(md)
        },
        '@media (min-width:1200px)': {
            fontSize: responsiveFontSize(lg)
        },
    }
}

//Font families
const TERTIARY_FONT = 'Playfair Display, serif' //For headings
const SECONDARY_FONT = 'Montserrat, sans-serif' //For subheadings and highlights
const PRIMARY_FONT = 'Source Sans 3, sans-serif' //For Body text

//Font Weights
const fontWeightThin = 200
const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightBold = 500

const typography = {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightRegular,
    h1: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    h2: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    h3: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    h4: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    h5: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    h6: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    body1: {
        fontFamily: SECONDARY_FONT,
        fontWeight: fontWeightLight,
        lineHeight: 1.5,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontSize: responsiveFontSize(3.5),
        ...responsiveFontSizes({sm: 2, md: 1.5, lg: 1.15})
    },
    body2: {
        fontFamily: TERTIARY_FONT,
        fontWeight: fontWeightBold,
        lineHeight: 1.0,
        textTransform: 'capitalize',
        letterSpacing: 1
    },
    button: {
        fontFamily: SECONDARY_FONT,
        fontWeight: fontWeightThin,
        fontSize: responsiveFontSize(2),
        textTransform: 'uppercase',
        ...responsiveFontSizes({sm: 2.0, md: 1.75, lg: 1.4})
    },
}
export default typography