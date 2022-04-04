import express from 'express'
import Database from 'better-sqlite3'

const db = Database('./db/skeleton.db')

const router = express.Router()

router.get('/api', (req, res) => {
    const result = db.prepare('SELECT * FROM nametable').all()
    res.send(result[0])
})


router.use('/', express.static('./client/dist'))

export default router