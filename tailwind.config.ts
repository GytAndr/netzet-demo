import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            'black-olive': '#3C3C3B',
            orange: '#FBBA00',
            'islamic-green': '#03C100',
            'dark-charcoal': '#2F2F2F',
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
