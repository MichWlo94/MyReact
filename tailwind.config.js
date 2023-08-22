/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            fontSize: {
              '0.1': '0.0625rem',  // 1px
              '0.25': '0.15625rem', // 2.5px
              '0.5': '0.3125rem',   // 5px
              '0.75': '0.46875rem', // 7.5px
              '1': '0.625rem',    // 10px
              '2': '0.75rem',     // 12px
              '3': '0.875rem',    // 14px
              '4': '1rem',        // 16px
              '5': '1.125rem',    // 18px
              '6': '1.25rem',     // 20px
              '7': '1.375rem',    // 22px
              '8': '1.5rem',      // 24px
              '9': '1.625rem',    // 26px
              '10': '1.75rem',    // 28px
              '11': '1.875rem',   // 30px
              '12': '2rem',       // 32px
              '14': '2.25rem',    // 36px
              '16': '2.5rem',     // 40px
              '20': '3rem',       // 48px
              '24': '3.75rem',    // 60px
              '28': '4.5rem',     // 72px
              '32': '5rem',       // 80px
              '36': '5.625rem',   // 90px
              '40': '6.25rem',    // 100px
              '44': '6.875rem',   // 110px
              '48': '7.5rem',     // 120px
              '52': '8.125rem',   // 130px
              '56': '8.75rem',    // 140px
              '60': '9.375rem',   // 150px
              '64': '10rem',      // 160px
              '72': '11.25rem',   // 180px
              '80': '12.5rem',    // 200px
              '96': '15rem',      // 240px
          },
          fontFamily: {
            'lobster': ['Lobster'],
            'fredericka': ['Fredericka the Great'],
            'perma': ['Permanent Marker'],
            'righteous': ['Righteous'],
            'bree': ['Bree Serif'],
            'amatic': ['Amatic SC'],
          },
          boxShadow: {
            'neon-glow-pink': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 10, 255, 0.8), 0 0 20px rgba(255, 10, 255, 0.8), 0 0 30px rgba(255, 10, 255, 0.8), 0 0 40px rgba(255, 10, 255, 0.8), 0 0 20px rgba(255, 10, 255, 0.8)',
            'neon-glow-green': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 20px rgba(1, 255, 1, 0.8), 0 0 20px rgba(1, 255, 1, 0.8), 0 0 30px rgba(1, 255, 1, 0.8), 0 0 40px rgba(1, 255, 1, 0.8), 0 0 20px rgba(1, 255, 1, 0.8)',
            'neon-glow-blue': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 20px rgba(1, 2, 255, 0.8), 0 0 20px rgba(1, 2, 255, 0.8), 0 0 30px rgba(1, 2, 255, 0.8), 0 0 40px rgba(1, 2, 255, 0.8), 0 0 20px rgba(1, 2, 255, 0.8)',
          },
    },
  },
  plugins: [],
}

