/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'demo1',
        'hidden',
        { pattern: /^apexcharts-.*$/ },
        { pattern: /^leaflet-.*$/ }
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif'],
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
                'sans': ['Inter', 'sans-serif']
            },
            colors: {
                'brand-orange': '#FC5E14',
                'brand-gray-800': '#EDEDED',
                'brand-gray-900': '#8C8C8C',
                'brand-dark': '#121212',

                gray: {
                    100: '#F8F9FA',
                    200: '#E9ECEF',
                    300: '#DBDFE9',
                    400: '#CED4DA',
                    500: '#ADB5BD',
                    600: '#6C757D',
                    700: '#AFAFAF',
                    800: '#EDEDED',
                    900: '#8C8C8C'
                },
                primary: {
                    DEFAULT: '#0554F2',
                    50: '#E6EEFE',
                    100: '#E6EEFE',
                    200: '#B3D1FC',
                    300: '#80B4FA',
                    400: '#4D97F8',
                    500: '#0554F2',
                    600: '#0447C2',
                    700: '#033A92',
                    800: '#032059',
                    900: '#021341'
                },
                success: {
                    DEFAULT: '#15803D',
                    50: '#E8F2EC',
                    100: '#C6E6D0',
                    200: '#9DD9B3',
                    300: '#74CC96',
                    400: '#4BBF79',
                    500: '#15803D',
                    600: '#117031',
                    700: '#0D6025',
                    800: '#095019',
                    900: '#05400D'
                },
                info: {
                    DEFAULT: '#39a0ea',
                    50: '#def0fd',
                    100: '#B8E0F9',
                    200: '#91D0F5',
                    300: '#6BC0F1',
                    400: '#44B0ED',
                    500: '#39a0ea',
                    600: '#2E80BB',
                    700: '#23608C',
                    800: '#18405D',
                    900: '#0D202E'
                },
                danger: {
                    DEFAULT: '#B63936',
                    50: '#FCF0EF',
                    100: '#F6D4D3',
                    200: '#EFABAA',
                    300: '#E88281',
                    400: '#E15958',
                    500: '#B63936',
                    600: '#922E2B',
                    700: '#6E2220',
                    800: '#4A1715',
                    900: '#260B0A'
                },
                warning: {
                    DEFAULT: '#FFC300',
                    50: '#FFF8DD',
                    100: '#FFECB3',
                    200: '#FFE082',
                    300: '#FFD54F',
                    400: '#FFCA28',
                    500: '#FFC300',
                    600: '#FFB300',
                    700: '#FF8F00',
                    800: '#FF6F00',
                    900: '#E65100'
                },
                dark: {
                    DEFAULT: '#333333',
                    50: '#F9F9F9',
                    100: '#E8E8E8',
                    200: '#D6D6D6',
                    300: '#C4C4C4',
                    400: '#B2B2B2',
                    500: '#333333',
                    600: '#292929',
                    700: '#1F1F1F',
                    800: '#141414',
                    900: '#0A0A0A'
                },
                coal: {
                    100: '#15171C',
                    200: '#13141A',
                    300: '#111217',
                    400: '#0F1014',
                    500: '#0D0E12',
                    600: '#0B0C10',
                    black: '#000000',
                    clarity: 'rgba(24, 25, 31, 0.50)'
                }
            },
            boxShadow: {
                'card': '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
                'default': '0px 4px 12px 0px rgba(0, 0, 0, 0.09)',
                'light': '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
                'primary': '0px 4px 12px 0px #0554F2',
                'success': '0px 4px 12px 0px rgba(53, 189, 100, 0.35)',
                'danger': '0px 4px 12px 0px rgba(241, 65, 108, 0.35)',
                'info': '0px 4px 12px 0px rgba(114, 57, 234, 0.35)',
                'warning': '0px 4px 12px 0px rgba(246, 192, 0, 0.35)',
                'dark': '0px 4px 12px 0px rgba(37, 47, 74, 0.35)'
            },
            fontSize: {
                '4xs': ['0.5625rem', { lineHeight: '0.6875rem' }],
                '3xs': ['0.625rem', { lineHeight: '0.75rem' }],
                '2xs': ['0.6875rem', { lineHeight: '0.75rem' }],
                '2sm': ['0.8125rem', { lineHeight: '1.125rem' }],
                'md': ['0.9375rem', { lineHeight: '1.375rem' }],
                '1.5xl': ['1.375rem', { lineHeight: '1.8125rem' }],
                '2.5xl': ['1.625rem', { lineHeight: '2.125rem' }]
            },
            lineHeight: {
                0: '0',
                5.5: '1.375rem'
            },
            zIndex: {
                1: '1',
                5: '5',
                15: '15',
                25: '25'
            },
            borderWidth: {
                3: '3px'
            },
            spacing: {
                0.75: '0.1875rem',
                1.25: '0.3rem',
                1.75: '0.4375rem',
                2.25: '0.563rem',
                2.75: '0.688rem',
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                12.5: '3.125rem'
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            }
        },
    },
    plugins: []
}
