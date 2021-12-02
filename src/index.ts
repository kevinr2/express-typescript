import app from './App'
import './dataBase'

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`puerto:${PORT}`)
})