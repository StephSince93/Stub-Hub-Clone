import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/api/users/currentuser', (req,res) => {
    if (!req.session?.jwt) { // equivalent to if (!req.session || req.session.jwt)
        return res.send({ currentuser: null })
    }
    try{
        const payload = jwt.verify(
            req.session.jwt, 
            process.env.JTW_KEY!)

        res.send({ currentUser: payload })   
        
    }catch(err) {
        res.send({currentUser: null })
    }
})

export { router as currentUserRouter }
