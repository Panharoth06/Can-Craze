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
    theme: {
      extend: {
        fontFamily: {
          'product-sans': ['Product Sans', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out forwards',
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          'slide-in': 'slideIn 0.5s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideIn: {
            '0%': { transform: 'translateX(20px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          }
        }
      }
    }
  }
  

