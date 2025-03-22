import { defineConfig } from 'unocss/vite'
import config from '@slidev/client/uno.config'

export default defineConfig({
  ...config,
  shortcuts: [
    ...(Array.isArray(config.shortcuts) ? config.shortcuts : []),
    {
      'solana-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400',
      'solana-bg': 'bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800',
      'card-solana': 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg',
    }
  ],
  theme: {
    extend: {
      colors: {
        solana: {
          purple: '#9945FF',
          blue: '#14F195',
          cyan: '#00C2FF',
          pink: '#F338C3',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'background-pan': 'background-pan 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    }
  },
})