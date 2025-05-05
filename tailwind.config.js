// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: 'class',
//     content: ['./index.html'],
//     theme: {
//       extend: {
//         keyframes: {
//           rotate: {
//             '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
//             '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
//           },
//         },
//         animation: {
//           rotate: 'rotate 30s linear infinite',
//         },
//       },
//     },
//     plugins: [require('flowbite/plugin')],
//   };
tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          secondary: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          accent: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
        },
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
          'display': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
  }