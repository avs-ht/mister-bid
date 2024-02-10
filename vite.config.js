import {defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import {resolve} from 'path'

export default defineConfig({
    root: 'src',
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials')
    })]
})