import { resolve } from 'path'

export default {
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/log.ts')
      ],
      name: 'Pluck',
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`
        }

        return `${name}.${format}`
      }
    },
    rollupOptions: {
      external: ['collect.js']
    }
  }
}
