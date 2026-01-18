/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/lib/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--color-bg)",
                "bg-soft": "var(--color-bg-soft)",
                accent: "var(--color-accent)",
                "text-primary": "var(--color-text-primary)",
                "text-secondary": "var(--color-text-secondary)"
            },
            boxShadow: {
                soft: "var(--shadow-soft)"
            }
        }
    },
    plugins: []
};
