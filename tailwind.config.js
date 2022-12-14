/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-themer')({
            defaultTheme: {
                // put the default values of any config you want themed
                // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
                extend: {
                    // colors is used here for demonstration purposes
                    colors: {
                        gray: {
                            50: '#FAFCFC',
                            100: '#E4E8EE',
                            200: '#C1C9D0',
                            300: '#A2ABB7',
                            400: '#8892A2',
                            500: '#6B7385',
                            600: '#505669',
                            700: '#3C4055',
                            800: '#2B2E44',
                            900: '#2B2E44',
                        },
                        blue: {
                            50: '#F5FCFF',
                            100: '#D9EDFF',
                            200: '#ACCFFC',
                            300: '#85ACF4',
                            400: '#758CEC',
                            500: '#5C66D2',
                            600: '#414AA6',
                            700: '#313B84',
                            800: '#262C62',
                            900: '#152041',
                        },
                        teal: {
                            50: '#EEFDFE',
                            100: '#CFF3FB',
                            200: '#8ED8E9',
                            300: '#62BDE4',
                            400: '#4D9DCE',
                            500: '#277FB5',
                            600: '#1C5B92',
                            700: '#154876',
                            800: '#0F3451',
                            900: '#082530',
                        },
                        emerald: {
                            50: '#F2FEEE',
                            100: '#CFF7C9',
                            200: '#91E396',
                            300: '#52D080',
                            400: '#3EB574',
                            500: '#288D60',
                            600: '#216B44',
                            700: '#18533A',
                            800: '#113B34',
                            900: '#0A2627',
                        },
                        orange: {
                            50: '#FBF9EA',
                            100: '#F6E4BA',
                            200: '#E7C07B',
                            300: '#DC9742',
                            400: '#CB7519',
                            500: '#AD5102',
                            600: '#893301',
                            700: '#6C2706',
                            800: '#501A0F',
                            900: '#361206',
                        },
                        chestnut: {
                            50: '#FEFAEE',
                            100: '#FCE2C0',
                            200: '#EFB586',
                            300: '#E78B5F',
                            400: '#D7664B',
                            500: '#B34434',
                            600: '#912728',
                            700: '#731620',
                            800: '#550F1C',
                            900: '#3B0B14',
                        },
                        cerise: {
                            50: '#FEF7F4',
                            100: '#FBE0DD',
                            200: '#F2AFB3',
                            300: '#EC798B',
                            400: '#DC5472',
                            500: '#BC3263',
                            600: '#98184D',
                            700: '#73123F',
                            800: '#560E39',
                            900: '#3B0427',
                        },
                        purple: {
                            50: '#FEF7FF',
                            100: '#F8DDF4',
                            200: '#E8ADE1',
                            300: '#D882D9',
                            400: '#BF62CF',
                            500: '#9B47B2',
                            600: '#743095',
                            700: '#57237E',
                            800: '#3D1867',
                            900: '#2A0D53',
                        },
                        indigo: {
                            50: '#F8F9FE',
                            100: '#E7E5FC',
                            200: '#C6C0E9',
                            300: '#AE9DDE',
                            400: '#9B7AD8',
                            500: '#7F58BE',
                            600: '#5F4199',
                            700: '#4A2D7F',
                            800: '#362164',
                            900: '#20144C',
                        },
                    },
                },
            },
            themes: [
                {
                    name: 'theme2',
                    extend: {
                        fontFamily: {
                            medium: 'Times New Roman',
                        },
                        colors: {
                            gray: {
                                50: '#F7E3FC',
                                100: '#EEC3F9',
                                200: '#DE8CF3',
                                300: '#CD50ED',
                                400: '#BD18E7',
                                500: '#8C12AB',
                                600: '#720F8A',
                                700: '#530B66',
                                800: '#390745',
                                900: '#1B0320',
                            },
                            blue: {
                                50: '#E8FEE7',
                                100: '#D1FCCF',
                                200: '#A3F99F',
                                300: '#75F76E',
                                400: '#47F43E',
                                500: '#1CF110',
                                600: '#14C10B',
                                700: '#0F9108',
                                800: '#0A6006',
                                900: '#053003',
                            },
                            teal: {
                                50: '#EEFDFE',
                                100: '#CFF3FB',
                                200: '#8ED8E9',
                                300: '#62BDE4',
                                400: '#4D9DCE',
                                500: '#277FB5',
                                600: '#1C5B92',
                                700: '#154876',
                                800: '#0F3451',
                                900: '#082530',
                            },
                            indigo: {
                                50: '#FEF6E7',
                                100: '#FCECCF',
                                200: '#FADA9E',
                                300: '#F7C76E',
                                400: '#F5B642',
                                500: '#F2A511',
                                600: '#C6850B',
                                700: '#916108',
                                800: '#614105',
                                900: '#302003',
                            },
                        },
                    },
                },
                {
                    name: 'theme3',
                    extend: {
                        fontFamily: {
                            medium: 'Helvetica',
                        },
                        colors: {
                            gray: {
                                50: '#FEE7E7',
                                100: '#FCCFCF',
                                200: '#FA9E9E',
                                300: '#F76E6E',
                                400: '#F54242',
                                500: '#F21111',
                                600: '#C60B0B',
                                700: '#910808',
                                800: '#610505',
                                900: '#300303',
                            },
                            blue: {
                                50: '#FEE5FF',
                                100: '#FCCCFF',
                                200: '#FA9EFF',
                                300: '#F86BFF',
                                400: '#F538FF',
                                500: '#F208FF',
                                600: '#C700D1',
                                700: '#96009E',
                                800: '#66006B',
                                900: '#300033',
                            },
                            indigo: {
                                50: '#EDFFE5',
                                100: '#DAFFCC',
                                200: '#BAFF9E',
                                300: '#95FF6B',
                                400: '#70FF38',
                                500: '#50FF08',
                                600: '#3BD100',
                                700: '#2D9E00',
                                800: '#1E6B00',
                                900: '#0E3300',
                            },
                        },
                    },
                },
            ],
        }),
        require('@tailwindcss/forms'),
        require('flowbite/plugin'),
    ],
};
