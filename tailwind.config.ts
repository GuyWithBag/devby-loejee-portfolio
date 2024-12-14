import type { Config } from "tailwindcss";
// tailwind.config.js


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    
    extend: {
      keyframes: {
        rotateY: {
          '100%': { transform: 'rotateX(0deg)' },
          '0%': { transform: 'rotateX(360deg)' },
        },
        
      },
      animation: {
        rotateY: 'rotateY 2s linear infinite', // Duration: 2s, infinite loop
      },
      colors: {
        // Pip-Boy Style Colors
        pipboyBackground: '#0f0e17',
        pipboyGreen: '#00ff41',
        pipboyDarkGreen: '#007f1f',
        pipboyYellow: '#fff700',
        pipboyGray: '#6c757d',
      },
      fontFamily: {
        pipboy: ['"VT323"', 'monospace'],
      },
      fontSize: {
        // Text theme sizes like in Flutter
        headlineLarge: ['2.5rem', { lineHeight: '3rem' }], // Large headlines
        headlineMedium: ['2rem', { lineHeight: '2.5rem' }], // Medium headlines
        headlineSmall: ['1.75rem', { lineHeight: '2.25rem' }], // Small headlines
        titleLarge: ['1.5rem', { lineHeight: '2rem' }], // Large titles
        titleMedium: ['1.25rem', { lineHeight: '1.75rem' }], // Medium titles
        titleSmall: ['1rem', { lineHeight: '1.5rem' }], // Small titles
        bodyLarge: ['1rem', { lineHeight: '1.5rem' }], // Large body text
        bodyMedium: ['0.875rem', { lineHeight: '1.25rem' }], // Medium body text
        bodySmall: ['0.75rem', { lineHeight: '1rem' }], // Small body text
        labelLarge: ['0.875rem', { lineHeight: '1.25rem' }], // Large labels
        labelMedium: ['0.75rem', { lineHeight: '1rem' }], // Medium labels
        labelSmall: ['0.625rem', { lineHeight: '0.875rem' }], // Small labels
      },
    },
  },
  //     typography: (theme: any) => ({
  //       DEFAULT: {
  //         css: {
  //           color: theme('colors.pipboyGreen'),
  //           fontFamily: theme('fontFamily.pipboy'),
  //           h1: { fontSize: theme('fontSize.headlineLarge')[0] },
  //           h2: { fontSize: theme('fontSize.headlineMedium')[0] },
  //           h3: { fontSize: theme('fontSize.headlineSmall')[0] },
  //           h4: { fontSize: theme('fontSize.titleLarge')[0] },
  //           h5: { fontSize: theme('fontSize.titleMedium')[0] },
  //           h6: { fontSize: theme('fontSize.titleSmall')[0] },
  //           p: { fontSize: theme('fontSize.bodyLarge')[0] },
  //           small: { fontSize: theme('fontSize.bodySmall')[0] },
  //           a: {
  //             color: theme('colors.pipboyYellow'),
  //             '&:hover': {
  //               color: theme('colors.pipboyGreen'),
  //             },
  //           },
  //           code: {
  //             backgroundColor: theme('colors.pipboyBackground'),
  //             color: theme('colors.pipboyYellow'),
  //             fontFamily: theme('fontFamily.flutter'),
  //           },
  //           blockquote: {
  //             borderLeftColor: theme('colors.pipboyDarkGreen'),
  //             color: theme('colors.pipboyGray'),
  //           },
  //         },
  //       },
  //     }),
  //   },
  // },
  // plugins: [require('@tailwindcss/typography')],
};

export default config