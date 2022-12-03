/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        // colors: {
        //     coke: '#FR0000',
        // },
        fontFamily: {
            sans: ['Proxima Nova', 'sans-serif'],
        },
        extend: {
            colors: {
                coke: '#0f0001',
                pepsi: '#000d1a'
            }
        },
    },
    plugins: [],
};
