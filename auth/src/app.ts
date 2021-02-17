import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import cookieSession from 'cookie-session'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'

const app = express()
app.set('trust proxy', true) // Behind a proxy
app.use(json())

app.use(
    cookieSession({
        signed: false,
        secure: true
    })
)
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

// Any route that doesn't exist on the server, will throw a 404 error
app.all('*', async (req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }