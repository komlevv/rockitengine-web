import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'


const host = '192.168.56.40'
const port = 8080
const app = express()

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
    publicPath: `http://${host}:${port}/`,
    stats: {colors: true}
})
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, '../dist/')))
app.get('/*', (req, res) => {
    res.write(middleware.context.outputFileSystem.readFileSync(
        path.join(__dirname, '../dist/index.html')))
    res.end()
})

app.listen(port, host, err => err
    ? console.log(err)
    : console.log(`Listening on http://${host}:${port}/`)
)