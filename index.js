const app = require('./app')

async function init() {
    const port = process.env.PORT || 3000
    await app.listen(port)
    console.log(`Server on port ${port}`)
}

init()