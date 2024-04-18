import express from 'express'
import bodyParser from 'body-parser'
import { AppDataSource } from './app-data-source.js'
import { router } from './router.js'
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router(express))


AppDataSource.initialize().then(async () => { 
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})