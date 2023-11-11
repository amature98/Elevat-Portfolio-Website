const PRIMARY = {
    main: '#004c6d', //deep blue
    dark: '#333333', //dark gray
    light: '#ffffff' //pure white
}

const SECONDARY = {
    main: '#4caf50', //grass green
    dark: '#ffc107', //warm yellow
    light: '#ff5722' //orange
}

// creating a color palette object that will be default export
const palette = {
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    background: {
        default: PRIMARY.light,
    },
    text: {
        primary: PRIMARY.dark,
        secondary: SECONDARY.light,
        light: PRIMARY.light
    },
    action: {
        active: SECONDARY.main,
        activeOpacity: 0.25,
        hover: PRIMARY.main,
        hoverOpacity: 0.25,
        selected: PRIMARY.main,
        selectedOpacity: 0.25
    }
}
export default palette