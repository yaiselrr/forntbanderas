import {defaultColors} from "../../../../config/themes/defaults/colors"


const secondary = {
    '50': '#edfbff',
    '100': '#d6f4ff',
    '200': '#b5edff',
    '300': '#83e4ff',
    '400': '#48d2ff',
    '500': '#1eb5ff',
    '600': '#0699ff',
    '700': '#0085ff',
    '800': '#0865c5',
    '900': '#0d579b',
    '950': '#0e355d',
}


const info = {
    100: "#adffff",
    200: "#91ffff",
    300: "#73faff",
    400: "#53e0ff",
    500: "#2cc7e7",
    600: "#00aece",
    700: "#0096b5",
    800: "#007e9d",
    900: "#006785"
}
const warning = {
    100: "#ffffa4",
    200: "#ffff8b",
    300: "#fff972",
    400: "#f6df5a",
    500: "#dbc640",
    600: "#c0ae25",
    700: "#a69600",
    800: "#8c7f00",
    900: "#736900"
}
const success = {
    50: "#d2f5d7",
    100: "#b1ffbc",
    200: "#95ffa2",
    300: "#79ff8a",
    400: "#5dee72",
    500: "#3cd45a",
    600: "#08ba43",
    700: "#00a12b",
    800: "#00890e",
    900: "#007100",
    950: "#023d02"
}

const bandera = {
    '50': '#eafaff',
    '100': '#d0f3ff',
    '200': '#abecff',
    '300': '#72e3ff',
    '400': '#30d0ff',
    '500': '#01aeff',
    '600': '#0087ff',
    '700': '#006dff',
    '800': '#005adc',
    '900': '#0051ac',
    '950': '#053d7f',
}


export const themeColors = {primary: bandera, secondary, ...defaultColors}
