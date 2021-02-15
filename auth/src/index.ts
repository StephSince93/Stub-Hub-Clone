import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import mongoose from 'mongoose' 

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'
const app = express()
app.use(json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

// Any route that doesn't exist on the server, will throw a 404 error
app.all('*', async (req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
      console.log('Connected to mongodb!')  
    }catch(err){
        console.error(err)
    }

    app.listen(3000, () => {
        console.log('Listening on Port 3000!!!')
    })
}

start()
