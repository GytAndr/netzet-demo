import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            'black-olive': '#3C3C3B',
            orange: '#FBBA00',
            'islamic-green': '#03C100',
            limegreen: '#05B133',
            'dark-charcoal': '#2F2F2F',
            'grayish-orange': '#FEFBF9',
            'pale-orange': '#FFF8EA',
            mediumturquoise: '#68C7CD',
            lightseagreen: '#0EA8B3',
            tomato: '#EA4335',
            floralwhite: '#FFFCF5',
            coral: '#F5773D',
            darkslategrey: '#2F2F2F',
            gray: '#8D8D8D',
            darkgray: '#A6A6A6',
        },
        extend: {
            screens: {
                xs: '375px',
            },
        },
    },
    plugins: [],
};
export default config;
