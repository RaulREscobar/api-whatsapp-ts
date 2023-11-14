import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./infrastructure/router"
import path from 'path'

const port = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('tmp'))

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(`/`,routes)

app.listen(port, () => console.log(`Ready...${port}`))