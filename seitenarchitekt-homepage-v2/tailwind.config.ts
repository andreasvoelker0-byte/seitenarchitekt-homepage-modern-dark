import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        sand: '#f8fafc',
        brand: '#0f766e',
        accent: '#38bdf8'
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.14)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
}
