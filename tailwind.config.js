/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#1E3A8A',
                'light-gray': '#F3F4F6',
                'dark-gray': '#374151',
                'cyan-light': '#22D3EE',
                'emerald-green': '#10B981',
                'red-error': '#EF4444',
                'orange-accent': '#F97316',
                'yellow-accent': '#FBBF24',
            },
        },
    },
    plugins: [],
}

