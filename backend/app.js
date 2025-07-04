import connectDb from "./db.js"
import express from "express"
import router from './router.js'

const app = express()
const port = 3000


connectDb()
app.use(express.json())
app.use("/posts", router)
app.listen(port, () =>  console.log(`app is running`))