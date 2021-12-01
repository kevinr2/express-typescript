import express from 'express'
import Video from './routes/Videos.routes'
import morgan from 'morgan';
import cors from 'cors'

const app = express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(Video)

export default app