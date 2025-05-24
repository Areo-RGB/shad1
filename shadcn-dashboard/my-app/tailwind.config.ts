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
				// Base colors with direct HSL values
				base: {
					50: "hsl(276, 45.5%, 97.8%)",
					100: "hsl(276, 26.3%, 96.3%)",
					200: "hsl(274, 14.3%, 90.4%)",
					300: "hsl(278, 9.8%, 83.9%)",
					400: "hsl(277, 4.3%, 63.5%)",
					500: "hsl(273, 3.9%, 45.7%)",
					600: "hsl(270, 4.7%, 33.3%)",
					700: "hsl(274, 5.3%, 25.7%)",
					800: "hsl(276, 6.2%, 15.9%)",
					900: "hsl(270, 8%, 9.8%)",
					950: "hsl(270, 18.2%, 4.3%)",
					1000: "hsl(270, 25%, 1.6%)",
				},
				// Primary colors with direct HSL values
				primary: {
					DEFAULT: "hsl(212, 93.3%, 53.3%)", // --primary maps to --primary-500
					foreground: "hsl(0, 0%, 0%)", // --primary-foreground
					50: "hsl(212, 100%, 97.1%)",
					100: "hsl(212, 94.4%, 92.9%)",
					200: "hsl(211, 97%, 87.1%)",
					300: "hsl(209, 100%, 77.6%)",
					400: "hsl(210, 100%, 65.5%)",
					500: "hsl(212, 93.3%, 53.3%)",
					600: "hsl(214, 100%, 47.1%)",
					700: "hsl(217, 100%, 42.4%)",
					800: "hsl(220, 86.1%, 36.7%)",
					900: "hsl(220, 70.9%, 31%)",
					950: "hsl(222, 61.2%, 20.2%)",
					1000: "hsl(223, 54.5%, 12.9%)",
				},
				// Secondary colors with direct HSL values
				secondary: {
					DEFAULT: "hsl(220, 33.7%, 40.2%)", // --secondary maps to --secondary-700
					foreground: "hsl(0, 0%, 100%)", // --secondary-foreground
					50: "hsl(210, 33.3%, 96.5%)",
					100: "hsl(210, 28.6%, 91.8%)",
					200: "hsl(213, 30.6%, 85.9%)",
					300: "hsl(212, 33.3%, 77.1%)",
					400: "hsl(213, 33%, 65.5%)",
					500: "hsl(217, 31.2%, 56.7%)",
					600: "hsl(219, 29.8%, 48.6%)",
					700: "hsl(220, 33.7%, 40.2%)",
					800: "hsl(220, 31.4%, 34.3%)",
					900: "hsl(220, 26.9%, 28.4%)",
					950: "hsl(224, 23.9%, 18%)",
					1000: "hsl(225, 20.7%, 11.4%)",
				},
				// Sidebar specific colors with direct HSL values
				sidebar: "hsl(276, 6.2%, 15.9%)", // --sidebar maps to --base-800
				"sidebar-foreground": "hsl(274, 14.3%, 90.4%)", // --sidebar-foreground maps to --base-200
				"sidebar-primary": "hsl(212, 93.3%, 53.3%)", // --sidebar-primary maps to --primary-500
				"sidebar-primary-foreground": "hsl(0, 0%, 0%)", // --sidebar-primary-foreground
				"sidebar-accent": "hsl(276, 6.2%, 15.9%)", // --sidebar-accent maps to --base-800
				"sidebar-accent-foreground": "hsl(274, 14.3%, 90.4%)", // --sidebar-accent-foreground maps to --base-200
				"sidebar-border": "hsl(276, 6.2%, 15.9%)", // --sidebar-border maps to --base-800
				"sidebar-ring": "hsl(212, 93.3%, 53.3%)", // --sidebar-ring maps to --primary-500

				// Standard shadcn/ui semantic colors with direct HSL values
				border: "hsl(276, 6.2%, 15.9%)", // --border maps to --base-800
				input: "hsl(274, 5.3%, 25.7%)", // --input maps to --base-700
				ring: "hsl(212, 93.3%, 53.3%)", // --ring maps to --primary-500
				background: "hsl(270, 18.2%, 4.3%)", // --background maps to --base-950
				foreground: "hsl(274, 14.3%, 90.4%)", // --foreground maps to --base-200
				destructive: {
					DEFAULT: "hsl(0, 62.8%, 30.6%)", // --destructive
					foreground: "hsl(0, 0%, 98%)", // --destructive-foreground
				},
				muted: {
					DEFAULT: "hsl(276, 6.2%, 15.9%)", // --muted maps to --base-800
					foreground: "hsl(278, 9.8%, 83.9%)", // --muted-foreground maps to --base-300
				},
				accent: {
					DEFAULT: "hsl(276, 6.2%, 15.9%)", // --accent maps to --base-800
					foreground: "hsl(274, 14.3%, 90.4%)", // --accent-foreground maps to --base-200
				},
				popover: {
					DEFAULT: "hsl(270, 8%, 9.8%)", // --popover maps to --base-900
					foreground: "hsl(274, 14.3%, 90.4%)", // --popover-foreground maps to --base-200
				},
				card: {
					DEFAULT: "hsl(270, 8%, 9.8%)", // --card maps to --base-900
					foreground: "hsl(274, 14.3%, 90.4%)", // --card-foreground maps to --base-200
				},
				// Chart specific colors with direct HSL values
				chart: {
					1: "hsl(212, 93.3%, 53.3%)", // --chart-1 maps to --primary-500
					2: "hsl(220, 33.7%, 40.2%)", // --chart-2 maps to --secondary-700
					3: "hsl(209, 100%, 77.6%)", // --chart-3 maps to --primary-300
					4: "hsl(212, 33.3%, 77.1%)", // --chart-4 maps to --secondary-300
					5: "hsl(212, 94.4%, 92.9%)", // --chart-5 maps to --primary-100
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