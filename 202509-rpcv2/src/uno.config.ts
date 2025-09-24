import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography()
  ],
  theme: {
    colors: {
      'v1ta': {
        'dark': '#0a0a0a',
        'blue': '#00D4FF',
        'purple': '#9945FF',
        'white': '#ffffff',
        'gray': '#6b7280'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  shortcuts: {
    'gradient-bg': 'bg-gradient-to-br from-v1ta-dark via-slate-900 to-slate-800',
    'gradient-text': 'bg-gradient-to-r from-v1ta-blue to-v1ta-purple bg-clip-text text-transparent',
    'glass-card': 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6',
    'btn-primary': 'bg-gradient-to-r from-v1ta-blue to-v1ta-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all',
    'glow-blue': 'shadow-lg shadow-v1ta-blue/30',
    'glow-purple': 'shadow-lg shadow-v1ta-purple/30'
  },
  rules: [
    [/^glow-(.+)$/, ([, color]) => ({ 'box-shadow': `0 0 30px rgba(var(--un-color-${color}), 0.3)` })],
  ]
})