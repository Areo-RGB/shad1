// shadcn-dashboard/my-app/tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: "class", // or 'media' or 'class', ensure this matches your ThemeProvider
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				display: ["var(--font-poppins)", ...fontFamily.sans],
				text: ["var(--font-lexend)", ...fontFamily.sans],
			},
			colors: {
				// Base colors from your globals.css
				base: {
					50: "hsl(var(--base-50))",
					100: "hsl(var(--base-100))",
					200: "hsl(var(--base-200))",
					300: "hsl(var(--base-300))",
					400: "hsl(var(--base-400))",
					500: "hsl(var(--base-500))",
					600: "hsl(var(--base-600))",
					700: "hsl(var(--base-700))",
					800: "hsl(var(--base-800))",
					900: "hsl(var(--base-900))",
					950: "hsl(var(--base-950))",
					1000: "hsl(var(--base-1000))",
				},
				// Primary colors from your globals.css
				primary: {
					DEFAULT: "hsl(var(--primary))", // Mapped to primary-500 usually
					foreground: "hsl(var(--primary-foreground))",
					50: "hsl(var(--primary-50))",
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					400: "hsl(var(--primary-400))",
					500: "hsl(var(--primary-500))",
					600: "hsl(var(--primary-600))",
					700: "hsl(var(--primary-700))",
					800: "hsl(var(--primary-800))",
					900: "hsl(var(--primary-900))",
					950: "hsl(var(--primary-950))",
					1000: "hsl(var(--primary-1000))",
				},
				// Secondary colors from your globals.css
				secondary: {
					DEFAULT: "hsl(var(--secondary))", // Mapped to secondary-700 usually
					foreground: "hsl(var(--secondary-foreground))",
					50: "hsl(var(--secondary-50))",
					100: "hsl(var(--secondary-100))",
					200: "hsl(var(--secondary-200))",
					300: "hsl(var(--secondary-300))",
					400: "hsl(var(--secondary-400))",
					500: "hsl(var(--secondary-500))",
					600: "hsl(var(--secondary-600))",
					700: "hsl(var(--secondary-700))",
					800: "hsl(var(--secondary-800))",
					900: "hsl(var(--secondary-900))",
					950: "hsl(var(--secondary-950))",
					1000: "hsl(var(--secondary-1000))",
				},
				// Sidebar specific colors
				sidebar: "hsl(var(--sidebar))",
				"sidebar-foreground": "hsl(var(--sidebar-foreground))",
				"sidebar-primary": "hsl(var(--sidebar-primary))",
				"sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
				"sidebar-accent": "hsl(var(--sidebar-accent))",
				"sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
				"sidebar-border": "hsl(var(--sidebar-border))",
				"sidebar-ring": "hsl(var(--sidebar-ring))",

				// Standard shadcn/ui semantic colors
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// Chart specific colors (if you plan to use them with Tailwind classes directly)
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;