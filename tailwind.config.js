const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: {
        // in prod look at shadow-cljs output file in dev look at runtime, which will change files that are actually compiled; postcss watch should be a whole lot faster
        content: process.env.NODE_ENV == 'production' ? ["./src/resources/**/*.html", "./src/resources/public/js/main.js"] : ["./src/resources/**/*.html", "./src/**/*.{clj,cljs}", "./src/resources/public/js/cljs-runtime/*.js"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                sky: colors.sky,
                teal: colors.teal,
                slate: colors.blueGray,
                cyan: colors.cyan,
                rose: colors.rose,
                emerald: colors.emerald,
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
        }
    },
    corePlugins: {
        outline: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        plugin(({ addVariant, e }) => {
            addVariant('label-checked', ({ modifySelectors, separator }) => {
                modifySelectors(
                    ({ className }) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        })
    ],
}